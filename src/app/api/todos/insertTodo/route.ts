import { db } from "@/database/db";
import { todosTable } from "@/database/schemas/todos";
import getSession from "@/lib/auth/getSession";
import { isRedirectError } from "next/dist/client/components/redirect";

export async function POST(request: Request) {
  try {
    const response = await request.json();

    if (!response.text) {
      throw new Error("Text is required");
    } else if (response.parentTodoId === undefined) {
      throw new Error("ParentTodoId is not null or string");
    }

    const { text, parentTodoId } = response;

    const session = await getSession();
    const userId = session?.id;
    if (!userId) {
      throw new Error("User not found");
    }

    const newTodo = await db
      .insert(todosTable)
      .values({ text, userId, isCompleted: false, parentTodoId })
      .returning()
      .then((res) => (res.length === 1 ? res[0] : null));

    return new Response(JSON.stringify(newTodo), { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return Response.json({ message: error.message }, { status: 400 });
    }
    if (isRedirectError(error)) {
      throw error;
    }
  }
}
