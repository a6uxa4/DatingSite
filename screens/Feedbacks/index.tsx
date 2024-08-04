"use client";

import { FeedbackCard } from "@/components/FeedbacksCard";
import { Heading } from "@/components/Heading";
import { useGetFeedbackQuery } from "@/services/feedback.service";
import { Swiper, SwiperSlide } from "swiper/react";

export const FeedbacksPage = () => {
  const { data = [] } = useGetFeedbackQuery();

  return (
    <div className="w-full max-w-[1440px] mb-[100px]">
      <Heading title="Отзывы" />
      <div className="flex flex-wrap items-center justify-center gap-5 sm:hidden mt-14">
        {data.map((item) => (
          <FeedbackCard key={item.feedbackId} data={item} />
        ))}
      </div>
      <div className="hidden sm:block">
        <Swiper slidesPerView={1} className="h-[250px]">
          {data.map((item) => (
            <SwiperSlide key={item.feedbackId}>
              <div className="w-full h-full flex items-center justify-center">
                <FeedbackCard key={item.feedbackId} data={item} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
