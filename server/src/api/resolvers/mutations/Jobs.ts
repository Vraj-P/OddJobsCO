import { extendType, nonNull } from "nexus";
import { Job, PostJobInput } from "../../types/JobTypes";
import { Context } from "../../../context";
import { JobService } from "../../../services/JobService";

export const JobMutations = extendType({
  type: "Mutation",
  definition(t) {
    t.field("postJob", {
      type: Job,
      args: {
        job: nonNull(PostJobInput),
      },
      resolve: async (_, { job }, ctx: Context) => {
        const resp = await JobService.postJob(job, ctx);
        return resp;
      },
    });
  },
});
