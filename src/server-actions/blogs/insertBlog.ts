"use server";

import { db } from "@/database/db";
import { blogsTable, BlogsTableType } from "@/database/schemas/blogs";

type InsertBlogType = Omit<BlogsTableType, "id" | "isRead"> & {
  id?: string;
  isRead?: boolean;
};

export default async function insertTodo(blog: InsertBlogType): Promise<void> {
  await db.insert(blogsTable).values(blog);
}
