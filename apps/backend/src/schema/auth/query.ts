import { db } from "../../db";
import { builder } from "../builder";
import { User } from "./user";

builder.queryType({
  fields: (t) => ({
    me: t.prismaField({
      type: User,
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
  }),
});
