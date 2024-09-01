"use client";

import Alert from "@/components/ui/Alert";
import Button from "@/components/ui/Button";
import signUp from "@/server-actions/auth/signUp";
import { FormEvent, useState } from "react";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrorMessage(null);
    setSuccessMessage(null);

    const { error } = await signUp({ name, username, password });

    if (error) {
      setErrorMessage(error);
    } else {
      setSuccessMessage("Account created successfully");
    }
  };

  return (
    <div className="bg-orange-50-50 flex h-screen w-screen items-center justify-center dark:bg-slate-950">
      <form
        onSubmit={(e) => handleSignUp(e)}
        className="flex flex-col items-center justify-center gap-4 rounded-xl border border-orange-200/90 bg-white px-7 py-8 text-slate-950 shadow-sm dark:border-orange-600 dark:bg-slate-900/30 dark:text-orange-50"
      >
        <div className="mb-2.5 flex w-full flex-col gap-1">
          <span className="text-2xl font-semibold dark:text-orange-500">
            Sign Up
          </span>
          <span className="text-sm text-slate-600 dark:text-slate-400">
            Enter your email below to create your account
          </span>
        </div>
        <div className="flex w-full flex-col gap-1.5">
          <label
            className="text-sm font-semibold text-slate-950 dark:text-slate-50"
            htmlFor="name"
          >
            Full Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-md border border-orange-200/65 bg-white px-3.5 py-2 text-sm placeholder:text-slate-400 dark:border-slate-800 dark:bg-slate-950 dark:placeholder:text-slate-400"
            placeholder="Marcos Hernanz"
            type="text"
            id="name"
            required
          />
        </div>
        <div className="flex w-full flex-col gap-1.5">
          <label
            className="text-sm font-semibold text-slate-950 dark:text-slate-50"
            htmlFor="username"
          >
            Username
          </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="rounded-md border border-orange-200/65 bg-white px-3.5 py-2 text-sm placeholder:text-slate-400 dark:border-slate-800 dark:bg-slate-950 dark:placeholder:text-slate-400"
            placeholder="marcoshernanz"
            type="text"
            id="username"
            required
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-md border border-orange-200/65 bg-white px-3.5 py-2 text-sm dark:border-slate-800 dark:bg-slate-950"
            type="password"
            id="password"
            required
          />
        </div>
        <div className="mt-4 flex w-full flex-col gap-2.5">
          <Button
            text="Sign in"
            type="filled"
            size="medium"
            className="text-base font-semibold"
          />
        </div>
        {errorMessage && (
          <Alert type="error">
            <span>{errorMessage}</span>
          </Alert>
        )}
        {successMessage && (
          <Alert type="success">
            <span>{successMessage}</span>
          </Alert>
        )}
      </form>
    </div>
  );
}
