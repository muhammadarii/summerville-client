"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/parts/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const hiddenPaths = [
  "/login",
  "/register",
  "/dashboard",
  "/dashboard/services",
  "/dashboard/works",
  "/dashboard/careers",
];

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const hideNavbar = hiddenPaths.includes(pathname);

  return (
    <>
      <QueryClientProvider client={new QueryClient()}>
        {!hideNavbar && <Navbar />}
        <main className={!hideNavbar ? "mt-[90px] lg:px-[60px] px-2" : ""}>
          {children}
        </main>
      </QueryClientProvider>
    </>
  );
};
