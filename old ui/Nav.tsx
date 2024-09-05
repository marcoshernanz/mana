import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavProps {
  link: string;
  name?: string;
  className?: string;
}

export default function Nav({ link, name, className }: NavProps) {
  return (
    <Link
      className={cn("transition hover:text-orange-500", className)}
      href={link}
    >
      {name}
    </Link>
  );
}
