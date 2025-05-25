import Image, { StaticImageData } from "next/image";
import React from "react";
import { Button } from "../ui/button";

interface CardServiceProps {
  icon?: React.ReactNode;
  image?: string | StaticImageData;
  title: string;
  description: string;
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
}) => {
  return (
    <div className="relative p-4 bg-[#262626] rounded-md w-full h-[430px] overflow-hidden">
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
      </div>
      <Button
        variant="primary"
        className="absolute bottom-4 left-4 right-4 w-[calc(100%-2rem)]"
      >
        See Detail
      </Button>
    </div>
  );
};
