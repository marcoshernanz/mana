"use client";

import { ChevronDownIcon, ChevronUpIcon, Heart } from "lucide-react";
import WriteTweet from "./WriteTweet";
import TweetReply, { TweetReplyType } from "./TweetReply";
import { useEffect, useState } from "react";

export type TweetType = {
  id: number;
  author: string;
  text: string;
  replies: TweetReplyType[];
};

interface TweetProps {
  index: number;
  tweet: TweetType;
  isExpanded: boolean;
  toggleExpand: (tweetId: number) => void;
  deleteTweet: (TweetIndex: number) => void;
  addTweetReply: (newReply: TweetReplyType, parentTweetId: number) => void;
}

export default function Tweet({
  index,
  isExpanded,
  toggleExpand,
  tweet,
  deleteTweet,
  addTweetReply,
}: TweetProps) {
  const [isReplying, setIsReplying] = useState(false);
  const [author, setAuthor] = useState("");
  const [replyText, setReplyText] = useState("");
  const [isLiked, setIsLiked] = useState(false);
  const [isLoadingData, setIsLoadingData] = useState(true);

  const handleReplyClick = () => {
    setIsReplying(true);
  };

  const handleTextInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReplyText(e.target.value);
  };
  const handleAuthorInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value);
  };

  const handleAddReplyTweet = () => {
    const newTweetReply: TweetReplyType = {
      id: Math.random(),
      author,
      text: replyText,
      Liked: isLiked,
    };
    addTweetReply(newTweetReply, tweet.id);

    setReplyText("");
    setAuthor("");
    setIsReplying(false);
  };

  const handleLikeToggle = (id: number) => {
    if (tweet.id === id) {
      setIsLiked(!isLiked);
    }
  };

  useEffect(() => {
    if (isLoadingData) return;
    window.localStorage.setItem("IsReplying", JSON.stringify(isReplying));
    window.localStorage.setItem("ReplyAuthor", JSON.stringify(author));
    window.localStorage.setItem("ReplyText", JSON.stringify(replyText));
    window.localStorage.setItem("IsLiked", JSON.stringify(isLiked));
  }, [isReplying, author, replyText, isLiked, isLoadingData]);

  useEffect(() => {
    const IsReplying: boolean = JSON.parse(
      window.localStorage.getItem("IsReplying") ?? "false",
    );
    setIsReplying(IsReplying);

    const ReplyAuthor: string = JSON.parse(
      window.localStorage.getItem("ReplyAuthor") ?? "",
    );
    setAuthor(ReplyAuthor);

    const ReplyText: string = JSON.parse(
      window.localStorage.getItem("ReplyText") ?? "",
    );
    setReplyText(ReplyText);

    const IsLiked: boolean = JSON.parse(
      window.localStorage.getItem("IsLiked") ?? "false",
    );
    setIsLiked(IsLiked);

    setIsLoadingData(false);
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-1 bg-orange-100 dark:bg-slate-900">
        <div className="flex justify-end">
          <button onClick={() => handleLikeToggle(tweet.id)}>
            {isLiked ? (
              <Heart size="20px" color="#ff0000" strokeWidth="3px" />
            ) : (
              <Heart size="20px" />
            )}
          </button>
        </div>
        <span>{tweet.text}</span>
        <span>{tweet.author}</span>
        <button onClick={() => toggleExpand(tweet.id)}>
          {isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </button>
        <div className="flex flex-col">
          {isExpanded && (
            <div className="flex flex-col gap-1">
              {tweet.replies.map((reply, index) => (
                <TweetReply
                  key={index}
                  TweetReply={reply.text}
                  author={reply.author}
                ></TweetReply>
              ))}
            </div>
          )}
          <div className="flex pt-2">
            {isReplying ? (
              <>
                <input
                  type="text"
                  value={replyText}
                  onChange={handleTextInputChange}
                  autoFocus
                />
                <input
                  type="text"
                  value={author}
                  onChange={handleAuthorInputChange}
                  autoFocus
                />
                <button
                  className="mr-3 bg-orange-200 dark:bg-slate-50"
                  onClick={handleAddReplyTweet}
                >
                  Add
                </button>
              </>
            ) : (
              <div>
                <button onClick={handleReplyClick} className="mr-3">
                  Reply
                </button>
                <button onClick={() => deleteTweet(index)}>Delete</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
