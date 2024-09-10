import { db } from "@/database/db";
import { todosTable, type TodosType } from "@/database/schemas/todos";

export default async function insertTodos(
  text: string,
  tags: string[],
  userId: string,
): Promise<void> {
  await db.insert(todosTable).values({ text, tags, userId });
}
