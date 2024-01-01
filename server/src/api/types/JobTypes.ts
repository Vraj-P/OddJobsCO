import { inputObjectType, objectType } from "nexus";

export const Job = objectType({
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

export const PostJobInput = inputObjectType({
  name: "PostJobInput",
  definition(t) {
    t.nonNull.string("title");
    t.nonNull.string("description");
    t.nonNull.int("price");
  },
});
