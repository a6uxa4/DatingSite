"use client";

import { Image } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import NextImage from "next/image";

export const AboutPage = () => {
  const t = useTranslations("ABOUT");

  return (
    <div className="w-full bg-[#fcfbfb] my-[150px] flex items-center justify-center">
      <div className="w-full max-w-[1440px] flex sm:flex-col">
        <div className="w-[50%] flex flex-col px-20 items-start justify-center gap-10 sm:w-full sm:px-10 sm:gap-5">
          <h1 className="text-[40px] font-barlow text-[#6e6e6e] sm:text-[22px]">
            {t("TITLE")}
          </h1>
          <span className="text-[18px] text-[#0B4A21] sm:text-[12px]">
            Двухэтажное помещение клиники площадью 1000 квадратных метров
            проектировалось и строилось по современным стандартам для
            пластической хирургии.
          </span>
          <span className="text-[18px] text-[#0B4A21] sm:text-[12px]">
            Стационар клиники Shine-Clinic включает 2 высокотехнологичные
            операционные и 10 комфортабельных одно- и двухместных палат.
          </span>
        </div>
        <div className="w-[50%] flex flex-wrap gap-3 p-5 items-center justify-center sm:w-full">
          <Image
            width={220}
            height={220}
            alt="About Image"
            className="rounded-md sm:w-[120px]"
            src="/ClinicPhoto1.png"
            as={NextImage}
          />
          <Image
            width={220}
            height={220}
            alt="About Image"
            className="rounded-md sm:w-[120px]"
            src="/ClinicPhoto2.png"
            as={NextImage}
          />
          <Image
            width={220}
            height={220}
            alt="About Image"
            className="rounded-md sm:w-[120px]"
            src="/ClinicPhoto3.png"
            as={NextImage}
          />
          <Image
            width={220}
            height={220}
            alt="About Image"
            className="rounded-md sm:w-[120px]"
            src="/ClinicPhoto4.png"
            as={NextImage}
          />
        </div>
      </div>
    </div>
  );
};
