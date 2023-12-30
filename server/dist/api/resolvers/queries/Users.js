"use strict";
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
exports.UserQueries = void 0;
const nexus_1 = require("nexus");
const UserResponse_1 = require("../../types/UserResponse");
const UserService_1 = require("../../../services/UserService");
exports.UserQueries = (0, nexus_1.extendType)({
    type: 'Query',
    definition(t) {
        t.field('getUsers', {
            type: (0, nexus_1.list)(UserResponse_1.User),
            args: {},
            resolve: (_, {}, ctx) => __awaiter(this, void 0, void 0, function* () {
                const resp = yield UserService_1.UserService.getUsers(ctx);
                return resp;
            })
        });
    }
});
