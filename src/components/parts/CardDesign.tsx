import React from "react";

interface CardServiceProps {
  icon: React.ReactNode;
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
