import "./envConfig.ts";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/database/schemas/*.ts",
  out: "./drizzle/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
