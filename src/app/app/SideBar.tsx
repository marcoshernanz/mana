"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/Button";

import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { cn } from "@/lib/utils";
import { BookCheckIcon, BookTextIcon } from "lucide-react";
import Link from "next/link";

interface SideBarProps {
  className?: string;
}

export default function SideBar({ className }: SideBarProps) {
  return (
    <div
      className={cn(
        "flex h-screen w-full max-w-52 flex-col gap-1 border border-slate-300 bg-slate-200 pt-48",
        className,
      )}
    >
      <div className="w-full px-2">
        <Button className="flex w-full justify-start gap-5 bg-slate-800 py-6 text-slate-50 transition hover:bg-slate-900">
          <BookCheckIcon size={20} color="#f8fafc" />
          Home
        </Button>
      </div>
      <div className="w-full px-2">
        <Link href="/app/todo">
          <Button
            className="flex w-full justify-start gap-5 py-6 text-slate-950 transition hover:bg-slate-100"
            variant={"ghost"}
          >
            <BookCheckIcon size={20} color="#020617" />
            Todo
          </Button>
        </Link>
      </div>
      <div className="w-full px-2">
        <Link href="/app/blog">
          <Button
            className="w-full justify-start gap-5 text-slate-950 transition hover:bg-slate-100"
            variant={"ghost"}
          >
            <BookTextIcon size={20} color="#020617" />
            Blog
          </Button>
        </Link>
      </div>
      <div className="w-full px-2">
        <Link href="/app/twitter">
          <Button
            className="w-full justify-start gap-5 text-slate-950 transition hover:bg-slate-100"
            variant={"ghost"}
          >
            <BookTextIcon size={20} color="#020617" />
            Twitter
          </Button>
        </Link>
      </div>
      <hr className="m-1 flex border-t border-slate-300" />
      <div className="mb-2 mt-auto flex w-full items-end justify-end px-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="w-full justify-start gap-5 text-slate-950 transition hover:bg-slate-100"
              variant={"ghost"}
            >
              <Avatar className="border border-slate-950">
                <AvatarImage src="https://e7.pngegg.com/pngimages/291/809/png-clipart-woman-s-face-anti-aging-cream-skin-care-cosmetics-woman-face-woman-cream-head-thumbnail.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              username
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Keyboard className="mr-2 h-4 w-4" />
                <span>Keyboard shortcuts</span>
                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Users className="mr-2 h-4 w-4" />
                <span>Team</span>
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <UserPlus className="mr-2 h-4 w-4" />
                  <span>Invite users</span>
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>
                      <Mail className="mr-2 h-4 w-4" />
                      <span>Email</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <MessageSquare className="mr-2 h-4 w-4" />
                      <span>Message</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <PlusCircle className="mr-2 h-4 w-4" />
                      <span>More...</span>
                    </DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuItem>
                <Plus className="mr-2 h-4 w-4" />
                <span>New Team</span>
                <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Github className="mr-2 h-4 w-4" />
              <span>GitHub</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LifeBuoy className="mr-2 h-4 w-4" />
              <span>Support</span>
            </DropdownMenuItem>
            <DropdownMenuItem disabled>
              <Cloud className="mr-2 h-4 w-4" />
              <span>API</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
