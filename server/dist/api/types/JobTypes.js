"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostJobInput = exports.Job = void 0;
const nexus_1 = require("nexus");
exports.Job = (0, nexus_1.objectType)({
    name: "Job",
    definition(t) {
        t.nonNull.id("id");
        t.nonNull.field("createdAt", { type: "Timestamp" });
        t.nonNull.field("updatedAt", { type: "Timestamp" });
        t.nonNull.string("title");
        t.nonNull.string("description");
        t.nonNull.int("price");
        t.nonNull.string("userId");
    },
});
exports.PostJobInput = (0, nexus_1.inputObjectType)({
    name: "PostJobInput",
    definition(t) {
        t.nonNull.string("title");
        t.nonNull.string("description");
        t.nonNull.int("price");
    },
});
