import getSession from "@/lib/auth/getSession";
import { db } from "@/database/db";
import { todosTable } from "@/database/schemas/todos";
import { eq } from "drizzle-orm";
import Todos from "./Todos";
import { TodoProvider } from "@/contexts/TodoContext";
import { usersTable } from "@/database/schemas/users";

export type TodoType = {
  todos: {
    id: string;
    text: string;
    isCompleted: boolean;
    isStared: boolean;
    createdAt: Date;
    userId: string;
    parentTodoId: string | null;
  };
  users: {
    id: string;
    name: string;
    username: string;
    password: string;
    createdAt: Date;
  } | null;
};

export default async function TodoPage() {
  const session = await getSession();

  const userId = session?.id;
  if (!userId) {
    return;
  }

  // const todos = await db
  //   .select()
  //   .from(todosTable)
  //   .where(eq(todosTable.userId, userId));

  const todos = await db
    .select()
    .from(todosTable)
    .where(eq(todosTable.userId, userId))
    .leftJoin(usersTable, eq(todosTable.userId, usersTable.id));

  const formattedTodos = todos.map((todo: TodoType) => ({
    id: todo.todos.id,
    parentTodoId: todo.todos.parentTodoId,
    text: todo.todos.text,
    isStared: todo.todos.isStared,
    account: todo.users?.username as string,
    isCompleted: todo.todos.isCompleted,
    createdAt: todo.todos.createdAt,
    userId: todo.todos.userId,
  }));

  return (
    <TodoProvider initialTodos={formattedTodos}>
      <div className="flex h-screen items-center justify-center">
        <div className="w-full max-w-4xl">
          <Todos />
        </div>
      </div>
    </TodoProvider>
  );
}
