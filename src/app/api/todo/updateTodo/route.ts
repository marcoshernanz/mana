import { db } from "@/database/db";
import { todosTable } from "@/database/schemas/todos";
import getSession from "@/server-actions/auth/getSession";
import { and, eq } from "drizzle-orm";
import { isRedirectError } from "next/dist/client/components/redirect";

export async function PATCH(request: Request) {
  try {
    const response = await request.json();

    if (!response.id) {
      throw new Error("Id is required");
    }

    const {
      id,
      text,
      isCompleted,
    }: {
      id: string;
      text: string | undefined;
      isCompleted: boolean | undefined;
    } = response;

    if (text === undefined && isCompleted === undefined) {
      return;
    }

    const session = await getSession();
    const userId = session?.id;
    if (!userId) {
      throw new Error("User not found");
    }

    await db
      .update(todosTable)
      .set({ text, isCompleted })
      .where(and(eq(todosTable.id, id), eq(todosTable.userId, userId)));

    return Response.json({ message: "Todo updated" }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return Response.json({ message: error.message }, { status: 400 });
    }
    if (isRedirectError(error)) {
      throw error;
    }
  }
}
