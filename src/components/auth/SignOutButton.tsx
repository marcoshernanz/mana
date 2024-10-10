"use client";

import signOut from "@/lib/auth/signOut";
import { Button } from "../ui/Button";

export default function SignOutButton() {
  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <Button
      variant="ghost"
      className="rounded-md px-4 py-2 text-slate-800"
      onClick={handleSignOut}
    >
      Sign Out
    </Button>
  );
}
