import Logo from "@/assets/images/LogoWhite.png";
import { HiBars3 } from "react-icons/hi2";
import Link from "next/link";
import Image from "next/image";

const Menu = [
  { name: "CONTACT", link: "/contact" },
  { name: "ABOUT", link: "/about" },
  { name: "SERVICE", link: "/service" },
  { name: "CLIENT", link: "/client" },
];

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full px-2 lg:px-[60px] lg:py-[20px]">
      <div className="flex flex-row items-center justify-between">
        <Link href="/">
          <Image src={Logo} alt="Logo" className="w-[150px] h-[50px]" />
        </Link>
        <div className="flex flex-row gap-[40px] items-center">
          {Menu.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="font-extralight text-[14px]"
            >
              {item.name}
            </Link>
          ))}
          <HiBars3 className="text-white w-[30px] h-[30px] cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};
