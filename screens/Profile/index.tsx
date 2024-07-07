"use client";

import { useRef, useEffect } from "react";
import { Avatar } from "@nextui-org/react";

export const Profile = () => {
  const avatarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newSize = Math.max(40, 160 - scrollY * 0.5);
      if (avatarRef.current) {
        avatarRef.current.style.width = `${newSize}px`;
        avatarRef.current.style.height = `${newSize}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center gap-5 mt-[100px]">
      <div ref={avatarRef} className="sticky top-5 w-40 h-40">
        <Avatar
          className="w-full h-full min-w-14 min-h-14"
          src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
        />
      </div>
      <h1 className="text-3xl font-mono">a6uxa4</h1>
      <div className="w-full border-b flex gap-10 px-5 pb-5">
        <div className="w-[50%] bg-[#242425] rounded-md px-5 py-2 font-semibold">
          Просмотры: <span className="font-normal">100</span>
        </div>
        <div className="w-[50%] bg-[#242425] rounded-md px-5 py-2 font-semibold">
          Друзья: <span className="font-normal">12</span>
        </div>
      </div>
      <div className="w-full min-h-[1200px] bg-white/40 rounded-t-3xl">
        scrolled
      </div>
    </div>
  );
};
