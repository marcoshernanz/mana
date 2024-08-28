"use client";

export default function TodoTaskLoading() {
  return (
    <div className="h-[3.125rem] animate-pulse bg-slate-200 px-6 py-3">
      <div className="flex h-full items-center justify-between">
        <div className="h-4 w-56 rounded-full bg-slate-300"></div>
        <div className="flex gap-2">
          <div className="h-4 w-4 rounded-[0.25rem] bg-slate-300"></div>
          <div className="h-4 w-12 rounded-full bg-slate-300"></div>
        </div>
      </div>
    </div>
  );
}
