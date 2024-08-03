"use client";

import Image from "next/image";
import { Select, SelectItem, Avatar, Divider } from "@nextui-org/react";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { Key, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { useTranslations } from "next-intl";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathName = usePathname();
  const { replace } = useRouter();

  const t = useTranslations("HEADER");

  const languages = [
    { key: "/ru", name: "RU", flag: "https://flagcdn.com/ru.svg" },
    { key: "/kg", name: "KG", flag: "https://flagcdn.com/kg.svg" },
    { key: "/tr", name: "TR", flag: "https://flagcdn.com/tr.svg" },
  ];

  const handleChangeLocale = (key: Key) => {
    replace(key.toString());
  };

  const selectedData =
    languages.find((item) => item.key === pathName) || languages[0];

  return (
    <header className="w-full h-[67px] fixed bg-purple z-50 sm:h-[57px]">
      <div className="max-w-[1440px] h-full m-auto flex items-center justify-around">
        <button className="px-4 py-2 rounded-full border font-barlow text-white text-sm hover:scale-105 hover:bg-white hover:text-purple duration-300 sm:hidden">
          Записаться
        </button>
        <div className="w-fit h-[67px] flex items-center justify-center gap-10 sm:hidden">
          <Link
            href={"/"}
            className="group text-white font-normal font-barlow text-base transition duration-200 cursor-pointer"
          >
            {t("MAIN")}
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] bg-white mt-[1px]"></span>
          </Link>
          <Link
            href={"/"}
            className="group text-white font-normal font-barlow text-base transition duration-200 cursor-pointer"
          >
            {t("ABOUT")}
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] bg-white mt-[1px]"></span>
          </Link>
          <Link
            href={"/"}
            className="group text-white font-normal font-barlow text-base transition duration-200 cursor-pointer"
          >
            {t("PERSON")}
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] bg-white mt-[1px]"></span>
          </Link>
          <Image src="/Logo.png" alt="HELLO" width={170} height={0} priority />
          <Link
            href={"/"}
            className="group text-white font-normal font-barlow text-base transition duration-200 cursor-pointer"
          >
            {t("SERVICE")}
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] bg-white mt-[1px]"></span>
          </Link>
          <Link
            href={"/"}
            className="group text-white font-normal font-barlow text-base transition duration-200 cursor-pointer"
          >
            {t("OUR_WORKS")}
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] bg-white mt-[1px]"></span>
          </Link>
          <Link
            href={"/"}
            className="group text-white font-normal font-barlow text-base transition duration-200 cursor-pointer"
          >
            {t("NEWS")}
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] bg-white mt-[1px]"></span>
          </Link>
        </div>
        <Select
          className="max-w-[105px] sm:hidden"
          size="sm"
          aria-label="select-country"
          selectedKeys={[pathName]}
          renderValue={() => (
            <div className="flex items-center gap-3">
              <Avatar
                alt={selectedData.name}
                className="w-6 h-6"
                src={selectedData.flag}
              />
              <h1>{selectedData.name}</h1>
            </div>
          )}
          onSelectionChange={(keys) => {
            const selectedKey = Array.from(keys)[0];
            if (selectedKey) {
              handleChangeLocale(selectedKey);
            } else {
              handleChangeLocale(languages[0].key);
            }
          }}
        >
          {languages.map((lang) => (
            <SelectItem
              key={lang.key}
              value={lang.key}
              startContent={
                <Avatar alt={lang.name} className="w-6 h-6" src={lang.flag} />
              }
            >
              {lang.name}
            </SelectItem>
          ))}
        </Select>
        <div className="hidden sm:flex w-full h-full items-center justify-between px-2">
          <Image src="/Logo.png" alt="HELLO" width={150} height={0} priority />
          <motion.div
            onClick={() => setIsOpen(!isOpen)}
            className="w-5 h-5 flex flex-col justify-around relative z-40 mr-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div
              className={clsx("w-full h-[2px] rounded", {
                "rotate-45 absolute bg-purple": isOpen,
                "bg-white": !isOpen,
              })}
            />
            <div
              className={clsx("w-full h-[2px] bg-white rounded", {
                hidden: isOpen,
              })}
            />
            <div
              className={clsx("w-full h-[2px] rounded", {
                "rotate-[-45deg] absolute bg-purple": isOpen,
                "bg-white": !isOpen,
              })}
            />
          </motion.div>
        </div>
      </div>
      <div
        className={clsx(
          "w-[100vw] bg-white h-[300px] z-30 absolute top-0 transition-all px-5 py-5 border-b rounded-b-xl shadow",
          {
            "!h-0 top-[-300px]": !isOpen,
          }
        )}
      >
        <div
          className={clsx("transition-all duration-200", {
            "opacity-0": !isOpen,
          })}
        >
          <div className="w-full h-full uppercase flex flex-col gap-2">
            <Link href="">{t("ABOUT")}</Link>
            <Link href="">{t("PERSON")}</Link>
            <Link href="">{t("SERVICE")}</Link>
            <Link href="">{t("NEWS")}</Link>
          </div>
        </div>
        <Divider className="my-4" />
        <div className="w-full h-full flex flex-col items-start justify-start gap-2">
          <Link
            className="flex items-center justify-center gap-3"
            href="tel:+996500337433"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            +996 999 886 644
          </Link>
          <Link
            className="flex items-center justify-center gap-3"
            href="mailto:bishkekmarathon@gmail.com"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            manager@shinebeautyclinic.kg
          </Link>
          <div className="flex items-center justify-center gap-3">
            {t("SOCIAL")}
            <Link
              href="https://www.instagram.com/bishkek.marathon/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </Link>
            <Link href="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
            </Link>
          </div>
          <div
            className={clsx("w-full flex items-center justify-center", {
              hidden: !isOpen,
            })}
          >
            <div className="w-[80%] h-[30px] border-t border-x rounded-t-xl flex items-center justify-around">
              {languages.map((item) => (
                <div
                  key={item.name}
                  onClick={() => {
                    handleChangeLocale(item.key);
                  }}
                  className={clsx("px-4 rounded-md", {
                    "bg-purple text-white": item.key === pathName,
                  })}
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
