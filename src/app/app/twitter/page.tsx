import deleteTweet from "@/server-actions/twitter/deleteTweet";
import updateTweet from "@/database/queries/forum/updateTweet";
import { LoaderCircleIcon } from "lucide-react";
import { db } from "@/database/db";
import { twitterTable } from "@/database/schemas/twitter";
import { eq } from "drizzle-orm";
import Tweets from "./Tweets";
import getSession from "@/server-actions/auth/getSession";

type TweetResponse = {
  twitter: {
    id: string;
    parentTweetId: string | null;
    text: string;
    isLiked: boolean;
    userId: string;
    createdAt: Date;
  };
  users: {
    id: string;
    name: string;
    username: string;
    password: string;
    createdAt: Date;
  } | null;
};

const numTweetsPerBlock = 20;

export default async function TwitterPage() {
  const numBlocksRef = 0;

  const session = await getSession();
  if (!session) throw new Error("User not logged in");
  const userId = session?.id;
  if (!userId) {
    throw new Error("User not found");
  }

  const editTweetIsLiked = async (
    id: string,
    isLiked: boolean,
    fetchTweetReplies: () => Promise<void>,
  ) => {
    await updateTweet(id, { isLiked });
    // await fetchTweets();
    fetchTweetReplies();
  };

  const handleDeleteTweet = async (id: string) => {
    // setTweets((tweets) => tweets.filter((tweet) => tweet.id !== id));
    // await deleteTweet(id);
    await db.delete(twitterTable).where(eq(twitterTable.parentTweetId, id));
    await db.delete(twitterTable).where(eq(twitterTable.id, id));
    // await fetchTweets();
  };

  const fetchTweets = () => {};

  // const fetchTweets = useCallback(async () => {
  //   const newTweetBlock = await selectBlockTweets({
  //     numTweetsPerBlock,
  //     blockNumber: numBlocksRef.current,
  //     orderBy: "date",
  //     descending: true,
  //   });

  //   setTweets((currTweets) => {
  //     const filteredTweets = currTweets.filter(
  //       (currTweet) =>
  //         !newTweetBlock.some((newTweet) => newTweet.id === currTweet.id),
  //     );
  //     return [...filteredTweets, ...newTweetBlock];
  //   });
  // }, []);

  //get data
  const response = await fetch("/api/twitter/getTweets", {
    method: "POST",
    body: JSON.stringify({
      numTweets: numTweetsPerBlock,
      offset: numTweetsPerBlock * (numBlocksRef - 1),
      orderBy: "date",
      descending: true,
    }),
  });

  const tweets: TweetResponse[] = await response.json();

  const formattedTweets = tweets.map((tweet: TweetResponse) => ({
    id: tweet.twitter.id,
    parentTweetId: tweet.twitter.parentTweetId,
    text: tweet.twitter.text,
    isLiked: tweet.twitter.isLiked,
    author: tweet.users?.name as string,
    account: tweet.users?.username as string,
    isUserTweet: tweet.twitter.userId === session.id,
  }));

  return (
    <div className="flex">
      <div className="flex justify-center bg-slate-50 pl-96">
        <div className="flex max-w-7xl flex-col items-center justify-center px-10 pb-20 pt-36">
          <span className="text-4xl font-semibold text-slate-900 dark:text-slate-50">
            Forum
          </span>
          <div>
            <Tweets initialData={formattedTweets} />
          </div>
          {/* {isLoadingTweets && <LoaderCircleIcon className="animate-spin" />} */}
        </div>
      </div>
    </div>
  );
}
