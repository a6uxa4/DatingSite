"use client";

import { IGetNews } from "@/common/news.interface";
import { getTitleKey } from "@/lib/helpers";
import { Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { usePathname } from "next/navigation";

interface IProps {
  data: IGetNews;
}

export const NewsCard = ({ data }: IProps) => {
  const pathName = usePathname();

  return (
    <Card
      isFooterBlurred
      className="w-[300px] h-[200px] group relative overflow-hidden"
    >
      <CardHeader className="absolute bg-black/70 top-0 z-10 cursor-pointer group-hover:hidden">
        <p className="text-sm text-white truncate transition-all duration-500 ease-in-out max-h-6 group-hover:max-h-32 group-hover:whitespace-normal overflow-hidden">
          {data[getTitleKey(pathName, data, "title")]}
        </p>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src={data.image}
      />
      <CardFooter className="group-hover:h-full group-hover:bg-black/70 transition-all duration-500 ease-in-out absolute bottom-0 z-10 w-full bg-black/40 border-t-1 border-white group-hover:border-none">
        <p className="text-tiny text-white/60 truncate group-hover:whitespace-normal group-hover:max-h-full transition-all duration-500 ease-in-out">
          {data[getTitleKey(pathName, data, "describtion")]}
        </p>
      </CardFooter>
    </Card>
  );
};
