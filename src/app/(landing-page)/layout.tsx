import Link from "next/link";

interface LandingPageLayoutProps {
  children: React.ReactNode;
}

export default function LandingPageLayout({
  children,
}: LandingPageLayoutProps) {
  return (
    <div className="bg-orange-50 pt-16 dark:bg-slate-950">
      <div className="fixed left-0 top-0 flex h-20 w-full items-center justify-center gap-24 bg-orange-100 font-semibold shadow-md dark:bg-slate-800 dark:text-slate-100">
        <Link href="/" className="transition hover:text-orange-500">
          MANA
        </Link>
        <Link href="/company" className="transition hover:text-orange-500">
          Company
        </Link>
        <Link href="/products" className="transition hover:text-orange-500">
          Products
        </Link>
        <Link href="/pricing" className="transition hover:text-orange-500">
          Pricing
        </Link>
        <Link href="/fag" className="transition hover:text-orange-500">
          FAQ
        </Link>
        <Link href="/sign-in" className="transition hover:text-orange-500">
          Sing-in
        </Link>
        <Link href="/contact-us" className="transition hover:text-orange-500">
          Contact Us
        </Link>
      </div>
      {children}
    </div>
  );
}
