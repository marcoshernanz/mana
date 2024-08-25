"use client";

import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import WriteTweet from "./WriteTweet";
import TweetReply from "./TweetReply";
import { useState } from "react";

export type TweetType = {
  id: number;
  author: string;
  text: string;
  // isLiked: boolean;
  // replies: {
  //   author: string;
  //   text: string;
  //   isLiked: boolean;
  // }[];
};

interface TweetProps {
  index: number;
  tweet: TweetType;
  isExpanded: boolean;
  toggleExpand: (tweetId: number) => void;
  addTweets?: (newTweet: TweetType) => void;
  deleteTweet: (TweetIndex: number) => void;
}

export default function Tweet({
  index,
  isExpanded,
  toggleExpand,
  tweet,
  addTweets,
  deleteTweet,
}: TweetProps) {
  const [isReplying, setIsReplying] = useState(false);
  const [author, setAuthor] = useState("");
  const [replyText, setReplyText] = useState("");
  const [replies, setReplies] = useState<TweetType[]>([]);
  // const [isExpanded, setIsExpanded] = useState(false);

  const handleReplyClick = () => {
    setIsReplying(true);
  };

  const handleTextInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReplyText(e.target.value);
  };
  const handleAuthorInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value);
  };

  const handleAddWriteTweet = () => {
    const newTweetReply: TweetType = {
      id: Math.random(),
      author,
      text: replyText,
    };
    setReplies([...replies, newTweetReply]);

    setReplyText("");
    setAuthor("");
    setIsReplying(false);
  };

  return (
    <div>
      <div className="flex flex-col gap-1 bg-orange-100 dark:bg-slate-900">
        <span>{tweet.text}</span>
        <span>{tweet.author}</span>
        <button onClick={() => toggleExpand(tweet.id)}>
          {isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </button>
        <div className="flex flex-col">
          {isExpanded && (
            <div className="flex flex-col gap-1">
              {replies.map((reply, index) => (
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
                  onClick={handleAddWriteTweet}
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
      <div>
        {
          // isExpanded
          //   ? // Tweet replies with map
          // Create new component <TweetReply />
          // : null
          // WriteTweet (with parentTweetId = tweet.id)
        }
      </div>
    </div>
  );
}
