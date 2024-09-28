import { db } from "@/database/db";
import { todosTable } from "@/database/schemas/todos";
import getSession from "@/lib/auth/getSession";
import { and, eq, or } from "drizzle-orm";
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
      isStared,
    }: {
      id: string;
      text: string | undefined;
      isCompleted: boolean | undefined;
      isStared: boolean | undefined;
    } = response;

    if (
      text === undefined &&
      isCompleted === undefined &&
      isStared === undefined
    ) {
      return;
    }

    const session = await getSession();
    const userId = session?.id;
    if (!userId) {
      throw new Error("User not found");
    }

    if (isCompleted === undefined && isStared !== undefined) {
      await db
        .update(todosTable)
        .set({ isStared })
        .where(and(eq(todosTable.userId, userId), eq(todosTable.id, id)));
    }

    if (isCompleted !== undefined && isStared === undefined) {
      await db
        .update(todosTable)
        .set({ isCompleted })
        .where(
          and(
            eq(todosTable.userId, userId),
            or(eq(todosTable.id, id), eq(todosTable.parentTodoId, id)),
          ),
        );
    }

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
