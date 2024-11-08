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
        className={`flex w-full items-center justify-start gap-2.5 rounded-md bg-slate-50 px-2 py-2.5 pl-6 text-slate-600 transition duration-150 hover:bg-slate-100 hover:text-slate-950 hover:shadow-sm dark:bg-slate-600 ${isClicked ? "bg-slate-200 text-slate-950 shadow-md dark:bg-slate-400 dark:text-white" : "hover:bg-slate-100 hover:text-slate-950 hover:shadow-sm dark:text-slate-50 dark:hover:bg-slate-500/80"}`}
        onClick={onClick}
      >
        <Icon />
        {text}
      </button>
    </Link>
  );
}
