import { db } from "@/database/db";
import { usersTable } from "@/database/schemas/users";
import { eq } from "drizzle-orm";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { SessionType } from "@/server-actions/auth/getSession";
import jwt from "@/lib/jwt";

export async function POST(request: Request) {
  try {
    const response = await request.json();

    if (!response.name) {
      throw new Error("Full Name is required");
    } else if (!response.name.includes(" ")) {
      throw new Error("Enter your first and last name");
    } else if (!response.username) {
      throw new Error("Username is required");
    } else if (response.username.includes(" ")) {
      throw new Error("Username must not include spaces");
    } else if (!response.password) {
      throw new Error("Password is required");
    } else if (response.password.length < 8) {
      throw new Error("Password must have at least 8 characters");
    }

    const { name, username, password } = response;

    const existingUser = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.username, username))
      .then((res) => (res.length === 1 ? res[0] : null));

    if (existingUser) {
      throw new Error("Username already in use");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUser = await db
      .insert(usersTable)
      .values({ name, username, password: hashedPassword })
      .returning()
      .then((res) => (res.length === 1 ? res[0] : null));
    if (!createdUser) {
      throw new Error("An unexpected error ocurred");
    }

    const session = {
      id: createdUser.id,
      name: createdUser.name,
      username: createdUser.username,
    } satisfies SessionType;

    const token = await jwt.sign(session);

    if (!token) {
      throw new Error("An unexpected error ocurred");
    }

    cookies().set("session", token);

    return Response.json(
      { message: "User created successfully" },
      { status: 200 },
    );
  } catch (error) {
    if (error instanceof Error) {
      return Response.json({ message: error.message }, { status: 400 });
    }
  }
}
