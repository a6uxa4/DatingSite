"use client";

import { Image } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import NextImage from "next/image";

export const MainPage = () => {
  const t = useTranslations("MAIN");

  return (
    <div className="w-full min-h-[720px] max-h-[720px] flex items-start justify-center bg-[#fcfbfb] sm:h-[450px]">
      <div className="max-w-[1440px] w-full h-[720px] flex items-center justify-center relative sm:items-start sm:h-[450px]">
        <div className="absolute z-20 left-14 max-w-[360px] top-40 sm:hidden">
          <h1 className="text-[60px] font-fenix text-[#7c02c4e6]">SHINE</h1>
          <h1 className="text-[24px] font-extralight text-[#676767]">
            {t("DESC")}
          </h1>
          <div className="flex gap-10 mt-[30px]">
            <h1 className="text-[60px] text-[#7c02c4e6]">
              10{" "}
              <span className="text-[30px] text-[#676767] font-light">
                {t("YEAR")}
              </span>
            </h1>
            <h1 className="text-[60px] text-[#7c02c4e6]">
              20{" "}
              <span className="text-[30px] text-[#676767] font-light">
                {t("PERIOD")}
              </span>
            </h1>
          </div>
          <span className="text-[#676767] text-[16px] font-extralight">
            {t("DESC_SUB")}
          </span>
          <br />
          <button className="px-5 py-2 border uppercase rounded-md border-purple font-barlow text-[#676767] mt-[50px] hover:scale-105 hover:bg-purple hover:text-white duration-200">
            {t("BUTTON")}
          </button>
        </div>
        <div className="absolute top-[-10px] hidden sm:flex flex-col items-center justify-start gap-2 z-20 bg-black/60 w-full h-[460px] px-5 text-center py-10">
          <h1 className="text-[30px] font-fenix text-[white]">SHINE</h1>
          <h1 className="text-[14px] font-barlow text-[white] tracking-widest">
            {t("DESC")}
          </h1>
          <h1 className="text-[16px] text-[white] tracking-widest mt-10">
            {t("MOBILE_DESC")}
          </h1>
        </div>
        <Image
          as={NextImage}
          src="/MainImage.png"
          alt="Main-Image"
          className="max-h-[720px] sm:max-h-[450px] sm:max-w-[300px]"
          width={470}
          height={700}
        />
        <div className="absolute bottom-14 hidden sm:flex flex-col items-center justify-center gap-2 z-20">
          <button className="cursor-pointer bg-purple px-3 py-2 rounded-md text-white tracking-wider shadow-xl animate-bounce hover:animate-none">
            {t("BUTTON")}
          </button>
        </div>
        <div className="absolute z-20 right-14 w-[350px] h-[250px] top-[280px] flex flex-col items-center justify-between sm:hidden">
          <h1 className="text-[40px] font-fenix text-[#7c02c4e6]">
            BEAUTY CLINIC
          </h1>
          <h1 className="text-center text-[#676767]">{t("MOBILE_DESC")}</h1>
          <div className="flex gap-5">
            <div className="w-[40px] h-[40px] bg-purple rounded-md flex items-center justify-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </div>
            <div className="w-[40px] h-[40px] bg-purple rounded-md flex items-center justify-center cursor-pointer">
              <svg
                stroke="none"
                fill="white"
                strokeWidth="1.5"
                viewBox="0 0 448 512"
                height="24px"
                width="24px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
              </svg>
            </div>
            <div className="w-[40px] h-[40px] bg-purple rounded-md flex items-center justify-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div className="w-[40px] h-[40px] bg-purple rounded-md flex items-center justify-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
