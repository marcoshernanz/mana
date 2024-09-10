"use server";

import { db } from "@/database/db";
import { blogsTable, BlogsTableType } from "@/database/schemas/blogs";
import { eq } from "drizzle-orm";
import { use } from "react";

type UpdateBlogType = Omit<
  BlogsTableType,
  | "title"
  | "content"
  | "tags"
  | "id"
  | "isRead"
  | "pageNumber"
  | "createdAt"
  | "userId"
> & {
  title?: string;
  content?: string;
  tags?: string[];
  id?: string;
  isRead?: boolean;
  pageNumber?: number;
  createdAt?: Date;
  userId?: string;
};

export default async function updateBlog(
  id: string,
  blog: UpdateBlogType,
): Promise<void> {
  await db.update(blogsTable).set(blog).where(eq(blogsTable.id, id));
}
