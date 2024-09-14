import { LucideIcon } from "lucide-react";
import Link from "next/link";

export interface SideBarItemProps {
  Icon: LucideIcon;
  text: string;
  href: string;
}

export default function SideBarItem({ Icon, text, href }: SideBarItemProps) {
  return (
    <Link href={href}>
      <button className="flex w-full items-center justify-start gap-2.5 rounded-md px-2 py-2.5 pl-6 text-slate-600 transition duration-150 hover:bg-slate-100 hover:text-slate-950 hover:shadow-sm">
        <Icon />
        {text}
      </button>
    </Link>
  );
}
