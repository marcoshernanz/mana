// import { db } from "@/database/db";
// import { BlogsTableType } from "@/database/schemas/blogs";
// import { usersTable } from "@/database/schemas/users";
// import { eq } from "drizzle-orm";

// export default async function getAuthorName(blog: BlogsTableType) {
//   const author = await db
//     .select({ name: usersTable.name })
//     .from(usersTable)
//     .where(eq(usersTable.id, blog.userId))
//     .then((res) => (res.length === 1 ? res[0].name : null));

//   return author as string;
// }
