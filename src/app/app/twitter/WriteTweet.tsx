"use client";

import { useState } from "react";
import { TweetType } from "./Tweet";
import insertTweet from "@/server-actions/twitter/insertTweet";

export type CurrentTweetType = Omit<
  TweetType,
  "id" | "parentTweetId" | "isLiked"
> & {
  id?: string;
  parentTweetId?: string | null;
  isLiked?: boolean;
  isReplying?: boolean;
};

interface WriteTweetProps {
  parentTweetId?: string | undefined | null;
  onSubmit: () => void;
  fetchTweets?: () => void;
}

export default function WriteTweet({
  parentTweetId,
  onSubmit,
  fetchTweets,
}: WriteTweetProps) {
  const [text, setText] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [hasLoadedData, setHasLoadedData] = useState(false);
  const uniqueKey = `current-tweets`;

  const handleAddWriteTweet = async () => {
    if (!author || !text) return;

    const newTweet: CurrentTweetType = {
      author,
      text,
      parentTweetId: parentTweetId || undefined,
    };

    setText("");
    setAuthor("");

    await insertTweet(newTweet);
    if (fetchTweets) {
      await fetchTweets?.();
    }
    onSubmit();
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
