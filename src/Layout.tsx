import React, { useEffect, useRef, PropsWithChildren } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const { pathname } = useLocation();
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [pathname]);

  return (
    <>
      <div ref={topRef} />
      <Navbar />
      <main>
        {children}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
