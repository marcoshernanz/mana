// "use server";

// import { BlogPostType } from "@/app/app/blog/page";
// import { db } from "@/database/db";
// import insertBlog from "@/database/queries/blog/insertBlog";
// import { blogsTable } from "@/database/schemas/blogs";
// import { usersTable } from "@/database/schemas/users";
// import getSession from "@/server-actions/auth/getSession";
// import { eq } from "drizzle-orm";

// interface insertBlogsProps {
//   title: string;
//   content: string;
//   tags: string[];
//   pageNumber: number;
// }

// export default async function insertBlogs({
//   title,
//   content,
//   tags,
//   pageNumber,
// }: insertBlogsProps): Promise<BlogPostType> {
//   const session = await getSession();
//   const userId = session?.id;

//   if (!userId) {
//     throw new Error();
//   }

//   const insertedBlog = await insertBlog(
//     title,
//     content,
//     tags,
//     pageNumber,
//     userId,
//   );
//   if (!insertedBlog) {
//     throw new Error();
//   }

//   const blog = await db
//     .select()
//     .from(blogsTable)
//     .where(eq(blogsTable.id, insertedBlog.id))
//     .leftJoin(usersTable, eq(blogsTable.userId, usersTable.id))
//     .then((res) => (res.length === 1 ? res[0] : null));

//   if (!blog) {
//     throw new Error();
//   }

//   const formattedBlog = {
//     id: blog.blogs.id,
//     title: blog.blogs.title,
//     content: blog.blogs.content,
//     tags: blog.blogs.tags,
//     isRead: blog.blogs.isRead,
//     pageNumber: blog.blogs.pageNumber,
//     author: blog.users?.name as string,
//   };

//   return formattedBlog;
// }
