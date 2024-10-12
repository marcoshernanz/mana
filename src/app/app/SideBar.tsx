"use client";

import {
  BirdIcon,
  BookIcon,
  HomeIcon,
  ListCheckIcon,
  LogOutIcon,
  MoonIcon,
  SunIcon,
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
import SignOutButton from "@/components/auth/SignOutButton";
import Link from "next/link";
import { useTodo } from "@/contexts/TodoContext";
import Theme from "./Theme";

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

const dropDownMenuItems = [
  {
    Icon: MoonIcon,
    text: "Dark Mode",
  },
  {
    Icon: SunIcon,
    text: "Light Mode",
  },
];

interface SideBarProps {
  account?: string;
}

export default function SideBar(account: SideBarProps) {
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
    <div className="fixed left-0 right-0 z-30 flex h-screen w-44 flex-col justify-between border-r px-1 pb-3 pt-2 shadow-lg dark:border-slate-700 dark:bg-slate-800">
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
          <DropdownMenuItem className="flex gap-2 text-slate-950 transition duration-200 hover:font-medium hover:text-black dark:text-slate-50">
            <UserIcon className="h-5 w-5 text-slate-800" />
            {/* {account !== undefined ? (
              <Link
                href={`/app/twitter/${account}`}
                className="max-w-6xl break-words pb-3 pl-6 pr-6 text-sm text-slate-600 dark:text-slate-300"
              >
                Account
              </Link>
            ) : (
              <span>Account</span>
            )} */}
            Account
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LogOutIcon className="h-5 w-5 text-slate-800" />
            <SignOutButton />
          </DropdownMenuItem>
          <DropdownMenuLabel>Mode</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {/* {dropDownMenuItems.map((item, index) => (
            <DropdownMenuItem
              key={index}
              className="flex gap-2 text-slate-950 transition duration-200 hover:font-medium hover:text-black"
            >
              <item.Icon className="h-5 w-5 text-slate-800" />
              {item?.text}
            </DropdownMenuItem>
          ))} */}
          <Theme />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
