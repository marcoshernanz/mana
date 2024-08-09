import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface NavProps {
  link: string;
  name?: string;
  className?: string;
}

export default function Nav({ link, name, className }: NavProps) {
  return (
    <Link
      className={twMerge("transition hover:text-orange-500", className)}
      href={link}
    >
      {name}
    </Link>
  );
}
