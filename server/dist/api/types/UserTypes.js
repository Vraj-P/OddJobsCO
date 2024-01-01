"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEditInput = exports.UserLoginInput = exports.UserRegisterInput = exports.User = void 0;
const nexus_1 = require("nexus");
const JobTypes_1 = require("./JobTypes");
exports.User = (0, nexus_1.objectType)({
    name: "User",
    definition(t) {
        t.nonNull.id("id");
        t.nonNull.field("createdAt", { type: "Timestamp" });
        t.nonNull.field("updatedAt", { type: "Timestamp" });
        t.nonNull.string("name");
        t.nonNull.string("email");
        t.nonNull.string("password");
        t.nullable.list.field('createdJobs', { type: JobTypes_1.Job });
    },
});
exports.UserRegisterInput = (0, nexus_1.inputObjectType)({
    name: "UserRegisterInput",
    definition(t) {
        t.nonNull.string("name");
        t.nonNull.string("password");
        t.nonNull.string("email");
    },
});
exports.UserLoginInput = (0, nexus_1.inputObjectType)({
    name: "UserLoginInput",
    definition(t) {
        t.nonNull.string("password");
        t.nonNull.string("email");
    },
});
exports.UserEditInput = (0, nexus_1.inputObjectType)({
    name: "UserEditInput",
    definition(t) {
        t.nonNull.string("name");
        t.nonNull.string("password");
        t.nonNull.string("email");
    },
});
