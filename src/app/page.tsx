import Hero from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Servics";
import TextPage from "@/components/Text";
import Image from "next/image";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
    
  return (
    <main>
      <Hero/>
      <Services/>
      <TextPage/>
      <Projects/>

    </main>
  );
}
