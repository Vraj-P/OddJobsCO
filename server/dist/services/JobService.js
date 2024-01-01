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
exports.JobService = void 0;
const AuthUtil_1 = require("../util/AuthUtil");
class JobService {
    static getJobs(ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield AuthUtil_1.AuthUtil.verifyAndGetUser(ctx);
                const jobs = yield ctx.prisma.job.findMany({});
                return jobs;
            }
            catch (e) {
                throw new Error(`Error fetching users from JobService.getJobs: ${e}`);
            }
        });
    }
    static postJob(job, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield AuthUtil_1.AuthUtil.verifyAndGetUser(ctx);
                const newJob = yield ctx.prisma.job.create({
                    data: {
                        title: job.title,
                        description: job.description,
                        price: job.price,
                        userId: user.id,
                    },
                });
                return newJob;
            }
            catch (e) {
                throw new Error(`Error posting job from JobService.postJob: ${e}`);
            }
        });
    }
}
exports.JobService = JobService;
