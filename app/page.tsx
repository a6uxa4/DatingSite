import { Header } from "@/screens/Header";
import { Profile } from "@/screens/Profile";

export default function Home() {
  return (
    <section className="w-full h-screen  flex flex-col relative">
      <Header />
      <Profile />
    </section>
  );
}
