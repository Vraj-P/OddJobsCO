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
exports.AuthUtil = void 0;
const jwt = __importStar(require("jsonwebtoken"));
const cookie = __importStar(require("cookie"));
class AuthUtil {
    static generateAuthToken(user, ctx) {
        const token = jwt.sign({ email: user.email }, process.env.SECRET_KEY, { expiresIn: "7d" }); // Expires in 7 days
        const cookieOptions = {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
            sameSite: true,
        };
        const cookieString = cookie.serialize("authToken", token, cookieOptions);
        ctx.res.setHeader("Set-Cookie", cookieString);
    }
    static verifyAndGetUser(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const decoded = AuthUtil.verifyUser(ctx);
                const user = yield AuthUtil.getUser(decoded.email, ctx); // todo: prevent password from being passed back
                return user;
            }
            catch (e) {
                throw new Error(`Error verifying and getting user from AuthUtil.verifyAndGetUser: ${e}`);
            }
        });
    }
    static verifyUser(ctx) {
        const authToken = ctx.req.cookies.authToken;
        if (!authToken) {
            throw new Error("Authentication token not found");
        }
        const decoded = jwt.verify(authToken, process.env.SECRET_KEY);
        if (typeof decoded === "string" || !decoded) {
            throw new Error("Invalid or expired authentication token");
        }
        return decoded;
    }
    static invalidateSession(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            const cookieOptions = {
                httpOnly: true,
                expires: new Date(0),
                sameSite: true,
            };
            const cookieString = cookie.serialize("authToken", "", cookieOptions);
            ctx.res.setHeader("Set-Cookie", cookieString);
        });
    }
    static getUser(email, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield ctx.prisma.user.findUnique({
                    where: {
                        email: email,
                    },
                });
                if (!user) {
                    throw new Error("User not found");
                }
                return user;
            }
            catch (e) {
                throw new Error(`Error fetching user from AuthUtil.getUser: ${e}`);
            }
        });
    }
}
exports.AuthUtil = AuthUtil;
