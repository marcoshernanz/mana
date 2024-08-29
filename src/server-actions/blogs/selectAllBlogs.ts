"use server";

import { db } from "@/database/db";
import { blogsTable, BlogsTableType } from "@/database/schemas/blogs";

export default async function selectAllTodos(): Promise<BlogsTableType[]> {
  const blogs = await db.select().from(blogsTable);
  return blogs;
}
