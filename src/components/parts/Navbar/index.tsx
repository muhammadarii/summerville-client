"use client";

import { useEffect, useState } from "react";
import Logo from "@/assets/images/summerville2.png";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu as MenuIcon, X } from "lucide-react";
import { MenuTitle } from "./MenuTitle";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full px-4 py-3 lg:px-[60px] lg:py-[20px] transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-xs shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image src={Logo} alt="Logo" className="w-[140px]" />
        </Link>
        <MenuTitle className="hidden lg:flex items-center gap-10" />
        <Link href="/contact" className="hidden lg:flex">
          <Button variant="primary">Contact Us</Button>
        </Link>

        {/* Mobile Hamburger */}
        <div className="lg:hidden text-[#9EFF00]">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <>
          <div
            onClick={() => setIsOpen(false)}
            className="absolute top-0 right-0 w-full h-screen bg-black opacity-50 -z-10"
          />
          <div className="mt-4 flex flex-col gap-4 lg:hidden bg-black p-4 rounded-lg shadow-lg items-center">
            <MenuTitle className="flex flex-col items-center gap-3" />
            <Link href="/contact">
              <Button variant="primary" className="w-fit mt-2">
                Contact Us
              </Button>
            </Link>
          </div>
        </>
      )}
    </nav>
  );
};
