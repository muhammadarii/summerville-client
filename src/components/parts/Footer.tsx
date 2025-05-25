import Image from "next/image";
import Logo from "@/assets/images/summerville2.png";
import {
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaRegEnvelope,
  FaPhone,
  FaLocationArrow,
} from "react-icons/fa";
import { MenuTitle } from "@/components/parts/Navbar/MenuTitle";

export const Footer = () => {
  return (
    <div className="mt-28 items-center justify-center flex flex-col w-full mb-5 px-4 md:px-0">
      <div className="grid grid-cols-2 w-full md:grid-cols-3">
        <Image src={Logo} alt="Logo" width={120} />
        <MenuTitle className="hidden lg:flex items-center gap-10" />
        <div className="flex flex-col items-end md:flex-row md:items-center justify-end gap-4">
          <p className="font-light text-[14px]">Stay Connected</p>
          <div className="flex flex-row items-center gap-2">
            <FaInstagram className="text-[#9EFF00] text-3xl" />
            <FaLinkedin className="text-[#9EFF00] text-3xl" />
            <FaTiktok className="text-[#9EFF00] text-3xl" />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full mt-10 border-t-[0.5px]">
        <div className="flex flex-col md:flex-row md:items-center gap-4 mt-5">
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
        <div className="mt-5 w-full md:w-fit">
          <p className="text-[12px] font-light text-center">
            © 2025 summerville. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
