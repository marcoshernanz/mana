"use client";

import { useState } from "react";
import Tweet, { TweetType } from "./Tweet";
import WriteTweet from "./WriteTweet";

/*
Things to store in local storage:
- Current expanded tweet
- Tweets
*/

export default function TwitterPage() {
  // Null means no tweet is selected
  const [expandedTweetId, setExpandedTweetId] = useState<number | null>(null);
  const [tweets, setTweets] = useState<TweetType[]>([]);

  // addTweet: tweets + newTweet
  function addTweet(newTweet: TweetType) {
    setTweets([...tweets, newTweet]);
  }

  // function addTweetReply(
  //   newTweet: TweetType,
  //   id: number,
  //   parentTweetId: number,
  // ) {
  //   // addTweetReply: tweets.map and if parentTweetId = tweet.id -> add tweet to replies
  // }

  // To add tweets two functions - addTweet and addTweetReply
  const addTweets = (newTweet: TweetType) => {
    console.log(newTweet);
    addTweet(newTweet);
    // addTweetReply();
  };

  const deleteTweet = (TweetIndex: number) => {
    setTweets((tweet) => {
      const newTweet = tweet.filter((_, index) => index !== TweetIndex);
      return newTweet;
    });
  };

  const toggleExpand = (tweetId: number) => {
    setExpandedTweetId(expandedTweetId === tweetId ? null : tweetId);
  };

  return (
    <div className="flex items-center justify-center bg-orange-50 dark:bg-slate-950">
      <div className="flex max-w-7xl flex-col gap-5 px-10 pb-20 pt-36">
        <WriteTweet AddTweets={addTweets} />
        {tweets.map((tweet, index) => (
          <Tweet
            key={index}
            index={index}
            tweet={tweet}
            isExpanded={expandedTweetId === tweet.id}
            toggleExpand={toggleExpand}
            addTweets={addTweets}
            deleteTweet={deleteTweet}
          ></Tweet>
        ))}
      </div>
    </div>
  );
}
