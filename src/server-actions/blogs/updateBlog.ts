"use server";

import { db } from "@/database/db";
import { blogsTable, BlogsTableType } from "@/database/schemas/blogs";
import { eq } from "drizzle-orm";

type UpdateBlogType = Omit<
  BlogsTableType,
  "title" | "content" | "tags" | "id" | "isRead" | "pageNumber" 
> & {
  title?: string;
  content?: string;
  tags?: string[];
  id?: string;
  isRead?: boolean;
  pageNumber?: number;
};

export default async function updateTodo(
  id: string,
  blog: UpdateBlogType,
): Promise<void> {
  await db.update(blogsTable).set(blog).where(eq(blogsTable.id, id));
}
