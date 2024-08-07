import { twMerge } from "tailwind-merge";

// dark
const types = {
  filled: "text-orange-50 border-orange-500 bg-orange-500 hover:bg-orange-600",
  tonal: "text-orange-950 bg-orange-200 border-orange-200 hover:bg-orange-300",
  outlined: "text-orange-950",
  text: "",
};

const sizes = {
  large: "px-8 py-6 text-xl",
  medium: "",
  small: "",
};

interface ButtonProps {
  text: string;
  type: "filled" | "tonal" | "outlined" | "text";
  size: "large" | "medium" | "small";
  className?: string;
}

export default function Button({ text, type, size, className }: ButtonProps) {
  // Text color
  // Border color
  // Background color
  // Hover

  return (
    <button
      className={twMerge(
        "rounded-lg border font-semibold transition hover:shadow-md active:shadow-none",
        types[type],
        sizes[size],
        className,
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
