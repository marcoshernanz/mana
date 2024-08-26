"use client";

import { useEffect, useState } from "react";
import { TweetType } from "./Tweet";

interface WriteTweetProps {
  AddTweets: (newTweet: TweetType) => void;
}

export default function WriteTweet({ AddTweets }: WriteTweetProps) {
  const [text, setText] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [isLoadingData, setIsLoadingData] = useState(true);

  const handleAddWriteTweet = () => {
    const newTweet: TweetType = {
      id: Math.random(),
      author,
      text,
      replies: [],
    };
    AddTweets(newTweet);

    setText("");
    setAuthor("");
  };

  useEffect(() => {
    if (isLoadingData) return;
    window.localStorage.setItem("Author", JSON.stringify(author));
    window.localStorage.setItem("Text", JSON.stringify(text));
  }, [author, text, isLoadingData]);

  useEffect(() => {
    const Author: string = JSON.parse(
      window.localStorage.getItem("Author") ?? "",
    );
    setAuthor(Author);

    const Text: string = JSON.parse(window.localStorage.getItem("Text") ?? "");
    setText(Text);
    setIsLoadingData(false);
  }, []);

  return (
    <div className="flex max-w-xs items-center justify-center gap-3 rounded-lg border border-orange-500 p-3 text-slate-900 dark:text-white">
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
