import getUserByUsername from "@/database/queries/auth/getUserByUsername";
import jwt from "@/lib/jwt";
import { SessionType } from "@/server-actions/auth/getSession";
import bcrypt from "bcrypt";
import { isRedirectError } from "next/dist/client/components/redirect";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const response = await request.json();

    if (!response.username) {
      throw new Error("Username is required");
    } else if (!response.password) {
      throw new Error("Password is required");
    }

    const { username, password } = response;

    const selectedUser = await getUserByUsername(username);
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

    const session = {
      id: selectedUser.id,
      name: selectedUser.name,
      username: selectedUser.username,
    } satisfies SessionType;

    const token = await jwt.sign(session);

    if (!token) {
      throw new Error("An unexpected error ocurred");
    }

    cookies().set("session", token);

    return new Response("");
  } catch (error) {
    if (error instanceof Error) {
      return Response.json({ message: error.message }, { status: 400 });
    }
    if (isRedirectError(error)) {
      throw error;
    }
  }
}
