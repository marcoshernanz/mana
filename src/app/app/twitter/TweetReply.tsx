"use client";

import { Heart } from "lucide-react";
import { useState } from "react";

interface TweetReplyProps {
  tweetReply: string;
  author: string;
  editTweetIsLiked: (id: string, isLiked: boolean) => void;
  initialIsLiked: boolean;
  id: string;
}

export default function TweetReply({
  tweetReply,
  author,
  editTweetIsLiked,
  initialIsLiked,
  id,
}: TweetReplyProps) {
  const [isLiked, setIsLiked] = useState<boolean>(initialIsLiked);


  return (
    <div className="flex flex-col gap-2 rounded-md border border-slate-300 bg-slate-300/30 px-3 py-2 shadow-sm hover:bg-slate-300/50 dark:border-slate-600 dark:bg-slate-700/70 dark:shadow-2xl dark:hover:bg-slate-600/60">
      <div className="flex justify-end">
        <button
          onClick={() => {
            setIsLiked(!isLiked);
            editTweetIsLiked(id, !isLiked);
          }}
        >
          {isLiked ? (
            <Heart size="17px" color="#ff0000" strokeWidth="3px" />
          ) : (
            <Heart size="17px" />
          )}
        </button>
      </div>
      <span className="text-slate-700 dark:text-slate-200 dark:hover:text-slate-100">
        {tweetReply}
      </span>
      <span className="text-xs text-zinc-500 dark:text-slate-200 dark:hover:text-slate-100">
        {author}
      </span>
    </div>
  );
}
