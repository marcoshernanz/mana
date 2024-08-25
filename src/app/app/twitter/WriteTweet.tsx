"use client";

import { useState } from "react";
import { TweetType } from "./Tweet";

type WriteTweetType = {
  parentTweetId: number | null; // Null means it isn't a reply
  author: string;
  text: string;
};

interface WriteTweetProps {
  AddTweets: (newTweet: TweetType) => void;
}

/*
Things to store in local storage:
- ParentTweetId
- Author
- Text
*/

export default function WriteTweet({ AddTweets }: WriteTweetProps) {
  const [text, setText] = useState<string>("");
  const [author, setAuthor] = useState<string>("");

  const handleAddWriteTweet = () => {
    const newTweet: TweetType = {
      id: Math.random(),
      author,
      text,
    };
    AddTweets(newTweet);

    setText("");
    setAuthor("");
  };

  return (
    <div className="flex items-center justify-center gap-3 rounded-lg border border-orange-500 p-3 text-slate-900 dark:text-white">
      <div className="flex flex-col gap-3">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="write text"
          className="dark:text-slate-800"
        ></input>
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
          className="dark:text-slate-800"
        ></input>
      </div>
      <div>
        <button onClick={handleAddWriteTweet}>Submit</button>
      </div>
    </div>
  );
}
