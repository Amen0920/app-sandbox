import { createYoga } from "graphql-yoga";
import { schema } from "./schema/schema";
import { db } from "./db";

export const yoga = createYoga({
  graphqlEndpoint: "/",
  schema,
  context: {
    client: db,
  },
});
