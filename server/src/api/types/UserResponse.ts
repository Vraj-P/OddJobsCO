import { enumType, inputObjectType, objectType } from "nexus";

export const User = objectType({
  name: "User",
  definition(t) {
    t.nonNull.id("id");
    t.nonNull.field("createdAt", { type: "Timestamp" });
    t.nonNull.field("updatedAt", { type: "Timestamp" });
    t.nonNull.string("name");
    t.nonNull.string("email");
    t.nonNull.string("password");
  },
});

export const UserRegisterInput = inputObjectType({
  name: "UserRegisterInput",
  definition(t) {
    t.nonNull.string("name");
    t.nonNull.string("password");
    t.nonNull.string("email");
  },
});

export const UserLoginInput = inputObjectType({
  name: "UserLoginInput",
  definition(t) {
    t.nonNull.string("password");
    t.nonNull.string("email");
  },
});

export const UserEditInput = inputObjectType({
  name: "UserEditInput",
  definition(t) {
    t.nonNull.string("name");
    t.nonNull.string("password");
    t.nonNull.string("email");
  },
});
