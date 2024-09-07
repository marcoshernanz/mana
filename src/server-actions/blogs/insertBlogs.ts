"use server";

import insertBlog from "@/database/queries/blog/insertBlog";
import getSession from "@/server-actions/auth/getSession";

interface insertBlogsProps {
  title: string;
  content: string;
  tags: string[];
  pageNumber: number;
}

export default async function insertBlogs({
  title,
  content,
  tags,
  pageNumber,
}: insertBlogsProps): Promise<void> {
  const session = await getSession();
  const userId = session?.id;

  if (!userId) {
    return;
  }

  await insertBlog(title, content, tags, pageNumber, userId);
}
