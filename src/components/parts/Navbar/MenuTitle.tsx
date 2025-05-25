"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Menu = [
  { name: "Home", link: "/" },
  { name: "Service", link: "/service" },
  { name: "Work", link: "/work" },
  { name: "Contact", link: "/contact" },
  { name: "About", link: "/about" },
  { name: "Careers", link: "/careers" },
];

interface MenuTitleProps {
  className?: string;
}

export const MenuTitle: React.FC<MenuTitleProps> = ({ className }) => {
  const [currentPath, setCurrentPath] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  const isActive = (link: string) => currentPath === link;

  return (
    <div className={`${className}`}>
      {Menu.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          className={`text-sm font-light transition ${
            isActive(item.link)
              ? "text-[#9EFF00] font-medium border-b-2 border-[#9EFF00]"
              : "text-white hover:text-[#9EFF00]"
          }`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};
