"use client";

import { useEffect, useState } from "react";
import Tweet, { TweetType } from "./Tweet";
import WriteTweet from "./WriteTweet";
import { TweetReplyType } from "./TweetReply";

/*
Things to store in local storage:
- Current expanded tweet
- Tweets
*/

export default function TwitterPage() {
  const [expandedTweetId, setExpandedTweetId] = useState<number | null>(null);
  const [likedTweetId, setLikedTweetId] = useState<number | null>(null);

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
    setExpandedTweetId(expandedTweetId === tweetId ? null : tweetId);
  };

  const toggleLiked = (tweetId: number) => {
    setLikedTweetId(likedTweetId === tweetId ? null : tweetId);
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
      window.localStorage.getItem("Tweets") ?? "",
    );
    setTweets(TweetsData);

    const expandedTweetIdData: number = JSON.parse(
      window.localStorage.getItem("expanded-tweet-id") ?? "0",
    );
    setExpandedTweetId(expandedTweetIdData);

    setIsLoadingData(false);
  }, []);

  return (
    <div className="flex items-center justify-center bg-orange-50 dark:bg-slate-950">
      <div className="flex max-w-7xl flex-col gap-5 px-10 pb-20 pt-36">
        <WriteTweet AddTweets={addTweet} />
        {tweets.map((tweet, index) => (
          <Tweet
            key={index}
            index={index}
            tweet={tweet}
            isExpanded={expandedTweetId === tweet.id}
            toggleExpand={toggleExpand}
            deleteTweet={deleteTweet}
            addTweetReply={addTweetReply}
          ></Tweet>
        ))}
      </div>
    </div>
  );
}
