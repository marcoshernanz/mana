// // import { db } from "@/database/db";
// // import { blogsTable, BlogsTableType } from "@/database/schemas/blogs";

// // export default async function selectBlogs(): Promise<BlogsTableType[]> {
// //   const blogs = await db.select().from(blogsTable);
// //   return blogs;
// // }

// "use server";

// import { db } from "@/database/db";
// import { blogsTable } from "@/database/schemas/blogs";
// import { usersTable } from "@/database/schemas/users";
// import { asc, desc, eq, isNotNull, isNull } from "drizzle-orm";

// interface selectBlogsProps {
//   numBlogs: number;
//   offset: number;
//   orderBy: "date" | "likes";
//   descending: boolean;
//   isRead?: boolean;
// }

// export default async function selectBlogs({
//   numBlogs,
//   offset,
//   orderBy,
//   descending,
//   isRead = false,
// }: selectBlogsProps) {
//   const orderValue = (
//     {
//       date: "createdAt",
//       read: "isRead",
//     } as const
//   )[orderBy as "date" | "read"];

//   const blogs = await db
//     .select()
//     .from(blogsTable)
//     .where(isRead ? eq(blogsTable.isRead, true) : eq(blogsTable.isRead, false))
//     .leftJoin(usersTable, eq(blogsTable.userId, usersTable.id))
//     .limit(numBlogs)
//     .offset(offset)
//     .orderBy(
//       descending ? desc(blogsTable[orderValue]) : asc(blogsTable[orderValue]),
//     );

//   return blogs;
// }
