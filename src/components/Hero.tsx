"use client";
import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import main1 from '/public/img/main1.jpg';

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 space-y-12 md:space-x-8 relative">
  {/* Left Segment */}
  <div className="flex-1 text-center md:text-left">
    <h1 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-800 mb-6">
      Specializing in high-quality, responsive websites and applications.
    </h1>
    <p className="text-sm md:text-lg lg:text-xl text-gray-600 mb-4">
      Let’s create something amazing together!
    </p>
    <button className="bg-transparent text-gray-400 border border-black/20 active:text-white px-4 py-2 rounded-full active:bg-emerald-600/30">
      Create a presence that works today!
    </button>

    {/* Social Media Icons */}
   <div className="absolute py-4 hidden md:flex space-x-4">
    <Link href="https://x.com" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full hover:bg-blue-500">
      <FaXTwitter size={30} />
    </Link>
    <Link href="https://discord.com" target="_blank" rel="noopener noreferrer" className="bg-white p-2 rounded-full hover:bg-indigo-500">
      <FaDiscord size={30} />
    </Link>
  </div>
  </div>

  {/* Right Segment */}
  <div className="flex-1 flex justify-center items-center mt-6 md:mt-0">
    <div className="relative overflow-hidden">
      <Image
        src={"https://i.ibb.co/vvmjXNw/main1.jpg"}
        width={600}
        height={500}
        alt="Hero Image"
        priority={true} quality={100}
        placeholder="blur"
        blurDataURL="https://i.ibb.co/vvmjXNw/main1.jpg"
        className="object-cover"
      />
    </div>
   
  </div>

   
</section>

  );
}
