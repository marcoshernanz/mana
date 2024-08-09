//Added z-50 to header due to a probelm with relatives and absolutes

import Nav from "@/components/ui/Nav";
import Link from "next/link";

interface LandingPageLayoutProps {
  children: React.ReactNode;
}

export default function LandingPageLayout({
  children,
}: LandingPageLayoutProps) {
  return (
    <div className="bg-orange-50 pt-16 dark:bg-slate-950">
      <div className="fixed left-0 top-0 z-50 flex h-20 w-full items-center justify-center gap-24 bg-orange-100 font-semibold shadow-md dark:bg-slate-800 dark:text-slate-100">
        <Nav link="/" name="MANA" />
        <Nav link="/company" name="Company" />
        <Nav link="/products" name="Products" />
        <Nav link="/pricing" name="Pricing" />
        <Nav link="/faq" name="FAQ" />
        <Nav link="/sign-in" name="Sign in" />
        <Nav link="/contact-us" name="Contact us" />
      </div>
      {children}
    </div>
  );
}
