"use client";
import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center max-w-[1240px] mx-auto px-3 sm:px-4 lg:px-6 py-20 md:py-36">
      {/* Left Segment: Large Text */}
      <div className="flex-1 mb-10 md:mb-0">
        <h1 className="text-sm md:text-md lg:text-lg font-bold text-gray-800/60 mb-4 md:mb-6">
          Welcome to the Agency
        </h1>
        <p className="text-xl md:text-2xl lg:text-4xl font-extrabold text-gray-800/40 mb-6 uppercase">
          Specialization in building high-quality, responsive websites and applications for business processes as well as online presence. Let&apos;s create something amazing together!
        </p>
        <button className="bg-green-800 active:bg-gray-900 text-white px-4 md:px-6 py-2 md:py-3 rounded hover:bg-green-700 transition">
          Make inquiry
        </button>
      </div>

      {/* Right Segment: Image with Icons */}
      <div className="relative flex-1 flex justify-end">
        <div className="border border-gray-200 rounded-md relative">
          <Image
            src="/hero.jpg"
            alt="Hero Image"
            width={500}
            height={500}
            className="object-cover rounded-xs shadow-[-5px_5px_5px_0px_#000000]"
          />

          {/* Icons */}
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <Link
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-2 rounded-full hover:bg-blue-500/60 hover:text-white transition duration-300"
            >
              <FaXTwitter size={20} />
            </Link>
            
            <Link
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-2 rounded-full hover:bg-indigo-500/60 hover:text-white transition duration-300"
            >
              <FaDiscord size={30} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

