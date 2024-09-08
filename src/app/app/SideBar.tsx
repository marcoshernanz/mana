import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function SideBar() {
  return (
    <div className="flex w-full max-w-40 flex-col items-center gap-10 rounded-r-lg bg-slate-200 pt-60">
      <Link href="/app/todo" className="underline">
        Todo
      </Link>
      <Link href="/app/blog" className="underline">
        Blog
      </Link>
      <Link href="/app/twitter" className="underline">
        Twitter
      </Link>
      <div className="flex gap-4 pt-20">
        <Avatar className="border border-slate-950">
          <AvatarImage src="https://e7.pngegg.com/pngimages/291/809/png-clipart-woman-s-face-anti-aging-cream-skin-care-cosmetics-woman-face-woman-cream-head-thumbnail.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span>username</span>
      </div>
    </div>
  );
}
