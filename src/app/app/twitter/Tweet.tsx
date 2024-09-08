"use client";

import { ChevronDownIcon, ChevronUpIcon, Heart } from "lucide-react";
import { useState } from "react";
import WriteTweet from "./WriteTweet";
import TweetReply from "./TweetReply";
import { Button } from "@/components/ui/Button";

export type TweetType = {
  id: string;
  parentTweetId: string | null;
  author: string;
  text: string;
  isLiked: boolean;
};

interface TweetProps {
  tweet: TweetType;
  isExpanded: boolean;
  initialIsLiked: boolean;
  editTweetIsLiked: (id: string, isLiked: boolean) => void;
  toggleExpand: (tweetId: string) => void;
  deleteTweet: (TweetIndex: string) => void;
  tweetReplies: TweetType[];
  fetchTweets: () => void;
  expandedTweetId: string | null;
}

export default function Tweet({
  isExpanded,
  toggleExpand,
  editTweetIsLiked,
  initialIsLiked,
  tweet,
  deleteTweet,
  tweetReplies,
  fetchTweets,
  expandedTweetId,
}: TweetProps) {
  const [isLiked, setIsLiked] = useState<boolean>(initialIsLiked);

  const [isReplying, setIsReplying] = useState(false);

  const handleReplyClick = () => {
    setIsReplying((prev) => !prev);
  };

  const handleReplySubmit = async () => {
    setIsReplying(false);
    if (fetchTweets) {
      await fetchTweets();
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-1 rounded-md border border-slate-300 bg-slate-200/50 px-4 py-3 dark:border-slate-700 dark:bg-slate-900">
        <div className="flex justify-end">
          <button
            onClick={() => {
              setIsLiked(!isLiked);
              editTweetIsLiked(tweet.id, !isLiked);
            }}
          >
            {isLiked ? (
              <Heart size="20px" color="#ff0000" strokeWidth="3px" />
            ) : (
              <Heart size="20px" color="#0f172a" />
            )}
          </button>
        </div>
        <span className="max-w-6xl break-words pb-2 pl-6 pr-6 text-lg text-slate-800 dark:text-slate-100">
          {tweet.text}
        </span>
        <span className="max-w-6xl break-words pb-3 pl-6 pr-6 text-sm text-slate-600 dark:text-slate-300">
          {tweet.author}
        </span>
        <Button
          variant="ghost"
          onClick={() => toggleExpand(tweet.id)}
          className="justify-start pl-5 pt-2"
        >
          {isExpanded ? (
            <>
              <ChevronUpIcon />
              <div className="py-3"></div>
            </>
          ) : (
            <ChevronDownIcon />
          )}
        </Button>
        <div className="flex flex-col">
          {isExpanded && (
            <div className="flex flex-col gap-1.5 pb-2 pl-6">
              {tweetReplies.map((reply) => (
                <TweetReply
                  key={reply.id}
                  tweetReply={reply.text}
                  author={reply.author}
                  editTweetIsLiked={editTweetIsLiked}
                  id={reply.id}
                  initialIsLiked={reply.isLiked}
                ></TweetReply>
              ))}
            </div>
          )}
          <div className="flex gap-1 pt-2">
            {isReplying ? (
              <div className="w-full items-stretch">
                <WriteTweet
                  parentTweetId={tweet.id}
                  onSubmit={handleReplySubmit}
                />
              </div>
            ) : (
              <div className="flex w-full justify-around gap-96 p-2 text-lg text-slate-900 dark:text-slate-50">
                <Button
                  onClick={handleReplyClick}
                  className="hover:text-slate-950 dark:hover:text-slate-100"
                >
                  Reply
                </Button>
                <Button
                  onClick={() => deleteTweet(tweet.id)}
                  className="underline hover:text-slate-950 hover:no-underline dark:hover:text-slate-100"
                >
                  Delete
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
