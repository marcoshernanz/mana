import Link from "next/link";
import Button from "../ui/Button";

export default function Faq1() {
  return (
    <div className="flex flex-col items-center justify-center gap-14">
      <div className="flex w-2/3 items-center justify-center text-center text-6xl font-bold text-slate-900 dark:text-slate-50">
        <span>{"MANA's Frequently Asked Questions"}</span>
      </div>
      <Link href="/contact-us">
        <Button text="Contact us" type="filled" size="medium" />
      </Link>
    </div>
  );
}
