export default function TweetReplyIsLoading() {
  return (
    <div className="flex animate-pulse flex-col gap-2 rounded-md border border-orange-200 bg-orange-200/30 p-2 shadow-sm hover:bg-orange-200/50 dark:border-slate-600 dark:bg-slate-700/70 dark:shadow-2xl dark:hover:bg-slate-600/60">
      <div className="flex justify-end">
        <button></button>
      </div>
      <span className="text-slate-700 dark:text-slate-200 dark:hover:text-slate-100"></span>
      <span className="text-xs text-zinc-500 dark:text-slate-200 dark:hover:text-slate-100"></span>
    </div>
  );
}
