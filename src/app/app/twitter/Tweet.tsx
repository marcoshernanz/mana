"use client";

import { ChevronDownIcon, ChevronUpIcon, Heart } from "lucide-react";
import { use, useCallback, useEffect, useState } from "react";
import WriteTweet from "./WriteTweet";
import TweetReply from "./TweetReply";
import { Button } from "@/components/ui/Button";
import selectTweetReplies from "@/server-actions/twitter/selectTweetReplies";
import insertTweet from "@/server-actions/twitter/insertTweet";

export type TweetType = {
  id: string;
  parentTweetId: string | null;
  author: string;
  text: string;
  isLiked: boolean;
  isUserTweet: boolean;
};

interface TweetProps {
  tweet: TweetType;
  editTweetIsLiked: (id: string, isLiked: boolean) => void;
  deleteTweet: (TweetIndex: string) => void;
  // tweetReplies: TweetType[]; // Not needed, it should be fetched in this component
}

export default function Tweet({
  editTweetIsLiked,
  tweet,
  deleteTweet,
  // tweetReplies,
}: TweetProps) {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [expandedTweetId, setExpandedTweetId] = useState<string | null>(null);
  const [tweetReplies, setTweetReplies] = useState<TweetType[]>([]);
  const [isReplying, setIsReplying] = useState(false);
  const [isLoadingReplies, setIsLoadingReplies] = useState(false);
  const [isFirstTimeLoadingTweets, setIsFirstTimeLoadingTweets] =
    useState(true);

  const fetchTweetReplies = useCallback(async () => {
    const replies = await selectTweetReplies(tweet.id);

    setTweetReplies(replies);
  }, [tweet.id]);

  const toggleExpand = async (tweetId: string) => {
    const isExpanding = expandedTweetId === tweetId ? null : tweetId;
    setExpandedTweetId(isExpanding);

    await fetchTweetReplies();

    if (isExpanding && tweetReplies.length === 0) {
      await fetchTweetReplies();
    }
  };

  const handleReplyClick = () => {
    setIsReplying((prev) => !prev);
  };

  const handleReplySubmit = async () => {
    setIsReplying(false);
    await fetchTweetReplies();
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
          {expandedTweetId === tweet.id ? (
            <>
              <ChevronUpIcon />
              <div className="py-3"></div>
            </>
          ) : (
            <ChevronDownIcon />
          )}
        </Button>
        <div className="flex flex-col">
          {expandedTweetId === tweet.id && (
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
                  fetchTweetReplies={fetchTweetReplies}
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
                {tweet.isUserTweet && (
                  <Button
                    onClick={() => deleteTweet(tweet.id)}
                    className="underline hover:text-slate-950 hover:no-underline dark:hover:text-slate-100"
                  >
                    Delete
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
