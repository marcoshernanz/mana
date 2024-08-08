import { twMerge } from "tailwind-merge";
import Button from "./Button";

const types = {
  error: "bg-red-600/40 text-red-900 dark:text-red-50",
  warning: "bg-yellow-200 text-yellow-900",
  info: "bg-slate-200 test-slate-900",
};

const sizes = {
  huge: "w-11/12 px-10 pb-10 pt-40 text-5xl gap-28",
  large: "w-8/12 pt-20 pb-5 text-3xl gap-12 px-5",
  medium: "w-5/12 pt-10 pb-5 text-xl gap-8 px-5",
  small: "w-4/12 pt-5 pb-4 text-base gap-5 px-4",
  dwarf: "w-3/12 pt-4 pb-3 gap-4 px-3 text-sm",
};

interface AlertDialogProps {
  title: string;
  Message: string;
  type: "error" | "warning" | "info";
  size: "huge" | "large" | "medium" | "small" | "dwarf";
  className?: string;
}

export default function AlertDialog({
  title,
  Message,
  type,
  size,
  className,
}: AlertDialogProps) {
  return (
    <div
      className={twMerge(
        "absolute flex flex-col items-center justify-center rounded-lg border shadow-2xl",
        types[type],
        sizes[size],
        className,
      )}
    >
      {/* <div className="flex h-full w-full flex-col"> */}
      <div className="font-bold">{title}</div>
      <div>{Message}</div>
      <div className="flex w-full items-end justify-end gap-2">
        <div>
          <Button text="Cancel" type="tonal" size="small" />
        </div>
        <div>
          <Button text="Continue" type="filled" size="small" />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
