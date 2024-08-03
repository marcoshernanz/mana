import Link from "next/link";

interface LandingPageLayoutProps {
  children: React.ReactNode;
}

export default function LandingPageLayout({
  children,
}: LandingPageLayoutProps) {
  return (
    <div className="bg-orange-50 pt-16">
      <div className="fixed left-0 top-0 h-16 w-full bg-red-600">
        <Link href="/">Home</Link>
        <Link href="/pricing">Pricing</Link>
        <div>Features</div>
      </div>
      {children}
    </div>
  );
}
