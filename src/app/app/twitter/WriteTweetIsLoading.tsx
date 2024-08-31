export default function WriteTweetIsLoading() {
  return (
    <div className="flex animate-pulse items-center justify-center gap-3 rounded-lg bg-slate-800 p-3 text-slate-900 dark:text-white">
      <div className="flex w-full flex-col items-stretch gap-3">
        <input className="h-4 w-10 dark:bg-slate-700"></input>
        <input></input>
      </div>
      <div>
        <button></button>
      </div>
    </div>
  );
}
