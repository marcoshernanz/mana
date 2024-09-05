import { cn } from "@/lib/utils";

const sizes = {
  large: "h-6 w-96",
  medium: "h-4 w-40",
  small: "h-2 w-10",
};

const progressClass = {
  0: "bg-red-500 w-0.5",
  25: "bg-yellow-500 w-1/4",
  50: "bg-green-500 w-1/2",
  75: "bg-blue-500 w-3/4",
  100: "bg-purple-500 w-full",
};

interface ProgressProps {
  size: "large" | "medium" | "small";
  progress: 0 | 25 | 50 | 75 | 100;
  className?: string;
}

export default function Progress({ size, progress, className }: ProgressProps) {
  return (
    <div
      className={cn(
        "rounded-full border border-black bg-zinc-700",
        sizes[size],
        className,
      )}
    >
      <div
        className={cn(
          "h-full rounded-l-full",
          progressClass[progress],
          className,
        )}
      ></div>
    </div>
  );
}
