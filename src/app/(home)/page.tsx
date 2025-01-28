import Hero from "@/components/home/Hero";
import HomeHeader from "@/components/home/HomeHeader";
import Section1 from "@/components/home/Section1";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="container flex mx-auto">
        <HomeHeader />
      </div>
      <div className="container min-h-[100vh] flex-1 mx-auto bg-neutral-50 border ">
        <div className="flex flex-col items-center justify-center pt-16">
          <Hero />
          <Section1 />
        </div>
      </div>
    </main>
  );
}
