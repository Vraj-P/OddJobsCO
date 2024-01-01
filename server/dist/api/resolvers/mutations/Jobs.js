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
exports.JobMutations = void 0;
const nexus_1 = require("nexus");
const JobTypes_1 = require("../../types/JobTypes");
const JobService_1 = require("../../../services/JobService");
exports.JobMutations = (0, nexus_1.extendType)({
    type: "Mutation",
    definition(t) {
        t.field("postJob", {
            type: JobTypes_1.Job,
            args: {
                job: (0, nexus_1.nonNull)(JobTypes_1.PostJobInput),
            },
            resolve: (_, { job }, ctx) => __awaiter(this, void 0, void 0, function* () {
                const resp = yield JobService_1.JobService.postJob(job, ctx);
                return resp;
            }),
        });
    },
});
