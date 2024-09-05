"use server";

import { db } from "@/database/db";
import { todosTable, type TodosType } from "@/database/schemas/todos";
import { eq } from "drizzle-orm";

type UpdateTodoType = Omit<
  TodosType,
  "text" | "tags" | "id" | "isCompleted" | "createdAt"
> & {
  text?: string;
  tags?: string[];
  id?: string;
  isCompleted?: boolean;
  createdAt?: Date;
};

export default async function updateTodo(
  id: string,
  todo: UpdateTodoType,
): Promise<void> {
  await db.update(todosTable).set(todo).where(eq(todosTable.id, id));
}
