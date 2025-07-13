import { createYoga } from "graphql-yoga";
import { schema } from "./schema/schema";

export const yoga = createYoga({
  graphqlEndpoint: "/",
  schema,
  context: ({ request }) => ({ request }),
});
