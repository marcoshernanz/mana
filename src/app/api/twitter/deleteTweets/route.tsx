import { db } from "@/database/db";
import { twitterTable } from "@/database/schemas/twitter";
import { eq } from "drizzle-orm";
import { isRedirectError } from "next/dist/client/components/redirect";

export async function DELETE(request: Request) {
  try {
    const response = await request.json();

    if (!response.id) {
      throw new Error("Num tweets per block is required");
    }
    await db.delete(twitterTable).where(eq(twitterTable.id, response.id));
    await db
      .delete(twitterTable)
      .where(eq(twitterTable.parentTweetId, response.id));

    return new Response("", { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return Response.json({ message: error.message }, { status: 400 });
    }
    if (isRedirectError(error)) {
      throw error;
    }
  }
}
