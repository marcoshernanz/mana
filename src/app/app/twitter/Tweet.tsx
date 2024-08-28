"use client";

import { ChevronDownIcon, ChevronUpIcon, Heart, Reply } from "lucide-react";
import TweetReply, { TweetReplyType } from "./TweetReply";
import { useEffect, useState } from "react";
import WriteTweet from "./WriteTweet";

export type TweetType = {
  id: number;
  author: string;
  text: string;
  replies: TweetReplyType[];
  isLiked?: boolean;

  // isExpanded?: boolean;
  // isReplying?: boolean;
};

interface TweetProps {
  index: number;
  tweet: TweetType;
  isExpanded: boolean;
  isLiked: boolean;
  toggleExpand: (tweetId: number) => void;
  toggleLiked: (tweetId: number) => void;
  toggleReplyLiked: (tweetId: number, replyId: number) => void;
  deleteTweet: (TweetIndex: number) => void;
  addTweetReply: (newReply: TweetReplyType, parentTweetId: number) => void;
}

export default function Tweet({
  index,
  isExpanded,
  isLiked,
  toggleExpand,
  toggleLiked,
  toggleReplyLiked,
  tweet,
  deleteTweet,
  addTweetReply,
}: TweetProps) {
  const [isReplying, setIsReplying] = useState(() => {
    const savedState = localStorage.getItem(`tweet-${tweet.id}-isReplying`);
    return savedState ? JSON.parse(savedState) : false;
  });
  // const [isReplying, setIsReplying] = useState(false);

  const handleReplyClick = () => {
    setIsReplying(true);
  };

  const handleReplySubmit = () => {
    setIsReplying(false);
  };

  useEffect(() => {
    localStorage.setItem(
      `tweet-${tweet.id}-isReplying`,
      JSON.stringify(isReplying),
    );
  }, [isReplying, tweet.id]);
  useEffect(() => {
    const Reply = localStorage.getItem(`tweet-${tweet.id}-isReplying`);
    setIsReplying(Reply ? JSON.parse(Reply) : false);
  }, [isReplying, tweet.id]);

  return (
    <div>
      <div className="flex flex-col gap-1 rounded-md border border-orange-200 bg-orange-100/70 p-2 dark:border-slate-700 dark:bg-slate-900">
        <div className="flex justify-end">
          <button onClick={() => toggleLiked(tweet.id)}>
            {isLiked ? (
              <Heart size="20px" color="#ff0000" strokeWidth="3px" />
            ) : (
              <Heart size="20px" />
            )}
          </button>
        </div>
        <span className="max-w-6xl break-words pb-2 pl-6 pr-6 text-lg text-slate-800 dark:text-slate-100">
          {tweet.text}
        </span>
        <span className="max-w-6xl break-words pb-3 pl-6 pr-6 text-sm text-slate-600 dark:text-slate-300">
          {tweet.author}
        </span>
        <button onClick={() => toggleExpand(tweet.id)} className="pl-5 pt-2">
          {isExpanded ? (
            <>
              <ChevronUpIcon />
              <div className="py-3"></div>
            </>
          ) : (
            <ChevronDownIcon />
          )}
        </button>
        <div className="flex flex-col">
          {isExpanded && (
            <div className="flex flex-col gap-1.5 pb-2 pl-6">
              {tweet.replies.map((reply) => (
                <TweetReply
                  key={reply.id}
                  TweetReply={reply.text}
                  author={reply.author}
                  isLiked={reply.Liked}
                  toggleLiked={() => toggleReplyLiked(tweet.id, reply.id)}
                ></TweetReply>
              ))}
            </div>
          )}
          <div className="flex gap-1 pt-2">
            {isReplying ? (
              <div className="w-full items-stretch">
                <WriteTweet
                  addTweetReply={addTweetReply}
                  parentTweetId={tweet.id}
                  onSubmit={handleReplySubmit}
                  tweetId={tweet.id}
                />
              </div>
            ) : (
              <div className="flex w-full justify-around gap-96 p-2 text-lg text-slate-900 dark:text-slate-50">
                <button
                  onClick={handleReplyClick}
                  className="underline hover:text-slate-950 hover:no-underline dark:hover:text-slate-100"
                >
                  Reply
                </button>
                <button
                  onClick={() => deleteTweet(index)}
                  className="underline hover:text-slate-950 hover:no-underline dark:hover:text-slate-100"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}