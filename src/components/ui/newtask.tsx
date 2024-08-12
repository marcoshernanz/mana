import { twMerge } from "tailwind-merge";

interface NewTaskProps {
  title: string;
  message?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function NewTask({
  title,
  message,
  className,
  children,
}: NewTaskProps) {
  return (
    <div
      className={twMerge(
        "flex h-24 w-full flex-col justify-center gap-3 rounded-md bg-orange-100 pl-6 dark:bg-slate-800",
        className,
      )}
    >
      <span className="text-">{title}</span>
      <span>{message}</span>
      {children}
    </div>
  );
}
