import { Context } from "../../../context";
import { list, extendType } from "nexus";
import { Job } from "../../types/JobTypes";
import { JobService } from "../../../services/JobService";

export const JobQueries = extendType({
  type: "Query",
  definition(t) {
    t.field("getJobs", {
      type: list(Job),
      args: {},
      resolve: async (_, {}, ctx: Context) => {
        const resp = await JobService.getJobs(ctx);
        return resp;
      },
    });
  },
});
