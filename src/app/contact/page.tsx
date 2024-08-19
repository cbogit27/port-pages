"use client";
import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaDiscord, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  return (
    <div className="relative max-w-[1240px] mx-auto px-3 sm:px-4 lg:px-6 py-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/contact.jpg"
          alt="Contact Background Image"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gray-800/60"></div>
      </div>

      {/* Section: Contact Form and Social Icons */}
      <section className="relative z-10 max-w-[800px] mx-auto bg-transparent p-8 rounded-xs flex flex-col md:flex-row justify-between items-start">
        {/* Form Section */}
        <div className="flex-1 md:mr-8">
          <div className="text-left mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-4">
              Get in Touch
            </h2>
            <p className="text-md md:text-lg text-gray-200">
              We would love to hear from you! Whether you have a question about services, pricing, or anything else, our team is ready to answer all your questions.
            </p>
          </div>

          <form>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="w-full px-4 py-3 text-white rounded-xs border border-gray-300 bg-transparent outline-none"
                type="text"
                id="name"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-4 py-3 text-white rounded-xs border border-gray-300 bg-transparent outline-none"
                type="email"
                id="email"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full px-4 py-3 rounded-xs text-white border border-gray-300 bg-transparent outline-none"
                id="message"
                rows={5}
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="w-full bg-transparent active:bg-green-700/40 text-white px-6 py-3 rounded-xs border outline-none transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Social Media Icons */}
        <div className="flex-1 flex flex-row md:flex-col justify-start items-center mt-10 md:mt-0 space-x-2 md:space-y-6">
          <p className="text-gray-200 mb-4">Connect with us:</p>
          
            <Link
              href="https://x.com"
              className="bg-transparent text-white p-2 rounded-full border hover:bg-gray-800/50 transition "
            >
              <FaXTwitter size={24} />
            </Link>
            <Link
              href="https://discord.com"
              className="bg-transparent text-white p-2 rounded-full border hover:bg-indigo-600/50 transition "
            >
              <FaDiscord size={24} />
            </Link>
            <Link
              href="mailto:someone@example.com"
              className="bg-transparent text-white p-2 rounded-full border hover:bg-gray-200/50 transition "
            >
              <FaEnvelope size={24} />
            </Link>
        
            <Link
              href="https://wa.me/123456789"
              className="bg-transparent text-white p-2 rounded-full border hover:bg-green-600/50 transition"
            >
              <FaWhatsapp size={24} />
            </Link>
        
        </div>
      </section>
    </div>
  );
}
