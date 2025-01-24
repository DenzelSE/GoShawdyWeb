import { AboutSection } from "@/components/about";
import { NavBar } from "@/components/navBar";
import Image from "next/image";

export default function Home() {
  return (
    <><NavBar /><main>
      <AboutSection />
    </main></>
  );
}
