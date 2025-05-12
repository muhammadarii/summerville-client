"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/parts/Navbar";

const hiddenPaths = ["/login", "/register"];

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const hideNavbar = hiddenPaths.includes(pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}
      <main className={!hideNavbar ? "mt-[90px]" : ""}>{children}</main>
    </>
  );
};
