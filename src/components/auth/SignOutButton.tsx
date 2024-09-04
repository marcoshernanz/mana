"use client";

import signOut from "@/server-actions/auth/signOut";
import Button from "../../../old ui/Button";

export default function SignOutButton() {
  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <Button
      size="small"
      type="filled"
      text="Sign Out"
      className="rounded-md bg-red-500 px-4 py-2 text-white"
      onClick={handleSignOut}
    ></Button>
  );
}
