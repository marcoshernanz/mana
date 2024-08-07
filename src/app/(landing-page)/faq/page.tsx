import Link from "next/link";

export default function FaqPage() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-10 bg-orange-50 dark:bg-slate-950">
        <div className="flex max-w-7xl flex-col items-center gap-64 px-10 pt-36">
          <div className="flex flex-col items-center justify-center gap-14">
            <div className="flex w-2/3 items-center justify-center text-center text-6xl font-bold text-slate-900 dark:text-slate-50">
              <span>MANA'S Frequently Asked Questions</span>
            </div>
            <Link
              href="/contact-us"
              className="rounded-md border border-orange-900 bg-orange-500 px-6 py-2.5 text-lg font-semibold text-slate-50 transition hover:border-orange-800 hover:bg-orange-600 active:shadow-lg dark:border-orange-400 dark:bg-orange-500 dark:text-white dark:hover:border-orange-300 dark:hover:bg-orange-400"
            >
              Contact us
            </Link>
          </div>
          <div className="flex max-w-screen-sm flex-col pb-3">
            <div>
              <button className="py-6 text-xl font-semibold text-slate-800 transition dark:text-orange-100">
                {" "}
                What is MANA and how does it work?
              </button>
              <hr className="h-0.5 border bg-zinc-400 hover:h-1 hover:bg-zinc-400"></hr>
            </div>
            <div>
              {" "}
              <button className="py-6 text-xl font-semibold text-slate-800 transition dark:text-orange-100">
                How does MANA personalize my experience?
              </button>
              <hr className="h-0.5 border bg-zinc-400 hover:h-1 hover:bg-zinc-400"></hr>
            </div>
            <div>
              <button className="py-6 text-xl font-semibold text-slate-800 transition dark:text-orange-100">
                What productivity tools can MANA integrate with?
              </button>
              <hr className="h-0.5 border bg-zinc-400 hover:h-1 hover:bg-zinc-400"></hr>
            </div>
            <div>
              <button className="py-6 text-xl font-semibold text-slate-800 transition dark:text-orange-100">
                In which countries is MANA available?
              </button>
              <hr className="h-0.5 border bg-zinc-400 hover:h-1 hover:bg-zinc-400"></hr>
            </div>
            <div>
              <button className="py-6 text-xl font-semibold text-slate-800 transition dark:text-orange-100">
                How can I get started with MANA?
              </button>
              <hr className="h-0.5 border bg-zinc-400 hover:h-1 hover:bg-zinc-400"></hr>
            </div>
            <div>
              <button className="py-6 text-xl font-semibold text-slate-800 transition dark:text-orange-100">
                What makes MANA different from other life management platforms?
              </button>
              <hr className="h-0.5 border bg-zinc-400 hover:h-1 hover:bg-zinc-400"></hr>
            </div>
            <div>
              <button className="py-6 text-xl font-semibold text-slate-800 transition dark:text-orange-100">
                Is my data secure with MANA?
              </button>
              <hr className="h-0.5 border bg-zinc-400 hover:h-1 hover:bg-zinc-400"></hr>
            </div>
            <div>
              <button className="py-6 text-xl font-semibold text-slate-800 transition dark:text-orange-100">
                How can I get support if I need help with MANA?
              </button>
              <hr className="h-0.5 border bg-zinc-400 hover:h-1 hover:bg-zinc-400"></hr>
            </div>
            <div>
              <button className="py-6 text-xl font-semibold text-slate-800 transition dark:text-orange-100">
                What types of goals can MANA help me achieve?
              </button>
              <hr className="h-0.5 border bg-zinc-400 hover:h-1 hover:bg-zinc-400"></hr>
            </div>
            <div>
              <button className="py-6 text-xl font-semibold text-slate-800 transition dark:text-orange-100">
                Does MANA offer any training or tutorials to help me get the
                most out of the platform?
              </button>
              <hr className="h-0.5 border bg-zinc-400 hover:h-1 hover:bg-zinc-400"></hr>
            </div>
            <div>
              <button className="py-6 text-xl font-semibold text-slate-800 transition dark:text-orange-100">
                Can MANA be used by teams or is it only for individual use?
              </button>
              <hr className="h-0.5 border bg-zinc-400 hover:h-1 hover:bg-zinc-400"></hr>
            </div>
            <div>
              <button className="py-6 text-xl font-semibold text-slate-800 transition dark:text-orange-100">
                Are there any subscription plans or costs associated with using
                MANA?
              </button>
              <hr className="h-0.5 border bg-zinc-400 hover:h-1 hover:bg-zinc-400"></hr>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
