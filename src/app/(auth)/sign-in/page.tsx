export default function SignInPage() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-slate-50">
      <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-slate-200/90 bg-white px-7 py-8 text-slate-950 shadow-sm">
        <div className="mb-2.5 flex w-full flex-col gap-1">
          <span className="text-2xl font-semibold">Login</span>
          <span className="text-sm text-slate-600">
            Enter your email below to login to your account
          </span>
        </div>
        <div className="flex w-full flex-col gap-1.5">
          <label
            className="text-sm font-semibold text-slate-950"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="rounded-md border border-slate-200 px-3 py-1.5 text-sm"
            placeholder="marcoshernanz@gmail.com"
            type="email"
            id="email"
          />
        </div>
        <div className="flex w-full flex-col gap-1.5">
          <label
            className="text-sm font-semibold text-slate-950"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="rounded-md border border-slate-200 px-3 py-1.5 text-sm"
            type="password"
            id="password"
          />
        </div>
        <div className="mt-4 flex w-full flex-col gap-2">
          <button className="rounded-md border border-slate-900 bg-slate-950 py-2.5 text-sm font-semibold text-slate-50">
            Login
          </button>
          <button className="rounded-md border border-slate-300 py-2.5 text-sm font-medium">
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
}
