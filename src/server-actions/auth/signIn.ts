"use server";

import "../../../envConfig";
import { db } from "@/database/db";
import { usersTable } from "@/database/schemas/users";
import { eq } from "drizzle-orm";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

interface signInProps {
  username: string;
  password: string;
}

export default async function signIn({
  username,
  password,
}: signInProps): Promise<{ error?: string }> {
  try {
    if (!username) {
      throw new Error("Username is required");
    } else if (!password) {
      throw new Error("Password is required");
    }

    const selectedUser = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.username, username))
      .then((res) => (res.length === 1 ? res[0] : null));
    if (!selectedUser) {
      throw new Error("Incorrect username or password");
    }

    const passwordsMatch = await bcrypt.compare(
      password,
      selectedUser.password,
    );
    if (!passwordsMatch) {
      throw new Error("Incorrect username or password");
    }

    const token = jwt.sign(
      { id: selectedUser.id, name: selectedUser.name },
      process.env.AUTH_SECRET!,
    );

    if (!token) {
      throw new Error("An unexpected error ocurred");
    }

    cookies().set("session", token);
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
  }

  return {};
}
