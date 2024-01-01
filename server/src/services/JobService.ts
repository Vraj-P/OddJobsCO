import { Context } from "../context";
import { AuthUtil } from "../util/AuthUtil";

interface PostJob {
  title: string;
  description: string;
  price: number;
}

export class JobService {
  public static async getJobs(ctx: Context) {
    try {
      const user = await AuthUtil.verifyAndGetUser(ctx);

      const jobs = await ctx.prisma.job.findMany({});
      return jobs;
    } catch (e) {
      throw new Error(`Error fetching users from JobService.getJobs: ${e}`);
    }
  }

  public static async postJob(job: PostJob, ctx: Context) {
    try {
      const user = await AuthUtil.verifyAndGetUser(ctx);

      const newJob = await ctx.prisma.job.create({
        data: {
          title: job.title,
          description: job.description,
          price: job.price,
          userId: user.id,
        },
      });

      return newJob;
    } catch (e) {
      throw new Error(`Error posting job from JobService.postJob: ${e}`);
    }
  }
}
