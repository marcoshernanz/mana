// "use client";

import { useEffect, useState } from "react";
import { TweetType } from "./Tweet";
import insertTweet from "@/server-actions/twitter/insertTweet";
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
  fetchTweets?: () => void;
  fetchTweetReplies?: () => void;
}

export default function WriteTweet({
  parentTweetId,
  onSubmit,
  fetchTweets,
  fetchTweetReplies,
}: WriteTweetProps) {
  const [text, setText] = useState<string>("");

  const handleAddWriteTweet = async () => {
    if (!text) return;

    const newTweet: CurrentTweetType = {
      text,
      parentTweetId: parentTweetId as string | null,
    };

    setText("");

    await insertTweet(newTweet);
    if (fetchTweets) {
      await fetchTweets?.();
      await fetchTweetReplies?.();
    }
    onSubmit();
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
        <Button onClick={handleAddWriteTweet}>Submit</Button>
      </div>
    </div>
  );
}
