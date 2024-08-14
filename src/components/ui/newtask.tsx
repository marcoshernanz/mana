//boolean by tailwind

import { twMerge } from "tailwind-merge";

interface NewTaskProps {
  title: string;
  message?: string;
  className?: string;
  children?: React.ReactNode;
  checkbox?: boolean;
}

function Checkbox({ checkbox }: { checkbox: boolean }) {
  if (checkbox) {
    return (
      <div className="p-2">
        <input type="checkbox"></input>
      </div>
    );
  }
  return null;
}

export default function NewTask({
  title,
  message,
  className,
  children,
  checkbox,
}: NewTaskProps) {
  return (
    <div
      className={twMerge(
        "flex h-24 w-full justify-center rounded-md bg-orange-100 dark:bg-slate-800",
        className,
      )}
    >
      <div className="flex w-full flex-col justify-center gap-3 pl-6">
        <span className="font-semibold text-slate-900 dark:text-slate-50">
          {title}
        </span>
        <span className="text-zinc-700 dark:text-slate-300">{message}</span>
        {children}
      </div>
      <Checkbox checkbox={checkbox || false}></Checkbox>
    </div>
  );
}
