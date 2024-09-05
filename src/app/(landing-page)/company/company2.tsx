import { Building2Icon, MapPinHouseIcon, NewspaperIcon } from "lucide-react";
import Image from "next/image";

export default function Company2() {
  return (
    <div className="relative z-0 flex w-full items-center justify-center bg-slate-100/40 dark:bg-slate-900/15">
      <div className="flex max-w-7xl flex-col items-center justify-center gap-32 px-10 pb-12">
        <div className="flex gap-64 pb-10 pt-16">
          <div className="flex flex-col items-center justify-center">
            <MapPinHouseIcon
              size="75px"
              className="mb-8"
              strokeWidth={1.6}
              color="#020617"
            />
            <span className="flex gap-1 text-5xl font-bold text-slate-950 dark:text-orange-500">
              {" "}
              2,000{" "}
              <span className="text-3xl font-bold text-cyan-900 dark:text-orange-600">
                +
              </span>
            </span>
            <hr className="mt-4 h-0.5 w-full bg-zinc-400 dark:bg-orange-900"></hr>
            <span className="dark: pt-2 tracking-wide text-zinc-900 dark:text-orange-100">
              Countries with stores
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Building2Icon
              size="75px"
              className="mb-8"
              strokeWidth={1.6}
              color="#020617"
            />
            <span className="flex gap-1 text-5xl font-bold text-slate-950 dark:text-orange-500">
              {" "}
              100{" "}
              <span className="text-3xl font-bold text-cyan-900 dark:text-orange-600">
                +
              </span>
            </span>
            <hr className="mt-4 h-0.5 w-full bg-zinc-400 dark:bg-orange-900"></hr>
            <span className="pt-2 tracking-wide text-zinc-900 dark:text-orange-100">
              Stores in Spain
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <NewspaperIcon
              size="75px"
              className="mb-8"
              strokeWidth={1.6}
              color="#020617"
            />
            <span className="flex gap-1 text-5xl font-bold text-slate-950 dark:text-orange-500">
              {" "}
              1,000{" "}
              <span className="text-3xl font-bold text-cyan-900 dark:text-orange-600">
                +
              </span>
            </span>
            <hr className="mt-4 h-0.5 w-full bg-zinc-400 dark:bg-orange-900"></hr>
            <span className="pt-2 tracking-wide text-zinc-900 dark:text-orange-100">
              Patented softwares
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
