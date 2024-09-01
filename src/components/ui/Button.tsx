import { twMerge } from "tailwind-merge";

// dark
const types = {
  filled:
    "text-orange-50 border-orange-500 bg-orange-500 hover:bg-orange-600 hover:text-orange-100 dark:bg-orange-500 dark:text-orange-50 dark:hover:bg-orange-400 dark:hover:text-orange-100",
  tonal:
    "text-orange-950 bg-orange-200 border-orange-200 hover:bg-orange-300/70 hover:text-orange-900 border-2 dark:bg-orange-300 dark:border-orange-300 dark:hover:bg-orange-300/90 dark:hover:text-orange-900",
  outlined:
    "text-slate-800 border-orange-400 dark:border-orange-600 dark:text-slate-400 border-2 hover:bg-orange-100/40 hover:text-slate-900 dark:hover:bg-slate-900 dark:hover:text-slate-300",
  text: "",
};

const sizes = {
  large: "px-8 py-6 text-xl",
  medium: "px-6 py-3 text-lg",
  small: "px-4 py-2 text-base",
};

const colors = {
  "#78ffed": "bg-[#78ffed]",
  "#d9a5ff": "bg-[#d9a5ff]",
  "#88ffa4": "bg-[#88ffa4]",
  "#fdff88": "bg-[#fdff88]",
  "#ae0e0e": "bg-[#ae0e0e]",
  "#fff18b": "bg-[#fff18b]",
  "#d8fffa": "bg-[#d8fffa]",
  "#000443": "bg-[#000443]",
  "#37036c": "bg-[#37036c]",
  "#00396c": "bg-[#00396c]",
};

interface ButtonProps {
  text: string;
  type: "filled" | "tonal" | "outlined" | "text";
  size: "large" | "medium" | "small";
  color?:
    | "#78ffed"
    | "#d9a5ff"
    | "#88ffa4"
    | "#fdff88"
    | "#ae0e0e"
    | "#fff18b"
    | "#d8fffa"
    | "#000443"
    | "#37036c"
    | "#00396c";
  className?: string;
  onClick?: () => void;
}

export default function Button({
  text,
  type,
  size,
  color,
  className,
  onClick,
}: ButtonProps) {
  // Text color
  // Border color
  // Background color
  // Hover

  return (
    <button
      onClick={onClick}
      className={twMerge(
        "rounded-lg border font-bold transition hover:shadow-md active:shadow-none",
        types[type],
        sizes[size],
        className,
        color && colors[color],
      )}
    >
      {text}
    </button>
  );

  // if (type === "filled") {
  //   return <button>{text}</button>;
  // } else if (type === "tonal") {
  //   return <button>{text}</button>;
  // } else if (type === "outlined") {
  //   return <button>{text}</button>;
  // } else if (type === "text") {
  //   return <button>{text}</button>;
  // }
}
