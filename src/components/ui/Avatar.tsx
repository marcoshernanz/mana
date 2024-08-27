import Image from "next/image";
import { twMerge } from "tailwind-merge";

const sizes = {
  huge: "w-52 h-52",
  large: "w-40 h-40",
  medium: "w-28 h-28",
  small: "w-20 h-20",
  dwarf: "w-10 h-10",
};

interface AvatarProps {
  src: string;
  href?: string;
  size: "huge" | "large" | "medium" | "small" | "dwarf";
  alt: string;
  className?: string;
}

export default function Avatar({
  href,
  size,
  className,
  src,
  alt,
}: AvatarProps) {
  return (
    <div
      className={twMerge(
        "flex items-center justify-center",
        className,
        sizes[size],
      )}
    >
      <Image src={src} className="rounded-full" alt="Avatar image"></Image>
    </div>
  );
}
