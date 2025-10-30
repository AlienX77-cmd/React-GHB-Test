import type { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <Sidebar />

      <div className="flex w-full">
        {/* Main content uses responsive left margin so it doesn't sit under the sidebar on md+ */}
        <main className="flex-1 md:ml-64">{children}</main>
      </div>

      {/* Footer placed before Sidebar in DOM so Sidebar (fixed) will be behind the Footer.
          Wrap footer to ensure it has higher stacking context. */}
      <div className="relative z-50">
        <Footer />
      </div>
    </div>
  );
}
