import { db } from "@/src/db";
import { builder } from "./builder";

builder.prismaObject("User", {
  fields: (t) => ({
    id: t.exposeID("id"),
    email: t.exposeString("email"),
  }),
});

builder.queryType({});

builder.queryType({
  fields: (t) => ({
    me: t.prismaField({
      type: "User",
      nullable: true,
      args: {
        email: t.arg.string({ required: true }),
      },
      resolve: (query, _, args) => {
        return db.user.findUnique({
          ...query,
          where: {
            email: args.email,
          },
        });
      },
    }),
    hello: t.string({
      resolve: () => {
        return "world";
      },
    }),
  }),
});

export const schema = builder.toSchema();
