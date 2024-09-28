import getSession from "@/lib/auth/getSession";
import { db } from "@/database/db";
import { todosTable } from "@/database/schemas/todos";
import { eq } from "drizzle-orm";
import Todos from "./Todos";

export default async function TodoPage() {
  const session = await getSession();

  const userId = session?.id;
  if (!userId) {
    return;
  }

  const todos = await db
    .select()
    .from(todosTable)
    .where(eq(todosTable.userId, userId));

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-full max-w-4xl">
        <Todos initialData={todos} />
      </div>
    </div>
  );
}
