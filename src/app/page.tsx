import Hero from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Servics";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Services/>
      <Projects/>
    </main>
  );
}
