import { db } from "@/database/db";
import { twitterTable } from "@/database/schemas/twitter";
import { eq } from "drizzle-orm";
import { isRedirectError } from "next/dist/client/components/redirect";

export async function PATCH(request: Request) {
  try {
    const response = await request.json();
    if (!response.id) {
      throw new Error("ID is required");
    } else if (!response.tweet) {
      throw new Error("Tweet is required");
    }

    await db
      .update(twitterTable)
      .set(response.tweet)
      .where(eq(twitterTable.id, response.id));

    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return Response.json({ message: error.message }, { status: 400 });
    }
    if (isRedirectError(error)) {
      throw error;
    }
  }
}
