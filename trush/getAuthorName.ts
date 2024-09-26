// import { db } from "@/database/db";
// import { BlogsTableType } from "@/database/schemas/blogs";
// import { TodosType } from "@/database/schemas/todos";
// import { TwitterType } from "@/database/schemas/twitter";
// import { usersTable } from "@/database/schemas/users";
// import { eq } from "drizzle-orm";

// interface getAuthorNameProps {
//   tweet?: TwitterType;
//   blog?: BlogsTableType;
// }

// export default async function getAuthorName({
//   tweet,
//   blog,
// }: getAuthorNameProps) {
//   if (tweet) {
//     const author = await db
//       .select({ name: usersTable.name })
//       .from(usersTable)
//       .where(eq(usersTable.id, tweet.userId))
//       .then((res) => (res.length === 1 ? res[0].name : null));
//     return author as string;
//   }

//   if (blog) {
//     const author = await db
//       .select({ name: usersTable.name })
//       .from(usersTable)
//       .where(eq(usersTable.id, blog.userId))
//       .then((res) => (res.length === 1 ? res[0].name : null));

//     return author as string;
//   }
// }
