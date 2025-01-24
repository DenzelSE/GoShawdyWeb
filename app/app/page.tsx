import { AboutSection } from "@/components/about";
import { HeroSection } from "@/components/heroSection";
import { NavBar } from "@/components/navBar";
import Image from "next/image";

export default function Home() {
  return (
    <><NavBar /><main>
      <HeroSection/>
      <AboutSection />
    </main></>
  );
}
