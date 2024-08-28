"use server";

import { db } from "@/database/db";
import { todosTable, type TodosType } from "@/database/schemas/todos";

export default async function selectAllTodos(): Promise<TodosType[]> {
  const todos = await db.select().from(todosTable);
  return todos;
}
