"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Tweet, { TweetType } from "./Tweet";
import WriteTweet from "./WriteTweet";

// export type UpdateTodoType = Omit<
//   TodosType,
//   "text" | "tags" | "id" | "isCompleted" | "createdAt" | "userId"
// > & {
//   text?: string;
//   tags?: string[];
//   id?: string;
//   isCompleted?: boolean;
//   createdAt?: Date;
//   userId?: string;
// };

interface WriteTodoProps {
  initialData: TweetType[];
}

export default function Tweets({ initialData }: WriteTodoProps) {
  const [tweets, setTweets] = useState<TweetType[]>(initialData);
  const parentTweet = tweets.filter((tweet) => tweet.parentTweetId === null);

  const handleAddTweet = (newTweet: {
    text: string;
    parentTweetId: string;
  }) => {
    setTweets((prev) => [...prev, newTweet]);
  };

  const updateTweets = async (id: string, tweet: TweetType) => {
    // const response = await fetch("/api/todo/updateTodo", {
    //   method: "PATCH",
    //   body: JSON.stringify({ id, task }),
    // });
    // if (response.ok) {
    //   setTodos((prev) =>
    //     prev.filter((todo) => todo.id !== id || !task.isCompleted),
    //   );
    // }
  };

  return (
    <>
      <div className="pb-20 pt-16">
        <span className="flex items-center justify-center pb-1 text-sm underline dark:text-slate-100">
          Add Tweet
        </span>
        <div className="py-4">
          <WriteTweet
            onSubmit={() => null}
            handleAddTweet={() => handleAddTweet}
          />
        </div>
      </div>
      <div className="flex w-full flex-col gap-5">
        {parentTweet.map((tweet, index) => (
          <Tweet
            key={tweet.id}
            tweet={tweet}
            // editTweetIsLiked={editTweetIsLiked}
            // deleteTweet={handleDeleteTweet}
          ></Tweet>
        ))}
      </div>
    </>
  );
}
