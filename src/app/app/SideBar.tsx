"use client";

import { BirdIcon, BookIcon, HomeIcon, ListCheckIcon } from "lucide-react";
import SideBarItem, { SideBarItemProps } from "./SideBarItem";

const sideBarItems = [
  {
    Icon: HomeIcon,
    text: "Home",
    href: "/app",
  },
  {
    Icon: ListCheckIcon,
    text: "Todo",
    href: "/app/todo",
  },
  {
    Icon: BookIcon,
    text: "Blog",
    href: "/app/blog",
  },
  {
    Icon: BirdIcon,
    text: "Twitter",
    href: "/app/twitter",
  },
] satisfies SideBarItemProps[];

export default function SideBar() {
  return (
    <div className="fixed left-0 right-0 z-30 flex h-screen w-44 flex-col justify-between border-r bg-white px-1 pb-3 pt-2 shadow-lg">
      <div className="flex flex-col gap-1">
        {sideBarItems.map((item, index) => (
          <SideBarItem key={index} {...item} />
        ))}
      </div>
      <button>User button</button>
    </div>
  );
}
