import { Context } from "../../../context";
import { list, extendType } from "nexus";
import { User } from "../../types/UserTypes";
import { UserService } from "../../../services/UserService";

export const UserQueries = extendType({
  type: "Query",
  definition(t) {
    t.field("getUsers", {
      type: list(User),
      args: {},
      resolve: async (_, {}, ctx: Context) => {
        const resp = await UserService.getUsers(ctx);
        return resp;
      },
    });
  },
});
