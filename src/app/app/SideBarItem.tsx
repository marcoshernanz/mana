"use client";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export interface SideBarItemProps {
  Icon: LucideIcon;
  text: string;
  href: string;
  isClicked?: boolean;
  onClick?: () => void;
}

export default function SideBarItem({
  Icon,
  text,
  href,
  isClicked,
  onClick,
}: SideBarItemProps) {
  // const isClicked = () => {
  //   const lastWordInUrl = href.split("/").filter(Boolean).pop()?.toLowerCase();
  //   return text.toLowerCase() === lastWordInUrl;
  // };
  return (
    <Link href={href}>
      <button
        className={`flex w-full items-center justify-start gap-2.5 rounded-md px-2 py-2.5 pl-6 text-slate-600 transition duration-150 hover:bg-slate-100 hover:text-slate-950 hover:shadow-sm ${isClicked ? "bg-slate-200 text-slate-950 shadow-md" : "hover:bg-slate-100 hover:text-slate-950 hover:shadow-sm"}`}
        onClick={onClick}
      >
        <Icon />
        {text}
      </button>
    </Link>
  );
}
