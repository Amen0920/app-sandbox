import { printSchema } from "graphql";
import type { CodegenConfig } from "@graphql-codegen/cli";
import { schema } from "./src/schema/schema";

const config: CodegenConfig = {
  schema: printSchema(schema),
  generates: {
    "schema.graphql": {
      plugins: ["schema-ast"],
    },
  },
};

export default config;
