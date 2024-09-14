import SideBar from "./SideBar";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="pl-44">
      <SideBar />
      {children}
    </div>
  );
}
