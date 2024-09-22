import { db } from "@/database/db";
import { todosTable } from "@/database/schemas/todos";
import { twitterTable } from "@/database/schemas/twitter";
import getSession from "@/server-actions/auth/getSession";
import { isRedirectError } from "next/dist/client/components/redirect";

export async function POST(request: Request) {
  try {
    console.log("XXX");
    const response = await request.json();

    if (!response.text) {
      console.log("Missing text");
      throw new Error("Text is required");
    }

    const { text, parentTweetId } = response;

    const session = await getSession();
    const userId = session?.id;
    if (!userId) {
      throw new Error("User not found");
    }

    await db.insert(twitterTable).values({ userId, text, parentTweetId });

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
