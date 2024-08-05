"use client";

import { IGetPerson } from "@/common/person.interface";
import { Image } from "@nextui-org/react";

interface IProps {
  data: IGetPerson;
}

export const PersonCard = ({ data }: IProps) => {
  return (
    <div className="relative overflow-hidden w-60 h-80 rounded-3xl cursor-pointer text-2xl font-bold bg-purple/5 group z-20">
      <Image
        src={data.avatar}
        alt={data.firstName}
        className="group-hover:opacity-0 transition-all duration-200 w-60 h-80 z-10 object-cover bg-center"
      />
      <div className="absolute group-hover:-top-20 z-20 group-hover:-left-16 group-hover:w-[140%] group-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full bg-purple transition-all duration-500"></div>
      <div className="absolute flex flex-col text-xl text-center z-20 items-end justify-end group-hover:right-0 group-hover:rounded-b-none group-hover:bottom-0 group-hover:items-center group-hover:justify-center group-hover:w-full group-hover:h-full -bottom-32 -right-16 w-36 h-44 rounded-full bg-purple transition-all duration-500">
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-200 relative w-full h-full py-5 px-3 flex flex-col gap-2">
          <h1 className="text-white font-barlow font-semibold">
            {data.firstName} {data.lastName}
          </h1>
          <p className="text-[14px] leading-4 font-barlow font-medium text-white">
            {data.phoneNumber}
          </p>
          <p className="text-[14px] leading-4 font-barlow font-medium text-white">
            {data.email}
          </p>
          <p className="text-[14px] leading-4 font-barlow font-medium text-white">
            {data.about}
          </p>
        </div>
      </div>
    </div>
  );
};
