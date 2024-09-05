// import Pricing1 from "@/components/pricing/pricing1";
import Pricing2 from "@/app/(landing-page)/pricing/pricing2";
import Pricing1 from "./pricing1";

export default function PricingPage() {
  return (
    <div className="flex items-center justify-center bg-slate-50 dark:bg-slate-950">
      <div className="h-full w-full max-w-7xl px-10 pb-10">
        <Pricing1 />
        <hr className="border-t-2 border-cyan-700/50 dark:border-slate-800" />
        <Pricing2 />
      </div>
    </div>
  );
}
