"use server";

import insertTodos from "@/database/queries/todos/insertTodos";
import getSession from "@/server-actions/auth/getSession";

interface insertTodoProps {
  text: string;
  tags: string[];
}

export default async function insertTodo({
  text,
  tags,
}: insertTodoProps): Promise<void> {
  const session = await getSession();
  const userId = session?.id;

  if (!userId) {
    return;
  }

  await insertTodos(text, tags, userId);
}
