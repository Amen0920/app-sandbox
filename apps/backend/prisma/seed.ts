import { db } from "@/src/db";
import * as bcrypt from "bcrypt";

async function main() {
  console.log("Seeding...");

  const hashedPassword = await bcrypt.hash("password123", 10);

  await db.user.upsert({
    where: { email: "test@example.com" },
    update: {},
    create: {
      email: "test@example.com",
      password: hashedPassword,
    },
  });

  console.log("Seed data created successfully");
}

main()
  .catch((e) => {
    console.error("Seeding Error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
