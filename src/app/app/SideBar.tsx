"use client";

import {
  BirdIcon,
  BookIcon,
  HomeIcon,
  ListCheckIcon,
  LogOutIcon,
  UserIcon,
} from "lucide-react";
import SideBarItem, { SideBarItemProps } from "./SideBarItem";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
  const [clickedIndex, setClickedIndex] = useState<number>(0);

  const handleClick = (index: number) => {
    setClickedIndex(index);
  };

  useEffect(() => {
    localStorage.setItem("clickedIndex", JSON.stringify(clickedIndex));
  }, [clickedIndex]);

  useEffect(() => {
    const click = localStorage.getItem("clickedIndex");
    if (click) {
      setClickedIndex(JSON.parse(click));
    }
  }, [clickedIndex]);

  return (
    <div className="fixed left-0 right-0 z-30 flex h-screen w-44 flex-col justify-between border-r bg-white px-1 pb-3 pt-2 shadow-lg">
      <div className="flex flex-col gap-1">
        {sideBarItems.map((item, index) => (
          <SideBarItem
            key={index}
            {...item}
            isClicked={index === clickedIndex}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger>Account</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex gap-2">
            <UserIcon className="h-5 w-5 text-slate-800" />
            <button>Profile</button>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LogOutIcon className="h-5 w-5 text-slate-800" />
            <button>Log out</button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
