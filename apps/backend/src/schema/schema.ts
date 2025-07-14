import "./auth";
import { builder } from "./builder";

builder.queryType({
  fields: (t) => ({
    hello: t.string({
      resolve: () => {
        return "world";
      },
    }),
  }),
});

export const schema = builder.toSchema();
