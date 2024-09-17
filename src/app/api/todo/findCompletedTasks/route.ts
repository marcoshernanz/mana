import { db } from "@/database/db";
import { usersTable } from "@/database/schemas/users";
import { eq } from "drizzle-orm";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import getSession, { SessionType } from "@/server-actions/auth/getSession";
import jwt from "@/lib/jwt";

export async function GET(request: Request) {
  // const session = await getSession();
  // if (!session) return null;

  // const userId = session.id;

  // const tasks = await db
  //   .select()
  //   .from(todosTable)
  //   .where(
  //     and(eq(todosTable.userId, userId), eq(todosTable.isCompleted, false)),
  //   );

  try {
    const response = await request.json();

    if (!response.id) {
      throw new Error("Some unexpected error ocurred");
    } else if (!response.isLiked) {
      throw new Error("Some unexpected error ocurred");
    }

    const { id, isLiked } = response;

    // const createdUser = await db
    //   .insert(usersTable)
    //   .values({ name, username, password: hashedPassword })
    //   .returning()
    //   .then((res) => (res.length === 1 ? res[0] : null));
    // if (!createdUser) {
    //   throw new Error("An unexpected error ocurred");
    // }

    // const session = {
    //   id: createdUser.id,
    //   name: createdUser.name,
    //   username: createdUser.username,
    // } satisfies SessionType;

    // const token = await jwt.sign(session);

    // if (!token) {
    //   throw new Error("An unexpected error ocurred");
    // }

    // cookies().set("session", token);

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
