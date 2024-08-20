import AboutComp from "@/components/AboutComp";
import Image from "next/image";

export  default  async function About() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
    
  return (
    <div>
      <AboutComp/>
    </div>
  )
}