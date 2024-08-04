import React from "react";

interface IProps {
  title: string;
}

export const Heading = ({ title }: IProps) => {
  return (
    <div className="relative py-5 flex items-center">
      <div className="flex-grow border-t border-gray-300"></div>
      <span className="flex-shrink mx-4 text-purple text-[24px] uppercase sm:text-[18px]">
        {title}
      </span>
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  );
};
