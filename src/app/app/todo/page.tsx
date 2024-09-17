import getSession from "@/server-actions/auth/getSession";
import { db } from "@/database/db";
import { todosTable } from "@/database/schemas/todos";
import { and, eq } from "drizzle-orm";
import Todos from "./Todos";
import { usersTable } from "@/database/schemas/users";

export type TaskType = {
  id: string;
  text: string;
  isCompleted: boolean;
  author: string;
  isUserTweet: boolean;
};

export default async function TodoPage() {
  const session = await getSession();

  const userId = session?.id;

  if (!userId) {
    return;
  }

  //get data
  const data = await db
    .select()
    .from(todosTable)
    .where(
      and(eq(todosTable.userId, userId), eq(todosTable.isCompleted, false)),
    );

  const todos = await db
    .select()
    .from(todosTable)
    .leftJoin(usersTable, eq(todosTable.userId, usersTable.id))
    .limit(data.length);

  const formattedTodos = todos.map((todo) => ({
    id: todo.todos.id,
    text: todo.todos.text,
    isCompleted: todo.todos.isCompleted,
    author: todo.users?.name as string,
    isUserTweet: todo.todos.userId === session.id,
  }));

  return (
    <div className="flex">
      <div className="flex flex-1 justify-center bg-slate-50">
        <div className="flex w-full max-w-7xl flex-col items-center justify-center px-10 pb-20 pt-20">
          {/* <div className="flex flex-col items-center justify-center">
            <WriteTodo />
          </div>
          <div className="flex w-full flex-col gap-3 pt-10">
            {tasks.map((task, index) => (
              <Todos key={index} task={task} />
            ))}
          </div> */}

          <Todos initialData={formattedTodos} />
        </div>
      </div>
    </div>
  );
}
