import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Faq1() {
  return (
    <div className="flex flex-col items-center justify-center gap-14">
      <div className="flex w-2/3 items-center justify-center text-center text-6xl font-bold text-slate-900 dark:text-slate-50">
        <span>{"MANA's Frequently Asked Questions"}</span>
      </div>
      <Link href="/contact-us">
        <Button size="lg" className="h-14 px-10 text-base">
          Contact us
        </Button>
      </Link>
    </div>
  );
}
