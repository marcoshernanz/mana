"use client";

import { useEffect, useState } from "react";
import Tweet, { TweetType } from "./Tweet";
import WriteTweet from "./WriteTweet";
import selectAllTweets from "@/server-actions/twitter/selectAllTweets";
import updateTweet from "@/server-actions/twitter/updateTweet";
import deleteTweet from "@/server-actions/twitter/deleteTweet";
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
    const tweets = await selectAllTweets();
    setTweets(tweets);
  };

  const editTweetIsLiked = async (id: string, isLiked: boolean) => {
    setIsLoadingData(true);
    await updateTweet(id, { isLiked });
    await fetchTweets();
    setIsLoadingData(false);
  };

  const deleteTweetFromDatabase = async (id: string) => {
    setIsLoadingData(true);
    await deleteTweet(id);

    await fetchTweets();
    setIsLoadingData(false);
  };

  const toggleExpand = async (tweetId: string) => {
    setExpandedTweetId((expandedTweetId) =>
      expandedTweetId === tweetId ? null : tweetId,
    );
  };

  useEffect(() => {
    (async () => {
      setIsLoadingData(true);
      await fetchTweets();
      setIsLoadingData(false);
    })();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="flex max-w-7xl flex-col items-center justify-center px-10 pb-20 pt-36">
        <span className="text-4xl font-semibold dark:text-slate-50">Forum</span>
        <div className="pb-20 pt-16">
          <span className="flex items-center justify-center pb-1 text-sm underline dark:text-slate-100">
            Add Tweet
          </span>
          <div className="rounded-md bg-slate-900 px-10 py-6">
            <WriteTweet onSubmit={() => null} fetchTweets={fetchTweets} />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          {isLoadingData
            ? Array(parentTweet.length)
                .fill(0)
                .map((_, index) => (
                  <TweetIsLoading
                    key={index}
                    isExpanded={false}
                    isReplying={false}
                    tweetRepliesLength={1}
                  />
                ))
            : parentTweet.map((tweet, index) => (
                <Tweet
                  key={tweet.id}
                  tweet={tweet}
                  isExpanded={expandedTweetId === tweet.id}
                  toggleExpand={toggleExpand}
                  initialIsLiked={tweet.isLiked}
                  editTweetIsLiked={editTweetIsLiked}
                  tweetReplies={tweetsWithReplies[index]}
                  deleteTweet={deleteTweetFromDatabase}
                  fetchTweets={fetchTweets}
                  expandedTweetId={expandedTweetId}
                ></Tweet>
              ))}
        </div>
      </div>
    </div>
  );
}
