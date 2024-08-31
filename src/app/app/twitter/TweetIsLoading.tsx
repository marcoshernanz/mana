import TweetReplyIsLoading from "./TweetRepliesIsLoading";
import WriteTweetIsLoading from "./WriteTweetIsLoading";

interface TweetIsLoadingProps {
  isExpanded: boolean;
  tweetRepliesLength: number;
  isReplying: boolean;
}

export default function TweetIsLoading({
  isExpanded,
  tweetRepliesLength,
  isReplying,
}: TweetIsLoadingProps) {
  return (
    <div>
      <div className="flex animate-pulse flex-col gap-1 rounded-md border border-orange-200 bg-orange-100/70 p-2 dark:border-slate-700 dark:bg-slate-900">
        <div className="flex justify-end">
          <button></button>
        </div>
        <span className="max-w-6xl break-words pb-2 pl-6 pr-6 text-lg text-slate-800 dark:text-slate-100"></span>
        <span className="max-w-6xl break-words pb-3 pl-6 pr-6 text-sm text-slate-600 dark:text-slate-300"></span>
        <button></button>
        <div className="flex flex-col">
          {/* {isExpanded && ( */}
          <div className="flex flex-col gap-1.5 pb-2 pl-6">
            {Array(tweetRepliesLength)
              .fill(0)
              .map((_, index) => (
                <TweetReplyIsLoading key={index} />
              ))}
          </div>
          {/* )} */}
          <div className="flex gap-1 pt-2">
            {isReplying ? (
              <div className="w-full items-stretch">
                <WriteTweetIsLoading />
              </div>
            ) : (
              <div className="flex w-full justify-around gap-96 p-2 text-lg text-slate-900 dark:text-slate-50">
                <button className="h-4 w-10 underline hover:text-slate-950 hover:no-underline dark:bg-slate-700 dark:hover:text-slate-100"></button>
                <button className="h-4 w-10 underline hover:text-slate-950 hover:no-underline dark:bg-slate-700 dark:hover:text-slate-100"></button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
