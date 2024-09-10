import { db } from "@/database/db";
import { blogsTable, BlogsTableType } from "@/database/schemas/blogs";

export default async function insertBlog(
  title: string,
  content: string,
  tags: string[],
  pageNumber: number,
  userId: string,
): Promise<void> {
  await db
    .insert(blogsTable)
    .values({ title, content, tags, pageNumber, userId });
}
