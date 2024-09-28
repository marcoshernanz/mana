import { db } from "@/database/db";
import { todosTable } from "@/database/schemas/todos";
import { usersTable } from "@/database/schemas/users";
import getSession from "@/server-actions/auth/getSession";
import { asc, desc, eq, isNotNull, isNull } from "drizzle-orm";
import { isRedirectError } from "next/dist/client/components/redirect";

type TodoResponseType = {
  todos: {
    createdAt: Date;
    isStared: boolean;
    id: string;
    text: string;
    isCompleted: boolean;
    userId: string;
    parentTodoId: string | null;
  };
  users: {
    createdAt: Date;
    id: string;
    name: string;
    username: string;
    password: string;
  } | null;
}[];

export async function POST(request: Request) {
  try {
    const response = await request.json();

    if (response.orderBy === undefined) {
      throw new Error("Order by is required");
    } else if (response.descending === undefined) {
      throw new Error("Descending is required");
    }

    console.log("route", response.orderBy);

    const { orderBy, descending, subTasks = false } = response;

    const session = await getSession();
    if (!session) throw new Error("User not logged in");

    const orderValue = (
      {
        "My Order": "createdAt",
        Date: "createdAt",
        Stared: "isStared",
      } as const
    )[orderBy as "Date" | "Stared"];

    const tasks = await db
      .select()
      .from(todosTable)
      .where(
        subTasks
          ? isNotNull(todosTable.parentTodoId)
          : isNull(todosTable.parentTodoId),
      )
      .orderBy(
        descending ? desc(todosTable[orderValue]) : asc(todosTable[orderValue]),
      );

    console.log("tasks", tasks);

    // // const tweets = await getTweets.json();
    // const formattedTodos = tasks.map((todo: TodoResponseType) => ({
    //   id: todo.todos.id,
    //   parentTodoId: todo.todos.parentTodoId,
    //   text: todo.todos.text,
    //   isStared: todo.todos.isStared,
    // }));
    return new Response(JSON.stringify(tasks), { status: 200 });
    // }
  } catch (error) {
    if (error instanceof Error) {
      return Response.json({ message: error.message }, { status: 400 });
    }
    if (isRedirectError(error)) {
      throw error;
    }
  }
}
