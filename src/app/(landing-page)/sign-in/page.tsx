export default function SignInPage() {
  return (
    <div className="bg-orange-50-50 flex h-screen w-screen items-center justify-center dark:bg-slate-950">
      <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-orange-200/90 bg-white px-7 py-8 text-slate-950 shadow-sm dark:border-orange-600 dark:bg-slate-900/30 dark:text-orange-50">
        <div className="mb-2.5 flex w-full flex-col gap-1">
          <span className="text-2xl font-semibold dark:text-orange-500">
            Sign in
          </span>
          <span className="text-sm text-slate-600 dark:text-slate-400">
            Enter your email below to login to your account
          </span>
        </div>
        <div className="flex w-full flex-col gap-1.5">
          <label
            className="text-sm font-semibold text-slate-950 dark:text-slate-50"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="rounded-md border border-orange-200/65 bg-white px-3.5 py-2 text-sm placeholder:text-slate-400 dark:border-slate-800 dark:bg-slate-950 dark:placeholder:text-slate-400"
            placeholder="name@gmail.com"
            type="email"
            id="email"
          />
        </div>
        <div className="flex w-full flex-col gap-1.5">
          <label
            className="text-sm font-semibold text-slate-950 dark:text-slate-50"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="rounded-md border border-orange-200/65 bg-white px-3.5 py-2 text-sm dark:border-slate-800 dark:bg-slate-950"
            type="password"
            id="password"
          />
        </div>
        <div className="mt-4 flex w-full flex-col gap-2.5">
          <button className="rounded-md border border-orange-900 bg-orange-500 py-2.5 font-semibold text-slate-50 transition hover:border-orange-800 hover:bg-orange-600 active:shadow-lg dark:border-slate-100 dark:bg-slate-50 dark:text-slate-950 dark:hover:border-slate-400 dark:hover:bg-slate-300">
            Sign in
          </button>
          <button className="rounded-md border border-orange-200/75 py-2.5 font-medium transition hover:border-orange-200/70 hover:bg-orange-100/75 active:shadow dark:border-slate-700 dark:hover:border-slate-700 dark:hover:bg-slate-800">
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}
