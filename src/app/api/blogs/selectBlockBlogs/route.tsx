import { db } from "@/database/db";
import { blogsTable } from "@/database/schemas/blogs";
import { usersTable } from "@/database/schemas/users";
import getSession from "@/lib/auth/getSession";
import { asc, desc, eq } from "drizzle-orm";
import { isRedirectError } from "next/dist/client/components/redirect";

export async function POST(request: Request) {
  try {
    const response = await request.json();

    if (!response.numBlogsPerBlock) {
      throw new Error("numBlogsPerBlock needed");
    } else if (!response.blockNumber) {
      throw new Error("blockNumber needed");
    } else if (!response.orderBy) {
      throw new Error("orderBy needed");
    } else if (!response.descending) {
      throw new Error("descending needed");
    }

    const {
      numBlogsPerBlock,
      blockNumber,
      orderBy,
      descending,
      isRead = false,
    } = response;

    const session = await getSession();
    if (!session) throw new Error("User not logged in");

    const offset = numBlogsPerBlock * (blockNumber - 1);

    const orderValue = (
      {
        date: "createdAt",
        read: "isRead",
      } as const
    )[orderBy as "date" | "read"];

    const blogs = await db
      .select()
      .from(blogsTable)
      .where(
        isRead ? eq(blogsTable.isRead, true) : eq(blogsTable.isRead, false),
      )
      .leftJoin(usersTable, eq(blogsTable.userId, usersTable.id))
      .limit(numBlogsPerBlock)
      .offset(offset)
      .orderBy(
        descending ? desc(blogsTable[orderValue]) : asc(blogsTable[orderValue]),
      );

    const formattedBlogs = blogs.map((blog) => ({
      id: blog.blogs.id,
      title: blog.blogs.title,
      content: blog.blogs.content,
      tags: blog.blogs.tags,
      isRead: blog.blogs.isRead,
      pageNumber: blog.blogs.pageNumber,
      author: blog.users?.name as string,
    }));

    return new Response(JSON.stringify(formattedBlogs), { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return Response.json({ message: error.message }, { status: 400 });
    }
    if (isRedirectError(error)) {
      throw error;
    }
  }
}
