"use client";

import { use, useEffect, useState } from "react";
import Tweet, { TweetType } from "./Tweet";
import WriteTweet, { CurrentTweetType } from "./WriteTweet";
import selectAllTweets from "@/server-actions/twitter/selectAllTweets";
import updateTwitter from "@/server-actions/twitter/updateTwitter";
import deleteTwitt from "@/server-actions/twitter/deleteTwitt";
import TweetIsLoading from "./TweetIsLoading";

export default function TwitterPage() {
  const [expandedTweetId, setExpandedTweetId] = useState<string | null>(null);
  const [tweets, setTweets] = useState<TweetType[]>([]);
  const [isLoadingData, setIsLoadingData] = useState(true);

  const parentTweet = tweets.filter((tweet) => tweet.parentTweetId === null);

  const tweetsWithReplies = parentTweet.map((parentTweet) => {
    const replies = tweets.filter(
      (tweet) => tweet.parentTweetId === parentTweet.id,
    );
    return replies;
  });

  const fetchTweets = async () => {
    const twits = await selectAllTweets();
    setTweets(twits);
  };

  const editTweetIsLiked = async (id: string, isLiked: boolean) => {
    setIsLoadingData(true);
    await updateTwitter(id, { isLiked });
    await fetchTweets();
    setIsLoadingData(false);
  };

  const deleteTweet = async (id: string) => {
    setIsLoadingData(true);
    await deleteTwitt(id);

    const storedTweets: CurrentTweetType[] = JSON.parse(
      localStorage.getItem("current-tweets") || "[]",
    );
    const updatedStoredTweets = storedTweets.filter(
      (draft) => draft.parentTweetId !== id,
    );
    localStorage.setItem("current-tweets", JSON.stringify(updatedStoredTweets));

    await fetchTweets();
    setIsLoadingData(false);
  };

  const toggleExpand = async (tweetId: string) => {
    setExpandedTweetId((expandedTweetId) =>
      expandedTweetId === tweetId ? null : tweetId,
    );
  };

  useEffect(() => {
    if (isLoadingData) return;
    window.localStorage.setItem(
      "current-expandedTweetId",
      JSON.stringify(expandedTweetId),
    );
  }, [isLoadingData, expandedTweetId]);

  useEffect(() => {
    const expandedIdData: string | null = JSON.parse(
      window.localStorage.getItem("current-expandedTweetId") ?? "null",
    );
    setExpandedTweetId(expandedIdData);

    (async () => {
      setIsLoadingData(true);
      await fetchTweets();
      setIsLoadingData(false);
    })();
  }, []);

  return (
    <div className="flex justify-center bg-orange-50 dark:bg-slate-950">
      <div className="flex max-w-7xl flex-col items-center justify-center px-10 pb-20 pt-36">
        <span className="text-4xl font-semibold dark:text-slate-50">
          Twitter
        </span>
        <div className="pb-20 pt-16">
          <span className="flex items-center justify-center pb-1 text-sm underline dark:text-slate-100">
            Add Twitt
          </span>
          <div className="rounded-md bg-slate-900 px-10 py-6">
            <WriteTweet onSubmit={() => null} fetchTweets={fetchTweets} />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          {
            // isLoadingData
            //   ?
            Array(parentTweet.length)
              .fill(0)
              .map((_, index) => (
                <TweetIsLoading
                  key={index}
                  isExpanded={false}
                  isReplying={false}
                  tweetRepliesLength={1}
                />
              ))
            // :
            // parentTweet.map((tweet, index) => (
            //     <Tweet
            //       key={tweet.id}
            //       index={index}
            //       tweet={tweet}
            //       isExpanded={expandedTweetId === tweet.id}
            //       toggleExpand={toggleExpand}
            //       initialIsLiked={tweet.isLiked}
            //       editTweetIsLiked={editTweetIsLiked}
            //       tweetReplies={tweetsWithReplies[index]}
            //       deleteTweet={deleteTweet}
            //       fetchTweets={fetchTweets}
            //       expandedTweetId={expandedTweetId}
            //     ></Tweet>
            //   ))
          }
        </div>
      </div>
    </div>
  );
}
