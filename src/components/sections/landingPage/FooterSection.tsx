"use client";
import Image from "next/image";
import Logo from "@/assets/images/summerville2.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaRegEnvelope,
  FaPhone,
  FaLocationArrow,
} from "react-icons/fa";

const Menu = [
  { name: "Home", link: "/" },
  { name: "Service", link: "/service" },
  { name: "Work", link: "/work" },
  { name: "Contact", link: "/contact" },
  { name: "About", link: "/about" },
  { name: "Careers", link: "/careers" },
];

export const FooterSection = () => {
  const [currentPath, setCurrentPath] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  const isActive = (link: string) => currentPath === link;
  return (
    <div className="mt-10 items-center justify-center flex flex-col w-full mb-5">
      <div className="grid grid-cols-3">
        <Image src={Logo} alt="Logo" width={120} />
        <div className="hidden lg:flex items-center gap-10">
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
        <div className="flex flex-row items-center justify-end gap-4">
          <p className="font-light text-[14px]">Stay Connected</p>
          <div className="flex flex-row items-center gap-2">
            <FaInstagram className="text-[#9EFF00] text-3xl" />
            <FaLinkedin className="text-[#9EFF00] text-3xl" />
            <FaTiktok className="text-[#9EFF00] text-3xl" />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between w-full mt-10 border-t-[0.5px]">
        <div className="flex flex-row items-center gap-4 mt-5">
          <div className="flex flex-row items-center gap-2">
            <FaRegEnvelope className="text-[#9EFF00] text-[18px]" />
            <p className="text-[12px] font-light">work@summerville.com</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <FaPhone className="text-[#9EFF00] text-[18px]" />
            <p className="text-[12px] font-light">+62 812 7587 9191</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <FaLocationArrow className="text-[#9EFF00] text-[18px]" />
            <p className="text-[12px] font-light">Tangerang, Indonesia</p>
          </div>
        </div>
        <div className="mt-5">
          <p className="text-[12px] font-light">
            © 2025 summerville. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
