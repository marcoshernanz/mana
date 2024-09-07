"use server";

import { TaskType } from "@/app/app/todo/page";
import getAuthorName from "@/database/queries/todos/getAuthorName";
import selectAllTodos from "@/database/queries/todos/selectAllTodos";
import { TodosType } from "@/database/schemas/todos";

export default async function selectAllTodo(): Promise<TaskType[]> {
  // const tweets = await db.select().from(twitterTable);

  const todos = await selectAllTodos();

  const formattedTodos = await Promise.all(
    todos.map(async (todo: TodosType) => {
      const author = await getAuthorName(todo);

      return {
        id: todo.id,
        author: author as string,
        text: todo.text,
        isCompleted: todo.isCompleted,
        tags: todo.tags,
      };
    }),
  );

  return formattedTodos;
}
