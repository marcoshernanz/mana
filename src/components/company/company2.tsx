import Image from "next/image";

export default function Company2() {
  return (
    <div className="relative z-0 flex w-full items-center justify-center bg-orange-100/40 dark:bg-slate-900/15">
      <div className="flex max-w-7xl flex-col items-center justify-center gap-32 px-10 pb-12">
        <div className="flex gap-64 pb-10 pt-16">
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/icons1/maps.png"
              height={90}
              width={90}
              alt="localization"
              className="pb-8"
            ></Image>
            <span className="flex gap-1 text-5xl font-bold text-slate-950 dark:text-orange-500">
              {" "}
              2,000{" "}
              <span className="text-3xl font-bold text-black dark:text-orange-600">
                +
              </span>
            </span>
            <hr className="mt-4 h-0.5 w-full bg-zinc-400 dark:bg-orange-900"></hr>
            <span className="dark: pt-2 tracking-wide text-zinc-900 dark:text-orange-100">
              Countries with stores
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/icons1/store.png"
              height={90}
              width={90}
              alt="store"
              className="pb-8"
            ></Image>
            <span className="flex gap-1 text-5xl font-bold text-slate-950 dark:text-orange-500">
              {" "}
              100{" "}
              <span className="text-3xl font-bold text-black dark:text-orange-600">
                +
              </span>
            </span>
            <hr className="mt-4 h-0.5 w-full bg-zinc-400 dark:bg-orange-900"></hr>
            <span className="pt-2 tracking-wide text-zinc-900 dark:text-orange-100">
              Stores in Spain
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/icons1/patented1.png"
              height={90}
              width={90}
              alt="patented"
              className="pb-8"
            ></Image>
            <span className="flex gap-1 text-5xl font-bold text-slate-950 dark:text-orange-500">
              {" "}
              1,000{" "}
              <span className="text-3xl font-bold text-black dark:text-orange-600">
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
