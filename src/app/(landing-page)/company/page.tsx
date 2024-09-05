/* NEW THINGS: */
//list-decimal (by Tailwind)
//indent (by Tailwind) --> lists has their own indentation so we use pl- instead

import Company1 from "@/app/(landing-page)/company/company1";
import Company2 from "@/app/(landing-page)/company/company2";
import Company3 from "@/app/(landing-page)/company/company3";
import Image from "next/image";

export default function Company() {
  return (
    <div>
      <div className="relative flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950">
        <Company1 />
        <Company2 />
        <Company3 />
      </div>
    </div>
  );
}
