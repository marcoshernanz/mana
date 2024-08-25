"use client";

import { ChevronDownIcon } from "lucide-react";
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
  addTweets?: (newTweet: TweetType) => void;
  deleteTweet: (TweetIndex: number) => void;
}

export default function Tweet({
  index,
  isExpanded,
  tweet,
  addTweets,
  deleteTweet,
}: TweetProps) {
  // const replyTweet = () => {
  //   <TweetReply></TweetReply>;
  // };
  const [isReplying, setIsReplying] = useState(false);
  const [author, setAuthor] = useState("");
  const [replyText, setReplyText] = useState("");
  const [replies, setReplies] = useState<TweetType[]>([]);

  const handleReplyClick = () => {
    setIsReplying(true);
  };

  const handleTextInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReplyText(e.target.value);
  };
  const handleAuthorInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value);
  };

  // const AddTweetReply = (newTweet: TweetType) => {};

  const handleAddWriteTweet = () => {
    const newTweetReply: TweetType = {
      id: Math.random(),
      author,
      text: replyText,
    };
    setReplies([...replies, newTweetReply]);

    setReplyText("");
    setIsReplying(false);
  };

  return (
    <div>
      <div className="flex flex-col gap-1 bg-orange-100 dark:bg-slate-900">
        <span>{tweet.text}</span>
        <span>{tweet.author}</span>
        {/* <button
          //handle is expanded with expandedTweetId
          onClick={() => {
            isExpanded = !isExpanded;
          }}
        >
          <ChevronDownIcon />
        </button> */}
        <div className="flex">
          {/* <button onClick={replyTweet}>Reply</button> */}
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
            <>
              <button onClick={handleReplyClick} className="mr-3">
                Reply
              </button>
              <button onClick={() => deleteTweet(index)}>Delete</button>
            </>
          )}
          <div>
            {replies.map((reply, index) => (
              <Tweet
                key={index}
                index={index}
                tweet={reply}
                isExpanded={false}
                addTweets={addTweets}
                deleteTweet={deleteTweet}
              ></Tweet>
            ))}
          </div>
        </div>
      </div>
      {isExpanded && (
        // Tweet replies with map
        // Create new component <TweetReply />
        <div></div>

        // WriteTweet (with parentTweetId = tweet.id)
      )}
    </div>
  );
}
