import { db } from "@/database/db";
import { blogsTable } from "@/database/schemas/blogs";
import { usersTable } from "@/database/schemas/users";
import getSession from "@/lib/auth/getSession";
import { eq } from "drizzle-orm";
import { isRedirectError } from "next/dist/client/components/redirect";

export async function POST(request: Request) {
  try {
    const response = await request.json();

    if (!response.title) {
      throw new Error("Title is required");
    } else if (!response.content) {
      throw new Error("Content is required");
    } else if (!response.tags) {
      throw new Error("Tags are required");
    } else if (!response.pageNumber) {
    }

    const { title, content, tags, pageNumber } = response;

    const session = await getSession();
    const userId = session?.id;

    if (!userId) {
      throw new Error();
    }

    const insertedBlog = await db
      .insert(blogsTable)
      .values({ title, content, tags, pageNumber, userId })
      .returning()
      .then((res) => (res.length === 1 ? res[0] : null));

    if (!insertedBlog) {
      throw new Error();
    }

    const blog = await db
      .select()
      .from(blogsTable)
      .where(eq(blogsTable.id, insertedBlog.id))
      .leftJoin(usersTable, eq(blogsTable.userId, usersTable.id))
      .then((res) => (res.length === 1 ? res[0] : null));

    if (!blog) {
      throw new Error();
    }

    const formattedBlog = {
      id: blog.blogs.id,
      title: blog.blogs.title,
      content: blog.blogs.content,
      tags: blog.blogs.tags,
      isRead: blog.blogs.isRead,
      pageNumber: blog.blogs.pageNumber,
      author: blog.users?.name as string,
    };

    return new Response(JSON.stringify(formattedBlog), { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return Response.json({ message: error.message }, { status: 400 });
    }
    if (isRedirectError(error)) {
      throw error;
    }
  }
}
