import { db } from "@/database/db";
import { todosTable } from "@/database/schemas/todos";
import { eq } from "drizzle-orm";
import { isRedirectError } from "next/dist/client/components/redirect";

export async function PATCH(request: Request) {
  try {
    const response = await request.json();

    if (!response.id) {
      throw new Error("ID is required");
    }

    const { id, todo } = response;

    await db.update(todosTable).set(todo).where(eq(todosTable.id, id));

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
