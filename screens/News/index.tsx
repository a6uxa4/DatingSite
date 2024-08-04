"use client";

import { Heading } from "@/components/Heading";
import { NewsCard } from "@/components/NewsCard";
import { useGetNewsQuery } from "@/services/news.service";

export const NewsPage = () => {
  const { data = [] } = useGetNewsQuery();

  return (
    <div className="w-full max-w-[1440px] my-10">
      <Heading title="Новости" />
      <div className="flex flex-wrap items-center justify-center gap-5">
        {data.map((item) => (
          <NewsCard key={item.newsId} data={item} />
        ))}
      </div>
    </div>
  );
};
