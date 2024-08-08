import Faq1 from "@/components/faq/faq1";
import Faq2 from "@/components/faq/faq2";
import Link from "next/link";

export default function FaqPage() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-10 bg-orange-50 dark:bg-slate-950">
        <div className="flex max-w-7xl flex-col items-center gap-64 px-10 pt-36">
          <Faq1 />
          <Faq2 />
        </div>
      </div>
    </div>
  );
}
