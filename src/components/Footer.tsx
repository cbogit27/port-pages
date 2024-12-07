"use client";
import Link from "next/link";
import { FaTwitter, FaDiscord, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 md:py-12 h-full">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-8">
          <div className="flex space-x-6">
            <Link href="/" className="text-gray-300 hover:text-white transition">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition">
              About
            </Link>
            <Link href="/portfolio" className="text-gray-300 hover:text-white transition">
              Portfolio
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition">
              Contact
            </Link>
          </div>
          <div className="mt-8 md:mt-0">
            <Link href="mailto:info@example.com" className="text-gray-300 hover:text-white transition">
              info@example.com
            </Link>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8">
          <div className="flex space-x-6">
            <Link href="https://twitter.com" className="p-3 rounded-full border border-transparent hover:border-white hover:bg-transparent text-gray-300 hover:text-white transition">
              <FaTwitter size={20} />
            </Link>
            <Link href="https://discord.com" className="p-3 rounded-full border border-transparent hover:border-white hover:bg-transparent text-gray-300 hover:text-white transition">
              <FaDiscord size={20} />
            </Link>
            <Link href="mailto:someone@example.com" className="p-3 rounded-full border border-transparent hover:border-white hover:bg-transparent text-gray-300 hover:text-white transition">
              <FaEnvelope size={20} />
            </Link>
            <Link href="https://wa.me/123456789" className="p-3 rounded-full border border-transparent hover:border-white hover:bg-transparent text-gray-300 hover:text-white transition">
              <FaWhatsapp size={20} />
            </Link>
          </div>
          <div className="mt-8 md:mt-0">
            <form>
              <div className="flex">
                <input
                required
                  type="email"
                  placeholder="Subscribe to our newsletter"
                  className="px-4 py-2 rounded-l-xs border-0 outline-none bg-transparent"
                />
                <button className="px-4 py-2 bg-transparent rounded-r-xs text-white active:bg-green-600/50 transition">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center py-4 border-t border-gray-700">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
