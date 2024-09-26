import { db } from "@/database/db";
import { todosTable } from "@/database/schemas/todos";
import { eq } from "drizzle-orm";
import { isRedirectError } from "next/dist/client/components/redirect";

export async function DELETE(request: Request) {
  try {
    const response = await request.json();

    if (!response.id) {
      throw new Error("Id is required");
    }

    await db.delete(todosTable).where(eq(todosTable.id, response.id));

    return new Response("", { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return Response.json({ message: error.message }, { status: 400 });
    }
    if (isRedirectError(error)) {
      throw error;
    }
  }
}
