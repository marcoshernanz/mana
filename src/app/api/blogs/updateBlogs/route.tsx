import { db } from "@/database/db";
import { blogsTable } from "@/database/schemas/blogs";
import getSession from "@/server-actions/auth/getSession";
import { eq } from "drizzle-orm";
import { isRedirectError } from "next/dist/client/components/redirect";

export async function PATCH(request: Request) {
  try {
    const response = await request.json();

    if (!response.id) {
      throw new Error("Id is required");
    } else if (!response.blog) {
      throw new Error("Blog is required");
    }

    const session = await getSession();
    const userId = session?.id;
    if (!userId) {
      throw new Error("User not found");
    }

    const { id, blog } = response;

    await db.update(blogsTable).set(blog).where(eq(blogsTable.id, id));

    return Response.json({ message: "Blogs updated" }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return Response.json({ message: error.message }, { status: 400 });
    }
    if (isRedirectError(error)) {
      throw error;
    }
  }
}
