import { db } from "@/database/db";
import { usersTable, UserType } from "@/database/schemas/users";
import { eq } from "drizzle-orm";
import bcrypt from "bcrypt";

export default async function insertUsers(
  name: string,
  username: string,
  password: string,
): Promise<void> {
  const hashedPassword = await bcrypt.hash(password, 10);
  await db
    .insert(usersTable)
    .values({ name, username, password: hashedPassword });
}
