import { useTranslations } from "next-intl";
import Image from "next/image";

export const Footer = () => {
  const t = useTranslations("FOOTER");

  return (
    <footer className="bg-purple">
      <div className="w-full max-w-[1440px] mx-auto p-4 sm:p-0 sm:pb-4">
        <div className="flex items-end justify-center sm:flex-col sm:items-center">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={170}
            height={0}
            priority
            className="sm:hidden"
          />
          <div className="w-full flex justify-around sm:flex-col sm:gap-4 sm:my-5">
            <div className="w-full flex items-start justify-around">
              <div className="flex flex-col gap-1 items-center">
                <span className="font-barlow text-[16px] text-white sm:text-[14px]">
                  {t("NAVIGATION")}
                </span>
                <span className="font-barlow text-[14px] text-[#cccccc] cursor-pointer hover:text-white duration-200 transition-all sm:text-[12px]">
                  {t("MAIN")}
                </span>
                <span className="font-barlow text-[14px] text-[#cccccc] cursor-pointer hover:text-white duration-200 transition-all sm:text-[12px]">
                  {t("ABOUT")}
                </span>
                <span className="font-barlow text-[14px] text-[#cccccc] cursor-pointer hover:text-white duration-200 transition-all sm:text-[12px]">
                  {t("PERSON")}
                </span>
                <span className="font-barlow text-[14px] text-[#cccccc] cursor-pointer hover:text-white duration-200 transition-all sm:text-[12px]">
                  {t("SERVICE")}
                </span>
                <span className="font-barlow text-[14px] text-[#cccccc] cursor-pointer hover:text-white duration-200 transition-all sm:text-[12px]">
                  {t("OUR_WORKS")}
                </span>
                <span className="font-barlow text-[14px] text-[#cccccc] cursor-pointer hover:text-white duration-200 transition-all sm:text-[12px]">
                  {t("NEWS")}
                </span>
              </div>
              <div className="flex flex-col gap-1 items-center">
                <span className="font-barlow text-[16px] text-white sm:text-[14px]">
                  {t("CONTACT")}
                </span>
                <span className="font-barlow text-[14px] text-[#cccccc] cursor-pointer hover:text-white duration-200 transition-all sm:text-[12px]">
                  +996 502 950 200
                </span>
                <span className="font-barlow text-[14px] text-[#cccccc] cursor-pointer hover:text-white duration-200 transition-all sm:text-[12px]">
                  +996 999 886 644
                </span>
                <span className="font-barlow text-[14px] text-[#cccccc] cursor-pointer hover:text-white duration-200 transition-all sm:text-[12px]">
                  +996 709 627 494
                </span>
              </div>
            </div>
            <div className="w-full flex items-start justify-around">
              <div className="flex flex-col gap-1 items-center">
                <span className="font-barlow text-[16px] text-white sm:text-[14px]">
                  {t("SCHEDULE")}
                </span>
                <span className="font-barlow text-[14px] text-[#cccccc] cursor-pointer hover:text-white duration-200 transition-all sm:text-[12px]">
                  пн - пт: 09.00 - 19.00
                </span>
                <span className="font-barlow text-[14px] text-[#cccccc] cursor-pointer hover:text-white duration-200 transition-all sm:text-[12px]">
                  сб: 09.00 - 14.00
                </span>
                <span className="font-barlow text-[14px] text-[#cccccc] cursor-pointer hover:text-white duration-200 transition-all sm:text-[12px]">
                  вс: выходной
                </span>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <span className="font-barlow text-[16px] text-white sm:text-[14px]">
                  {t("SOCIAL")}
                </span>
                <div className="flex items-center justify-center gap-4">
                  <div className="cursor-pointer">
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
                      className="sm:w-[18px] sm:h-[18px]"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </div>
                  <div className="cursor-pointer">
                    <svg
                      stroke="none"
                      fill="white"
                      strokeWidth="1.5"
                      viewBox="0 0 448 512"
                      height="24px"
                      width="24px"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sm:w-[18px] sm:h-[18px]"
                    >
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
                    </svg>
                  </div>
                  <div className="cursor-pointer">
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
                      className="sm:w-[18px] sm:h-[18px]"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:my-2" />
        <span className="block text-sm text-white sm:text-center sm:text-xs">
          © 2024{" "}
          <a href="https://a6uxa4.cloud" className="hover:underline">
            a6uxa4
          </a>{" "}
          All rights reserved.
        </span>
      </div>
    </footer>
  );
};
