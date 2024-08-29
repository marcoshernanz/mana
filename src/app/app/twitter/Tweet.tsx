"use client";

import { ChevronDownIcon, ChevronUpIcon, Heart, Reply } from "lucide-react";
import { use, useEffect, useState } from "react";
import WriteTweet from "./WriteTweet";
import TweetReply from "./TweetReply";
import { is } from "drizzle-orm";

export type TweetType = {
  id: string;
  parentTweetId: string | null;
  author: string;
  text: string;
  isLiked: boolean;
};

interface TweetProps {
  index: number;
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
  index,
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
  const [isLoadingData, setIsLoadingData] = useState(true);

  // const [isReplying, setIsReplying] = useState(() => {
  //   const savedState = localStorage.getItem(`tweet-${tweet.id}-isReplying`);
  //   return savedState ? JSON.parse(savedState) : false;
  // });
  const [isReplying, setIsReplying] = useState(false);

  const handleReplyClick = () => {
    setIsReplying(true);
  };

  const handleReplySubmit = async () => {
    setIsReplying(false);
    if (fetchTweets) {
      await fetchTweets();
    }
  };

  useEffect(() => {
    if (isLoadingData) return;

    if (isReplying) {
      window.localStorage.setItem(
        `tweet-${tweet.id}-isReplying`,
        JSON.stringify(isReplying),
      );
    } else {
      window.localStorage.removeItem(`tweet-${tweet.id}-isReplying`);
    }
  }, [isReplying, tweet.id, isLoadingData]);

  useEffect(() => {
    const savedState = window.localStorage.getItem(
      `tweet-${tweet.id}-isReplying`,
    );
    setIsReplying(savedState ? JSON.parse(savedState) : false);

    setIsLoadingData(false);
  }, [tweet.id]);

  return (
    <div>
      <div className="flex flex-col gap-1 rounded-md border border-orange-200 bg-orange-100/70 p-2 dark:border-slate-700 dark:bg-slate-900">
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
              {tweetReplies.map((reply) => (
                <TweetReply
                  key={reply.id}
                  TweetReply={reply.text}
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
                  tweetId={tweet.id}
                  expandedTweetId={expandedTweetId}
                  isReplying={isReplying}
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
                  onClick={() => deleteTweet(tweet.id)}
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
