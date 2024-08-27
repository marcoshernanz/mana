"use client";

import { useEffect, useState } from "react";
import Tweet, { TweetType } from "./Tweet";
import WriteTweet from "./WriteTweet";
import { TweetReplyType } from "./TweetReply";

export default function TwitterPage() {
  const [expandedTweetId, setExpandedTweetId] = useState<number | null>(null);
  const [tweets, setTweets] = useState<TweetType[]>([]);
  const [isLoadingData, setIsLoadingData] = useState(true);

  function addTweet(newTweet: TweetType) {
    setTweets([...tweets, newTweet]);
  }

  function addTweetReply(newReply: TweetReplyType, parentTweetId: number) {
    setTweets(
      tweets.map((tweet) =>
        tweet.id === parentTweetId
          ? { ...tweet, replies: [...(tweet.replies || []), newReply] }
          : tweet,
      ),
    );
  }

  const deleteTweet = (TweetIndex: number) => {
    setTweets((tweet) => {
      const newTweet = tweet.filter((_, index) => index !== TweetIndex);
      return newTweet;
    });
  };

  const toggleExpand = (tweetId: number) => {
    setExpandedTweetId((expandedTweetId) =>
      expandedTweetId === tweetId ? null : tweetId,
    );
  };

  const toggleLiked = (tweetId: number) => {
    setTweets((prevTweets) =>
      prevTweets.map((tweet) =>
        tweet.id === tweetId ? { ...tweet, isLiked: !tweet.isLiked } : tweet,
      ),
    );
  };

  const toggleReplyLiked = (tweetId: number, replyId: number) => {
    setTweets((prevTweets) =>
      prevTweets.map((tweet) =>
        tweet.id === tweetId
          ? {
              ...tweet,
              replies: tweet.replies.map((reply) =>
                reply.id === replyId
                  ? { ...reply, Liked: !reply.Liked }
                  : reply,
              ),
            }
          : tweet,
      ),
    );
  };

  useEffect(() => {
    if (isLoadingData) return;
    window.localStorage.setItem("Tweets", JSON.stringify(tweets));
    window.localStorage.setItem(
      "expanded-tweet-id",
      JSON.stringify(expandedTweetId),
    );
  }, [tweets, isLoadingData, expandedTweetId]);

  useEffect(() => {
    const TweetsData: TweetType[] = JSON.parse(
      window.localStorage.getItem("Tweets") ?? "[]",
    );
    setTweets(TweetsData);

    const expandedTweetIdData: number = JSON.parse(
      window.localStorage.getItem("expanded-tweet-id") ?? "0",
    );
    setExpandedTweetId(expandedTweetIdData);

    setIsLoadingData(false);
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
            <WriteTweet addTweet={addTweet} onSubmit={() => null} />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          {tweets.map((tweet, index) => (
            <Tweet
              key={index}
              index={index}
              tweet={tweet}
              isExpanded={expandedTweetId === tweet.id}
              isLiked={tweet.isLiked ?? false}
              toggleExpand={toggleExpand}
              toggleLiked={toggleLiked}
              toggleReplyLiked={toggleReplyLiked}
              deleteTweet={deleteTweet}
              addTweetReply={addTweetReply}
            ></Tweet>
          ))}
        </div>
      </div>
    </div>
  );
}
