"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Tweet, { TweetType } from "./Tweet";
import WriteTweet from "./WriteTweet";
import deleteTweet from "@/server-actions/twitter/deleteTweet";
import updateTweet from "@/database/queries/forum/updateTweet";
import SideBar from "../SideBar";
import selectBlockTweets from "@/server-actions/twitter/selectBlockTweets";
import { LoaderCircleIcon } from "lucide-react";

const numTweetsPerBlock = 20;

export default function TwitterPage() {
  const [tweets, setTweets] = useState<TweetType[]>([]);
  const [isLoadingTweets, setIsLoadingTweets] = useState(true);
  const [isFirstTimeLoadingTweets, setIsFirstTimeLoadingTweets] =
    useState(true);

  const numBlocksRef = useRef(0);

  const parentTweet = tweets.filter((tweet) => tweet.parentTweetId === null);

  const tweetsWithReplies = parentTweet.map((parentTweet) => {
    const replies = tweets.filter(
      (tweet) => tweet.parentTweetId === parentTweet.id,
    );
    return replies;
  });

  const editTweetIsLiked = async (
    id: string,
    isLiked: boolean,
    fetchTweetReplies: () => Promise<void>,
  ) => {
    await updateTweet(id, { isLiked });
    await fetchTweets();
    fetchTweetReplies();
  };

  const handleDeleteTweet = async (id: string) => {
    setTweets((tweets) => tweets.filter((tweet) => tweet.id !== id));
    await deleteTweet(id);
    // await fetchTweets();
  };

  const fetchTweets = useCallback(async () => {
    const newTweetBlock = await selectBlockTweets({
      numTweetsPerBlock,
      blockNumber: numBlocksRef.current,
      orderBy: "date",
      descending: true,
    });

    setTweets((currTweets) => {
      const filteredTweets = currTweets.filter(
        (currTweet) =>
          !newTweetBlock.some((newTweet) => newTweet.id === currTweet.id),
      );
      return [...filteredTweets, ...newTweetBlock];
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const documentHeight = document.documentElement.scrollHeight;
      const currentScroll = window.scrollY + window.innerHeight;

      if (
        currentScroll >=
        (documentHeight * numBlocksRef.current) / (numBlocksRef.current + 1)
      ) {
        if (
          !isLoadingTweets &&
          !isFirstTimeLoadingTweets &&
          tweets.length === numTweetsPerBlock * numBlocksRef.current
        ) {
          setIsLoadingTweets(true);
          numBlocksRef.current += 1;
          fetchTweets();
          setIsLoadingTweets(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [fetchTweets, isLoadingTweets, tweets, isFirstTimeLoadingTweets]);

  useEffect(() => {
    if (!isFirstTimeLoadingTweets || numBlocksRef.current !== 0) return;

    setIsLoadingTweets(true);
    numBlocksRef.current += 1;
    fetchTweets();
    setIsLoadingTweets(false);
    setIsFirstTimeLoadingTweets(false);
  }, [fetchTweets, isFirstTimeLoadingTweets]);

  return (
    <div className="flex">
      <SideBar />
      <div className="flex justify-center bg-slate-50 pl-96">
        <div className="flex max-w-7xl flex-col items-center justify-center px-10 pb-20 pt-36">
          <span className="text-4xl font-semibold text-slate-900 dark:text-slate-50">
            Forum
          </span>
          <div className="pb-20 pt-16">
            <span className="flex items-center justify-center pb-1 text-sm underline dark:text-slate-100">
              Add Tweet
            </span>
            <div className="py-4">
              <WriteTweet onSubmit={() => null} fetchTweets={fetchTweets} />
            </div>
          </div>

          <div className="flex w-full flex-col gap-5">
            {
              // isLoadingData
              //   ? Array(parentTweet.length)
              //       .fill(0)
              //       .map((_, index) => (
              //         <TweetIsLoading
              //           key={index}
              //           isExpanded={false}
              //           isReplying={false}
              //           tweetRepliesLength={1}
              //         />
              //       ))
              //   :
              parentTweet.map((tweet, index) => (
                <Tweet
                  key={tweet.id}
                  tweet={tweet}
                  editTweetIsLiked={editTweetIsLiked}
                  deleteTweet={handleDeleteTweet}
                ></Tweet>
              ))
            }
          </div>
          {isLoadingTweets && <LoaderCircleIcon className="animate-spin" />}
        </div>
      </div>
    </div>
  );
}
