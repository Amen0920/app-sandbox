import PrismaPlugin from "@pothos/plugin-prisma";
import SchemaBuilder from "@pothos/core";
import type PrismaTypes from "../../prisma/generated.d.ts";
import { db } from "../db";

export const builder = new SchemaBuilder<{ PrismaTypes: PrismaTypes }>({
  plugins: [PrismaPlugin],
  prisma: {
    client: db,
  },
});
