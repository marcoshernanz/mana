"use client";

import { useState } from "react";
import { TweetType } from "./Tweet";
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

  // To add tweets two functions - addTweet and addTweetReply
  // addTweet: tweets + newTweet
  // addTweetReply: tweets.map and if parentTweetId = tweet.id -> add tweet to replies

  return <div>{/* {tweets.map...} */}</div>;
}
