// "use client";

import { ChevronDownIcon, ChevronUpIcon, Heart } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import WriteTweet from "./WriteTweet";
import TweetReply from "./TweetReply";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export type TweetType = {
  id: string;
  parentTweetId: string | null;
  author: string;
  account: string;
  text: string;
  isUserTweet: boolean;
};

interface TweetProps {
  tweet: TweetType;
  editTweetIsLiked: (
    id: string,
    isLiked: boolean,
    fetchTweetReplies: () => Promise<void>,
  ) => void;
  deleteTweet: (TweetIndex: string) => void;
}

export default function Tweet({
  editTweetIsLiked,
  tweet,
  deleteTweet,
}: TweetProps) {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [numLikes, setNumLikes] = useState<number>(0);

  const [expandedTweetId, setExpandedTweetId] = useState<string | null>(null);
  const [tweetReplies, setTweetReplies] = useState<TweetType[]>([]);
  const [isReplying, setIsReplying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchIsLiked = useCallback(async () => {
    const response = await fetch("/api/twitter/getTweetIsLiked", {
      method: "POST",
      body: JSON.stringify({
        tweetId: tweet.id,
      }),
    });

    if (response.ok) {
      const initialIsLiked = await response.json();
      setIsLiked(initialIsLiked);
    }
  }, [tweet.id]);

  const fetchNumLikes = useCallback(async () => {
    const response = await fetch("/api/twitter/getTweetNumLikes", {
      method: "POST",
      body: JSON.stringify({
        tweetId: tweet.id,
      }),
    });

    if (response.ok) {
      const initialNumLikes = await response.json();
      setNumLikes(initialNumLikes);
    }
  }, [tweet.id]);

  const fetchTweetReplies = useCallback(async () => {
    const response = await fetch("/api/twitter/selectTweetReplies", {
      method: "POST",
      body: JSON.stringify({ id: tweet.id }),
    });

    if (response.ok) {
      const replies = await response.json();
      setTweetReplies(replies);
    }
  }, [tweet.id]);

  const toggleExpand = async (tweetId: string) => {
    const isExpanding = expandedTweetId === tweetId ? null : tweetId;
    setExpandedTweetId(isExpanding);

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

  const handleLike = async () => {
    setIsLiked((prev) => !prev);
    setNumLikes((prev) => (isLiked ? prev - 1 : prev + 1));
    // await likeTweet({ tweetId: tweet.id, like: !isLiked });
    await fetch("/api/twitter/likeTweet", {
      method: "PATCH",
      body: JSON.stringify({ tweetId: tweet.id, like: !isLiked }),
    });
  };

  useEffect(() => {
    (async () => {
      const isLikedPromise = fetchIsLiked();
      const numLikesPromise = fetchNumLikes();
      await Promise.all([isLikedPromise, numLikesPromise]);

      setIsLoading(false);
    })();
  }, [fetchIsLiked, fetchNumLikes]);

  return (
    <div>
      <div className="flex flex-col gap-1 rounded-md border border-slate-300 bg-slate-200/50 px-4 py-3 dark:border-slate-700 dark:bg-slate-900">
        <div className="flex justify-end">
          <button
            onClick={() => handleLike()}
            className="flex items-center gap-2"
          >
            {numLikes}
            {isLiked ? (
              <Heart className="text-lg text-red-600" fill="#dc2626" />
            ) : (
              <Heart className="text-lg text-slate-400" />
            )}
          </button>
        </div>
        <span className="max-w-6xl break-words pb-2 pl-6 pr-6 text-lg text-slate-800 dark:text-slate-100">
          {tweet.text}
        </span>
        <Link
          href={`/app/twitter/${tweet.account}`}
          className="max-w-6xl break-words pb-3 pl-6 pr-6 text-sm text-slate-600 dark:text-slate-300"
        >
          {tweet.author}
        </Link>
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
                  reply={reply}
                  editTweetIsLiked={editTweetIsLiked}
                  // fetchTweetReplies={fetchTweetReplies}
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
