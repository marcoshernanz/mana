import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";
import Image from "next/image";
// import Button from "../../../../old ui/Button";

export default function Pricing1() {
  const BasicIndividualData = [
    "Personalized Dashboard",
    "Basic Tool Integration",
    "Goal Tracking",
    "Task Management",
    "Limited Storage",
    "Standard Support",
    "Community Access",
  ];
  const PremiumIndividualData = [
    "Unlimited products",
    "Advanced analytics",
    "Free training tutorials",
    "Priority Support",
    "Extended Tool Integration",
    "Custom Automation",
    "Unlimited Storage",
    "Exclusive Content",
    "Data Insights and Reports",
  ];

  return (
    /* border-2 border-orange-500 bg-orange-100 dark:bg-slate-900 rounded-xl*/
    <div className="flex flex-col gap-12 px-10 pb-28 pt-28">
      <div className="flex flex-col items-center justify-center">
        <span className="pb-4 font-semibold text-cyan-600">Pricing</span>
        <span className="pb-8 text-5xl font-bold text-slate-900 dark:text-slate-100">
          Plans for individuals{" "}
        </span>
        <span className="pb-4 text-lg font-normal text-slate-600 dark:text-slate-300">
          The best plans to success on your own
        </span>
      </div>
      <div className="flex justify-center gap-16">
        <div className="rounded-2xl border border-slate-200 bg-slate-200/30 px-10 pb-10 pt-8 dark:bg-slate-800/80">
          <div className="flex flex-col gap-2">
            <div className="flex">
              <span className="pb-2 font-semibold text-cyan-600">Basic</span>
            </div>
            <span className="pb-8 text-5xl font-bold text-slate-950 dark:text-slate-50">
              $40
              <span className="text-base font-medium text-zinc-600 dark:text-slate-50">
                /month
              </span>
            </span>
            <Button variant="outline" className="bg-slate-50">
              Buy plan
            </Button>
            <span className="pt-8 text-base font-medium text-zinc-800 dark:text-zinc-200">
              Everything in Essential plus 10 training or tutorials plus 200
              products
            </span>
          </div>
          <div className="flex flex-col gap-4 pt-8 text-zinc-700 dark:text-zinc-300">
            {BasicIndividualData.map(function (item, index) {
              return (
                <div className="flex gap-4" key={index}>
                  <Check size={22} color="#0e7490" />
                  <span>{item}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="rounded-2xl border-2 border-slate-300 bg-slate-100 px-10 pb-10 pt-8 shadow-xl dark:bg-slate-900">
          <div className="flex flex-col gap-2">
            <div className="flex">
              <span className="pb-2 font-semibold text-cyan-600">Premium</span>
            </div>
            <span className="pb-8 text-5xl font-bold text-slate-950 dark:text-slate-50">
              $100
              <span className="text-base font-medium text-zinc-600 dark:text-slate-50">
                /month
              </span>
            </span>
            <Button variant="default" className="bg-slate-900">
              Buy plan
            </Button>
            <span className="pt-8 text-base font-medium text-zinc-800 dark:text-zinc-200">
              Everything in Essential plus training or tutorials plus unlimited
              products
            </span>
          </div>
          <div className="flex flex-col gap-4 pt-8 text-zinc-700 dark:text-zinc-300">
            {PremiumIndividualData.map(function (item, index) {
              return (
                <div className="flex gap-4" key={index}>
                  <Check size={22} color="#0e7490" />
                  <span>{item}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
