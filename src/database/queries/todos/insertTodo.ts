"use server";

import { db } from "@/database/db";
import { todosTable, type TodosType } from "@/database/schemas/todos";

type InsertTodoType = Omit<TodosType, "id" | "isCompleted" | "createdAt"> & {
  id?: string;
  isCompleted?: boolean;
  createdAt?: Date;
};

export default async function insertTodo(todo: InsertTodoType): Promise<void> {
  await db.insert(todosTable).values(todo);
}
