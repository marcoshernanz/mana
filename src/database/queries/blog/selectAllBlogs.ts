"use server";

import { db } from "@/database/db";
import { blogsTable, BlogsTableType } from "@/database/schemas/blogs";

export default async function selectAllBlogs(): Promise<BlogsTableType[]> {
  const blogs = await db.select().from(blogsTable);
  return blogs;
}