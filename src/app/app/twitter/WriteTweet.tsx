"use client";

import { useEffect, useState } from "react";
import { TweetType } from "./Tweet";
import insertTwitter from "@/server-actions/twitter/insertTwitter";

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
  tweetId?: string;
  fetchTweets?: () => void;
  expandedTweetId?: string | null;
  isReplying?: boolean;
}

export default function WriteTweet({
  parentTweetId,
  onSubmit,
  tweetId,
  fetchTweets,
  expandedTweetId,
  isReplying,
}: WriteTweetProps) {
  const [text, setText] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [hasLoadedData, setHasLoadedData] = useState(false);
  const uniqueKey = `current-tweets`;

  useEffect(() => {
    const storedTweets: CurrentTweetType[] = JSON.parse(
      window.localStorage.getItem(uniqueKey) || "[]",
    );

    const currentDraft = storedTweets.find(
      (tweet) => tweet.parentTweetId === parentTweetId,
    );

    if (currentDraft) {
      setText(currentDraft.text || "");
      setAuthor(currentDraft.author || "");
    }

    setHasLoadedData(true);
  }, [parentTweetId, uniqueKey]);

  useEffect(() => {
    if (!hasLoadedData) return;

    const storedTweets: CurrentTweetType[] = JSON.parse(
      window.localStorage.getItem(uniqueKey) || "[]",
    );

    const existingDraftIndex = storedTweets.findIndex(
      (tweet) => tweet.parentTweetId === parentTweetId,
    );

    const currentTweetInfo: CurrentTweetType = {
      text,
      author,
      parentTweetId: parentTweetId || undefined,
      isReplying,
    };

    if (existingDraftIndex >= 0) {
      storedTweets[existingDraftIndex] = currentTweetInfo;
    } else {
      storedTweets.push(currentTweetInfo);
    }

    window.localStorage.setItem(uniqueKey, JSON.stringify(storedTweets));
  }, [text, author, parentTweetId, isReplying, hasLoadedData, uniqueKey]);

  const handleAddWriteTweet = async () => {
    if (!author || !text) return;

    const newTweet: CurrentTweetType = {
      author,
      text,
      parentTweetId: parentTweetId || undefined,
    };

    const storedTweets: CurrentTweetType[] = JSON.parse(
      localStorage.getItem(uniqueKey) || "[]",
    );

    storedTweets.push(newTweet);

    localStorage.setItem(uniqueKey, JSON.stringify(storedTweets));

    setText("");
    setAuthor("");

    localStorage.removeItem(uniqueKey);

    await insertTwitter(newTweet);
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
