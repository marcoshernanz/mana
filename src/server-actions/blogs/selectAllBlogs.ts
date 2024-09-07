"use server";

import { BlogPostType } from "@/app/app/blog/page";
import getAuthorName from "@/database/queries/blog/getAuthorName";
import selectBlogs from "@/database/queries/blog/selectBlogs";
import { BlogsTableType } from "@/database/schemas/blogs";

export default async function selectAllBlogs(): Promise<BlogPostType[]> {
  // const tweets = await db.select().from(twitterTable);

  const blogs = await selectBlogs();

  const formattedBlogs = await Promise.all(
    blogs.map(async (blog: BlogsTableType) => {
      const author = await getAuthorName(blog);
      console.log("author", author);

      return {
        id: blog.id,
        author: author as string,
        title: blog.title,
        content: blog.content,
        isRead: blog.isRead,
        tags: blog.tags,
        pageNumber: blog.pageNumber,
      };
    }),
  );

  return formattedBlogs;
}
