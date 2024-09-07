import Link from "next/link";
import Faq1 from "./faq1";
import Faq2 from "./faq2";

export default function FaqPage() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-10 bg-slate-50 dark:bg-slate-950">
        <div className="flex max-w-7xl flex-col items-center gap-40 px-10 pt-36">
          <Faq1 />
          <Faq2 />
        </div>
      </div>
    </div>
  );
}
