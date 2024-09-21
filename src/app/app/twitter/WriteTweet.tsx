// "use client";

import { useEffect, useState } from "react";
import { TweetType } from "./Tweet";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";
// import { getSession } from "@/server-actions/auth/getSession";

export type CurrentTweetType = Omit<
  TweetType,
  "id" | "parentTweetId" | "isLiked" | "author" | "isUserTweet"
> & {
  id?: string;
  parentTweetId: string | null;
  isLiked?: boolean;
  isReplying?: boolean;
  author?: string;
  isUserTweet?: boolean;
};

interface WriteTweetProps {
  parentTweetId?: string | null;
  onSubmit: () => void;
  fetchTweetReplies?: () => void;
  handleAddTweet?: (text: string, parentTweetId: string) => void;
}

export default function WriteTweet({
  parentTweetId,
  onSubmit,
  fetchTweetReplies,
  handleAddTweet,
}: WriteTweetProps) {
  const [text, setText] = useState<string>("");

  const addTweet = async (text: string) => {
    if (!text) return;

    await fetch("/api/twitter/postTweet", {
      method: "POST",
      body: JSON.stringify({ text, parentTweetId }),
    });
    await handleAddTweet?.(text, parentTweetId as string);
  };

  return (
    <div className="dark: dark: flex items-center justify-center gap-3 rounded-lg p-3 text-slate-900 dark:bg-slate-800 dark:text-white">
      <div className="flex w-full flex-col items-stretch gap-3">
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="write text"
          className="text-md dark:text-slate-800"
        ></Input>
      </div>
      <div>
        <Button onClick={() => addTweet(text)}>Submit</Button>
      </div>
    </div>
  );
}
