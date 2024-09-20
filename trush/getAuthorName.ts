// import { db } from "@/database/db";
// import { TodosType } from "@/database/schemas/todos";
// import { usersTable } from "@/database/schemas/users";
// import { eq } from "drizzle-orm";

// export default async function getAuthorName(todo: TodosType) {
//   const author = await db
//     .select({ name: usersTable.name })
//     .from(usersTable)
//     .where(eq(usersTable.id, todo.userId))
//     .then((res) => (res.length === 1 ? res[0].name : null));

//   return author as string;
// }
