import { Outlet, useLocation } from "react-router-dom";

import { Header, Navigator } from "@/components";

export default function AppLayout() {
  const { pathname } = useLocation();

  const renderHeader = () => {
    if (pathname.includes("home")) return <Header.Main />;
    if (pathname === "/") return null;
    return <Header.Back />;
  };

  return (
    <>
      {renderHeader()}
      <main className="min-h-[calc(100vh-70px)]">
        <Outlet />
      </main>
      {pathname !== "/" && (
        <Navigator position={pathname.includes("home") ? "fixed" : "static"} />
      )}
    </>
  );
}
