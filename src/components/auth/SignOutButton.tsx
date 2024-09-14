"use client";

import signOut from "@/server-actions/auth/signOut";
import { Button } from "../ui/Button";

export default function SignOutButton() {
  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <Button
      className="rounded-md bg-red-500 px-4 py-2 text-white"
      onClick={handleSignOut}
    >
      Sign Out
    </Button>
  );
}
