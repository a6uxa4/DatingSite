import { FeedbacksPage } from "@/screens/Feedbacks";
import { MainPage } from "@/screens/Main";
import { NewsPage } from "@/screens/News";

export default function Home() {
  return (
    <section className="flex w-svw min-h-screen flex-col items-center justify-between pt-[67px]">
      <MainPage />
      <FeedbacksPage />
      <NewsPage />
    </section>
  );
}
