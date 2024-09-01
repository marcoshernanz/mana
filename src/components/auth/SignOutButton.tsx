"use client";

import signOut from "@/server-actions/auth/signOut";
import Button from "../ui/Button";
import { useRouter } from "next/navigation";

export default function SignOutButton() {
  console.log("SignOutButton");
  const router = useRouter();

  const handleSignOut = async () => {
    signOut();
    router.refresh();
    console.log("Signed out");
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
