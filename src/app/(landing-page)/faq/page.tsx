export default function FaqPage() {
  return (
    <div>
      <div className="flex h-screen items-center justify-center gap-10 dark:bg-slate-950">
        <button className="rounded-md bg-slate-950 px-8 py-4 text-2xl font-semibold text-slate-50 transition hover:bg-slate-800 hover:shadow-lg active:shadow-none dark:bg-slate-50 dark:text-slate-950 dark:hover:bg-slate-200">
          Click me
        </button>
        <input className="rounded-md border border-slate-200 px-6 py-2 text-lg focus:bg-slate-300" />
      </div>
    </div>
  );
}
