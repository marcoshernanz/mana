"use client";

import { useEffect, useState } from "react";
import { TweetType } from "./Tweet";
import insertTwitter from "@/server-actions/twitter/insertTwitter";

interface WriteTweetProps {
  parentTweetId?: string | undefined | null;
  // onSubmit: () => void | null;
  onSubmit: () => void;
  tweetId?: string;
  fetchTweets?: () => void;
}

export default function WriteTweet({
  parentTweetId,
  onSubmit,
  tweetId,
  fetchTweets,
}: WriteTweetProps) {
  const [text, setText] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [isLoadingData, setIsLoadingData] = useState(true);

  const handleAddWriteTweet = async () => {
    if (!author || !text) return;

    const newTweet = {
      author,
      text,
      parentTweetId,
    };

    setText("");
    setAuthor("");
    setIsLoadingData(true);
    await insertTwitter(newTweet);
    if (fetchTweets) {
      await fetchTweets?.();
    }
    onSubmit();
    setIsLoadingData(false);
  };

  return (
    <div className="flex items-center justify-center gap-3 rounded-lg bg-slate-800 p-3 text-slate-900 dark:text-white">
      <div className="flex w-full flex-col items-stretch gap-3">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="write text"
          className="dark:text-slate-800"
        ></input>
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
          className="dark:text-slate-800"
        ></input>
      </div>
      <div>
        <button onClick={handleAddWriteTweet}>Submit</button>
      </div>
    </div>
  );
}
