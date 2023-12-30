import {extendType, nonNull} from "nexus";
import {User, UserLoginInput, UserRegisterInput} from "../../types/UserResponse";
import {Context} from "../../../context";
import {UserService} from "../../../services/UserService";

export const UserMutations = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('register', {
      type: User,
      args: {
        user: nonNull(UserRegisterInput)
      },
      resolve: async (_, {user}, ctx: Context) => {
        const resp = await UserService.register(user, ctx);
        return resp;
      }
    })
    t.field('login', {
      type: User,
      args: {
        user: nonNull(UserLoginInput)
      },
      resolve: async (_, {user}, ctx: Context) => {
        const resp = await UserService.login(user, ctx);
        return resp;
      }
    })
  }
})