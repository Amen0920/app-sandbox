import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { yoga } from "./yoga";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.mount("/graphql", yoga);

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
