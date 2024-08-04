"use client";

import { Heading } from "@/components/Heading";
import { NewsCard } from "@/components/NewsCard";
import { useGetNewsQuery } from "@/services/news.service";

export const NewsPage = () => {
  const { data = [] } = useGetNewsQuery();

  return (
    <div className="w-full max-w-[1440px] mb-[150px]">
      <Heading title="Новости" />
      <div className="flex flex-wrap items-center justify-center gap-5 mt-14">
        {data.map((item) => (
          <NewsCard key={item.newsId} data={item} />
        ))}
      </div>
    </div>
  );
};
