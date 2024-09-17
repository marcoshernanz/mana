import { db } from "@/database/db";
import { todosTable } from "@/database/schemas/todos";
import getSession from "@/server-actions/auth/getSession";
import { isRedirectError } from "next/dist/client/components/redirect";

export async function POST(request: Request) {
  try {
    const response = await request.json();

    if (!response.text) {
      throw new Error("Text is required");
    }

    const { text, tags } = response;

    const session = await getSession();

    const userId = session?.id;

    if (!userId) {
      return;
    }

    console.log("AAA");

    await db.insert(todosTable).values({ text, tags, userId });

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
