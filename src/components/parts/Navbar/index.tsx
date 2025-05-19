import Logo from "@/assets/images/summerville2.png";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Menu = [
  { name: "Home", link: "/" },
  { name: "Service", link: "/service" },
  { name: "Work", link: "/work" },
  { name: "Contact", link: "/contact" },
  { name: "About", link: "/about" },
  { name: "Careers", link: "/careers" },
];

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full px-2 lg:px-[60px] lg:py-[20px]">
      <div className="flex flex-row items-baseline justify-between">
        <Link href="/">
          <Image src={Logo} alt="Logo" className="w-[150px]" />
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
        </div>
        <div className="hidden lg:flex flex-row gap-[20px] items-center">
          <Button variant="primary">Contact Us</Button>
        </div>
      </div>
    </nav>
  );
};
