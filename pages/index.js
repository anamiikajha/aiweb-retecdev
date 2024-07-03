import { Inter } from "next/font/google";
import HeroLayoutBox from "@/components/HeroLayoutBox";
import HorizontalLine from "@/components/HorizontalLine";
import MobileHeroLayout from "@/components/MobileHeroLayout";
import AnimatedButton from "@/components/AnimatedButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <section className="scroller-section hidden lg:block">
    <div className="hero">
      <div className="hero-header">
        <h2
          className="headline"
        >
          Powerful AI agent building platform
        </h2>
        <h2 className="headline-subtitle">
          Build and test complex workflows in a matter of minutes, <br />
          then deploy them via phone call, web call, or anywhere else.{" "}
        </h2>
        <HorizontalLine />
      </div>
      <HeroLayoutBox />
    </div>
    </section>
    <div className="flex justify-center lg:hidden">
    <MobileHeroLayout />
    </div>
    </>
  );
}
