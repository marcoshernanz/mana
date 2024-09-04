import { twMerge } from "tailwind-merge";

const types = {
  new: "bg-blue-800 text-blue-50 hover:bg-blue-900",
  popular: "bg-violet-800 text-violet-50 hover:bg-violet-900",
  updated: "bg-rose-200 text-rose-900 hover:bg-rose-300",
  important: "bg-red-600 text-red-50 hover:bg-red-700",
  general: "bg-green-400 text-green-900 hover:bg-green-500",
  advanced: "bg-purple-200 text-purple-900 hover:bg-purple-300",
  technical: "bg-gray-400 text-gray-950 hover:bg-gray-500",
  billing: "bg-yellow-200 text-yellow-950 hover:bg-yellow-300",
  account: "bg-orange-400 text-orange-950 hover:bg-orange-500",
  seccurity: "bg-emerald-700 text-emerald-50 hover:bg-emerald-800",
  HowTo: "bg-slate-400 text-slate-950 hover:bg-slate-500",
  video: "bg-sky-200 text-blue-950 hover:bg-sky-300",
  ProTip: "bg-lime-300 text-lime-950 hover:bg-lime-400",
  community: "bg-fuchsia-400 text-fuchsia-950 hover:bg-fuchsia-500",
  support: "bg-amber-300 text-red-950 hover:bg-amber-400",
};

const sizes = {
  small: "text-xs py-1 px-2",
  medium: "text-sm py-1 px-3",
  large: "text-base py-2 px-4",
};

interface BadgeProps {
  type:
    | "new"
    | "popular"
    | "updated"
    | "important"
    | "general"
    | "advanced"
    | "technical"
    | "billing"
    | "account"
    | "seccurity"
    | "HowTo"
    | "video"
    | "ProTip"
    | "community"
    | "support";

  size: "small" | "medium" | "large";
  className?: string;
}

export default function Badge({ type, className, size }: BadgeProps) {
  return (
    <div
      className={twMerge("rounded-full", types[type], sizes[size], className)}
    >
      {type}
    </div>
  );
}
