import getSession from "@/server-actions/auth/getSession";
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
    <div className="flex">
      <div className="flex flex-1 justify-center bg-slate-50">
        <div className="flex w-full max-w-7xl flex-col items-center justify-center px-10 pb-20 pt-20">
          <Todos initialData={todos} />
        </div>
      </div>
    </div>
  );
}
