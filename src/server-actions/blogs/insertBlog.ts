"use server";

import { db } from "@/database/db";
import { blogsTable, BlogsTableType } from "@/database/schemas/blogs";

type InsertBlogType = Omit<BlogsTableType, "id" | "isRead" | "createdAt"> & {
  id?: string;
  isRead?: boolean;
  createdAt?: Date;
};

export default async function insertTodo(blog: InsertBlogType): Promise<void> {
  await db.insert(blogsTable).values(blog);
}
