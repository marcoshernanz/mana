import AlertDialog from "@/components/ui/AlertDialog";
import Button from "@/components/ui/Button";

export default function SignInPage() {
  return (
    <div className="bg-orange-50-50 flex h-screen w-screen items-center justify-center dark:bg-slate-950">
      {/* <AlertDialog
        title="ERROR"
        Message="You haven't sign-in"
        type="error"
        size="dwarf"
      /> */}
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
          <Button
            text="Sign in"
            type="filled"
            size="medium"
            className="text-base font-semibold"
          />
          <Button
            text="Sign in with Google"
            type="outlined"
            size="medium"
            className="text-base font-semibold"
          />
        </div>
      </div>
    </div>
  );
}