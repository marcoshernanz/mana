// import { BlogPostType } from "@/app/app/blog/page";
// import { db } from "@/database/db";
// import { blogsTable, BlogsTableType } from "@/database/schemas/blogs";

// export default async function insertBlog(
//   title: string,
//   content: string,
//   tags: string[],
//   pageNumber: number,
//   userId: string,
// ) {
//   const blog = await db
//     .insert(blogsTable)
//     .values({ title, content, tags, pageNumber, userId })
//     .returning()
//     .then((res) => (res.length === 1 ? res[0] : null));

//   return blog;
// }
