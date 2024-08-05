"use client";

import { Heading } from "@/components/Heading";
import { PersonCard } from "@/components/PersonCard";
import { useGetPersonQuery } from "@/services/person.service";
import { Swiper, SwiperSlide } from "swiper/react";

export const PersonPage = () => {
  const { data = [] } = useGetPersonQuery();

  return (
    <div className="w-full max-w-[1440px] mb-10">
      <Heading title="Наши доктора" />
      <div className="flex flex-wrap items-center justify-center gap-10 sm:hidden mt-14">
        {data.map((item) => (
          <PersonCard key={item.personId} data={item} />
        ))}
      </div>
      <div className="hidden sm:block">
        <Swiper slidesPerView={1} className="h-[350px]">
          {data.map((item) => (
            <SwiperSlide key={item.personId}>
              <div className="w-full h-full flex items-center justify-center">
                <PersonCard key={item.personId} data={item} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
