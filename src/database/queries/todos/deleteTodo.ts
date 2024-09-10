"use server";
import { db } from "@/database/db";
import { todosTable } from "@/database/schemas/todos";
import { eq } from "drizzle-orm";

export default async function deleteTodo(id: string): Promise<void> {
  await db.delete(todosTable).where(eq(todosTable.id, id));
}
