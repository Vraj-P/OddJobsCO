"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const bcrypt = __importStar(require("bcrypt"));
const AuthUtil_1 = require("../util/AuthUtil");
class UserService {
    static register(user, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const existingUser = yield ctx.prisma.user.findUnique({
                    where: {
                        email: user.email,
                    },
                });
                if (existingUser) {
                    throw new Error("User with the same email already exists");
                }
                const saltRounds = 10; // Todo: do a better job at hiding this
                const salt = yield bcrypt.genSalt(saltRounds);
                const hashedPassword = yield bcrypt.hash(user.password, salt);
                let resp = yield ctx.prisma.user.create({
                    data: {
                        name: user.name,
                        email: user.email,
                        password: hashedPassword,
                    },
                });
                return resp;
            }
            catch (e) {
                throw new Error(`User registration failed from UserService.register: ${e}`);
            }
        });
    }
    static login(user, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const existingUser = yield ctx.prisma.user.findUnique({
                    where: {
                        email: user.email,
                    },
                });
                if (!existingUser) {
                    throw new Error("User not found");
                }
                const passwordMatch = yield bcrypt.compare(user.password, existingUser.password);
                if (!passwordMatch) {
                    throw new Error("Invalid password");
                }
                AuthUtil_1.AuthUtil.generateAuthToken(existingUser, ctx);
                return existingUser;
            }
            catch (e) {
                throw new Error(`Login failed from UserService.login: ${e}`);
            }
        });
    }
    static logout(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const currUser = yield AuthUtil_1.AuthUtil.verifyAndGetUser(ctx);
                if (!currUser) {
                    throw new Error("User not authenticated");
                }
                yield AuthUtil_1.AuthUtil.invalidateSession(ctx);
                return currUser;
            }
            catch (e) {
                throw new Error(`Logout failed from UserService.logout: ${e}`);
            }
        });
    }
    static getUsers(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield AuthUtil_1.AuthUtil.verifyAndGetUser(ctx);
                if (!user) {
                    throw new Error("Error retrieving logged in user");
                }
                const users = yield ctx.prisma.user.findMany({
                    include: {
                        Job: true
                    }
                });
                console.log(users);
                return users;
            }
            catch (e) {
                throw new Error(`Error fetching users from UserService.getUsers: ${e}`);
            }
        });
    }
    static edit(user, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const currUser = yield AuthUtil_1.AuthUtil.verifyAndGetUser(ctx);
                if (!currUser) {
                    throw new Error("Error retrieving logged in user");
                }
                const existingUser = yield ctx.prisma.user.findUnique({
                    where: { email: user.email },
                });
                if (existingUser) {
                    throw new Error("email has already been taken");
                }
                const saltRounds = 10; // Todo: do a better job at hiding this
                const salt = yield bcrypt.genSalt(saltRounds);
                const hashedPassword = yield bcrypt.hash(user.password, salt);
                const resp = yield ctx.prisma.user.update({
                    where: {
                        id: currUser.id,
                    },
                    data: {
                        name: user.name,
                        email: user.email,
                        password: hashedPassword,
                    },
                });
                AuthUtil_1.AuthUtil.generateAuthToken(resp, ctx);
                return resp;
            }
            catch (e) {
                throw new Error(`Error fetching users from UserService.getUsers: ${e}`);
            }
        });
    }
}
exports.UserService = UserService;
