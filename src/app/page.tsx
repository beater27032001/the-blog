import MainCard from "@/components/card/MainCard";
import Header from "@/components/Header";
import SectionHero from "@/components/SectionHero";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center ">
      <div className="flex flex-col bg-purple-bg mobile:px-32 mobile:pt-16 gap-16 cel:px-8 cel:pt-12">
        <Header />
        <SectionHero />
      </div>
      <div className="bg-lime w-full h-1"></div>
      <MainCard />
    </div>
  );
}
