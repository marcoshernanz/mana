import { cn } from "@/lib/utils";
import { CheckIcon, CircleAlertIcon } from "lucide-react";

const types = {
  success: "border-green-700 text-green-500",
  error: "border-red-700 text-red-500",
};

interface AlertProps {
  className?: string;
  children?: React.ReactNode;
  type: "success" | "error";
}

export default function Alert({ className, children, type }: AlertProps) {
  return (
    <div
    // className={twMerge(
    //   "fixed left-0 top-0 z-50 flex h-screen w-screen flex-col items-center justify-center rounded-lg shadow-2xl",
    // )}
    >
      {/* <div className="fixed h-screen w-screen bg-black/70 backdrop-blur-[1px]"></div> */}
      <div
        className={cn(
          "relative flex max-w-5xl flex-col rounded-md border border-slate-100 bg-black/40 p-4 pr-60 shadow-sm",
          types[type],
          className,
        )}
      >
        <div>
          {type === "error" ? (
            <div className="flex items-center gap-3">
              <CircleAlertIcon size="18px" strokeWidth={1.5} />
              <span>Error</span>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <CheckIcon size="18px" strokeWidth={1.5} />
              <span>Success!</span>
            </div>
          )}
        </div>
        <div className="pl-8 text-sm font-light">{children}</div>
      </div>
    </div>
  );
}
