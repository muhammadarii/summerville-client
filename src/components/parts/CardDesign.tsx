import Image, { StaticImageData } from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { LuArrowUpRight } from "react-icons/lu";
import Link from "next/link";

interface CardServiceProps {
  icon?: React.ReactNode;
  image?: string | StaticImageData;
  tag?: string;
  title?: string;
  description?: string;
  url?: string;
  id?: string;
  createdAt?: string;
}

export const CardService: React.FC<CardServiceProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="relative w-full h-[380px] rounded-md border border-[#4e4e4e]">
      <div className="w-[88px] h-[88px] bg-gradient-to-tr from-[#242424] to-[#4e4e4e] rounded-md flex items-center justify-center absolute top-[44px] left-[44px]">
        {icon}
      </div>
      <div className="absolute top-[150px] left-[44px] ">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-sm text-gray-300 mt-2 pr-10">{description}</p>
      </div>
    </div>
  );
};

export const CardExperience: React.FC<CardServiceProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="relative w-full h-[350px] md:h-[300px] rounded-md border border-[#4e4e4e]">
      <div className="absolute top-[44px] left-[44px] flex flex-row items-center justify-center gap-4">
        <div className="w-[88px] h-[88px] bg-gradient-to-tr from-[#242424] to-[#4e4e4e] rounded-md flex items-center justify-center">
          {icon}
        </div>
        <h1 className="text-2xl font-semibold">{title}</h1>
      </div>
      <p className="text-gray-300 mt-2 pr-10 absolute top-[150px] left-[44px]">
        {description}
      </p>
    </div>
  );
};
export const CardJob: React.FC<CardServiceProps> = ({
  image,
  title,
  description,
  id,
  createdAt,
}) => {
  return (
    <div className="relative p-4 shadow-2xl rounded-md w-full h-[430px] overflow-hidden hover:scale-105 transition-all duration-300 ease-in-out">
      {image && (
        <Image
          src={image}
          alt="Image"
          width={300}
          height={150}
          className="w-full h-[150px] object-cover bg-white rounded-md"
        />
      )}
      <div className="mt-4 flex flex-col gap-2">
        <h1 className="text-white text-lg font-semibold">{title}</h1>
        <p className="text-[10px] text-gray-300 font-light">{description}</p>
        <p className="text-[10px] text-black font-light bg-white/50 backdrop-blur-md py-1 px-2 w-fit rounded-md">
          Publish on : {createdAt?.slice(0, 10)}
        </p>
      </div>
      <Link href={`/careers/detail/${id}`}>
        <Button
          variant="primary"
          className="absolute bottom-4 left-4 right-4 w-[calc(100%-2rem)] cursor-pointer"
        >
          See Detail
        </Button>
      </Link>
    </div>
  );
};

export const CardProject: React.FC<CardServiceProps> = ({
  image,
  tag,
  title,
  description,
  url,
}) => {
  return (
    <div className="p-4 shadow-2xl rounded-md h-[600px] hover:scale-105 transition-all duration-300 ease-in-out">
      <h1 className="mb-4 text-[#98989A]">{tag}</h1>
      <Image
        src={image || "/images/placeholder.png"}
        alt="Project Image"
        width={300}
        height={200}
        className="w-full h-[300px] object-cover rounded-md"
      />
      <p className="mt-4 text-[#98989A]">{title}</p>
      <div className=" flex flex-row items-center justify-between">
        <div className="bg-[#262626] text-[15px] p-2 items-center justify-center rounded-md">
          {url}
        </div>
        <div className="bg-[#262626] p-2 items-center justify-center rounded-md mb-10 ">
          <LuArrowUpRight className="text-xl text-[#9EFF00]" />
        </div>
      </div>
      <p className="text-[12px] text-[#98989A] font-light">{description}</p>
    </div>
  );
};
