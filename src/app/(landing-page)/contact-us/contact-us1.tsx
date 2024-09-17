import { FileMinusIcon } from "lucide-react";
import Image from "next/image";

export default function ContactUs1() {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div className="flex flex-col gap-16">
        <span className="text-4xl font-bold text-slate-900 dark:text-orange-500">
          Service Support Center
        </span>
        <div className="flex items-center justify-center gap-20">
          <div className="flex flex-col items-center justify-center gap-4">
            <FileMinusIcon className="h-16 w-16 text-slate-950" />
            <span className="text-lg font-medium">After-sales Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
}
