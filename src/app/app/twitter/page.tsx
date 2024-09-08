"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Tweet, { TweetType } from "./Tweet";
import WriteTweet from "./WriteTweet";
import deleteTweet from "@/server-actions/twitter/deleteTweet";
import TweetIsLoading from "./TweetIsLoading";
import updateTweet from "@/database/queries/forum/updateTweet";
import SideBar from "../SideBar";
import selectBlockTweets from "@/server-actions/twitter/selectBlockTweets";
import { LoaderCircleIcon } from "lucide-react";
import insertTweet from "@/server-actions/twitter/insertTweet";

const numTweetsPerBlock = 20;

export default function TwitterPage() {
  const [expandedTweetId, setExpandedTweetId] = useState<string | null>(null);
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

  const editTweetIsLiked = async (id: string, isLiked: boolean) => {
    // setIsLoadingData(true);
    await updateTweet(id, { isLiked });
    // await fetchTweets();
    // setIsLoadingData(false);
  };

  const handleAddTweet = async (tweet: TweetType) => {
    setTweets((tweets) => [tweet, ...tweets]);
    await insertTweet(tweet);
  };

  const handleDeleteTweet = async (id: string) => {
    setTweets((tweets) => tweets.filter((tweet) => tweet.id !== id));
    await deleteTweet(id);
  };

  const toggleExpand = async (tweetId: string) => {
    setExpandedTweetId((expandedTweetId) =>
      expandedTweetId === tweetId ? null : tweetId,
    );
  };

  const fetchTweets = useCallback(async () => {
    const tweets = await selectBlockTweets({
      numTweetsPerBlock,
      blockNumber: numBlocksRef.current,
      orderBy: "date",
      descending: true,
    });

    setTweets((currTweets) => [...currTweets, ...tweets]);
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
      <div className="flex justify-center bg-slate-50 pl-72">
        <div className="flex max-w-7xl flex-col items-center justify-center px-10 pb-20 pt-36">
          <span className="text-4xl font-semibold text-slate-900 dark:text-slate-50">
            Forum
          </span>
          <div className="pb-20 pt-16">
            <span className="flex items-center justify-center pb-1 text-sm underline dark:text-slate-100">
              Add Tweet
            </span>
            <div className="py-4">
              <WriteTweet onSubmit={() => null} />
            </div>
          </div>

          <div className="flex flex-col gap-5">
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
                  isExpanded={expandedTweetId === tweet.id}
                  toggleExpand={toggleExpand}
                  initialIsLiked={tweet.isLiked}
                  editTweetIsLiked={editTweetIsLiked}
                  tweetReplies={tweetsWithReplies[index]}
                  deleteTweet={handleDeleteTweet}
                  expandedTweetId={expandedTweetId}
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
