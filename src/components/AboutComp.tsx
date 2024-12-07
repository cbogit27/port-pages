"use client";
import Image from "next/image";
import about1 from '/public/img/about1.jpg';
import about2 from '/public/img/about2.jpg';
import about3 from '/public/img/about3.jpg';
import about4 from '/public/img/about4.jpg';

export default function AboutComp() {
  return (
    <div className="max-w-[1240px] mx-auto px-3 sm:px-4 lg:px-6 py-10 md:py-20">
      {/* Section 1: Company Overview */}
      <section className="mb-20 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          {/* Text */}
          <div className="flex-1 mb-10 md:mb-0 md:pr-6">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800/60 mb-6">
              Our Journey
            </h2>
            <p className="text-md md:text-lg text-gray-800/40">
              Learn about our journey from the beginning, the challenges we&apos;ve faced, and the milestones we&apos;ve achieved. Our mission has always been to provide exceptional web development services tailored to our clients&apos; needs.
            </p>
          </div>
          {/* Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full h-80">
              <Image
                src={about1}
                alt="Journey Image 1"
               width={600}
               height={500}
                quality={50}
                placeholder="blur"
                className="object-cover rounded-xs shadow-[-5px_5px_5px_0px_#000000]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Values */}
      <section className="mb-20 py-8">
        <div className="flex flex-col md:flex-row items-center justify-center lg:justify-between mb-10">
          {/* Images */}
          <div className="flex flex-col lg:flex-row justify-center gap-8 order-last md:order-first m-5 md:mb-0">
            <div className="relative w-full h-60 overflow-hidden">
              <Image
                src={about3}
                alt="Values Image 1"
                width={300}
                height={250}
                quality={50}
                placeholder="blur"
                className="object-cover rounded-xs shadow-[-5px_5px_5px_0px_#000000]"
              />
            </div>
            <div className="relative w-full h-60 overflow-hidden">
              <Image
                src={about4}
                alt="Values Image 2"
                width={300}
                height={250}
                quality={50}
                placeholder="blur"
                className="object-cover rounded-xs shadow-[-5px_5px_5px_0px_#000000]"
              />
            </div>
          </div>
          {/* Text */}
          <div className="flex-1 md:pl-6">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800/60 mb-6">
              Our Core Values
            </h2>
            <p className="text-md md:text-lg text-gray-800/40">
              Our core values guide every project we undertake. From integrity to innovation, our team is committed to delivering quality solutions that make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Meet the Team */}
      <section>
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text */}
          <div className="flex-1 mb-10 md:mb-0 md:pr-6">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800/60 mb-6">
              Meet the Team
            </h2>
            <p className="text-md md:text-lg text-gray-800/40">
              Our team of talented professionals is dedicated to providing top-notch web development services. Get to know the people who make it all happen.
            </p>
          </div>
          {/* Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full h-80">
              <Image
                src={about2}
                alt="Team Image 1"
                width={600}
                height={500}
                quality={50}
                placeholder="blur"
                className="object-cover rounded-xs shadow-[-5px_5px_5px_0px_#000000]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
