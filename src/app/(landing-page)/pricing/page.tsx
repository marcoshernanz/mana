import Pricing1 from "@/components/pricing/pricing1";
import Pricing2 from "@/components/pricing/pricing2";

export default function PricingPage() {
  return (
    <div className="flex items-center justify-center bg-orange-50 dark:bg-slate-950">
      <div className="h-full w-full max-w-7xl px-10 pb-10">
        <Pricing1 />
        <hr className="border-t-2 border-orange-200 dark:border-slate-800" />
        <Pricing2 />
      </div>
    </div>
  );
}
