// import { db } from "@/database/db";
// import { todosTable, type TodosType } from "@/database/schemas/todos";

// export default async function selectTodos(): Promise<TodosType[]> {
//   const todos = await db.select().from(todosTable);
//   return todos;
// }

"use server";

import { db } from "@/database/db";
import { todosTable } from "@/database/schemas/todos";
import { usersTable } from "@/database/schemas/users";
import { asc, desc, eq, isNotNull, isNull } from "drizzle-orm";

interface selectTodosProps {
  numTodos: number;
  offset: number;
  orderBy: "date" | "completed";
  descending: boolean;
}

export default async function selectTodos({
  numTodos,
  offset,
  orderBy,
  descending,
}: selectTodosProps) {
  const orderValue = (
    {
      date: "createdAt",
      completed: "isCompleted",
    } as const
  )[orderBy as "date" | "completed"];

  const todos = await db
    .select()
    .from(todosTable)
    .leftJoin(usersTable, eq(todosTable.userId, usersTable.id))
    .limit(numTodos)
    .offset(offset)
    .orderBy(
      descending ? desc(todosTable[orderValue]) : asc(todosTable[orderValue]),
    );

  return todos;
}
