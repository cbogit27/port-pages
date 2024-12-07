"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navBackground, setNavBackground] = useState(false);
  const [navHeight, setNavHeight] = useState("py-6");
  const [showTopbar, setShowTopbar] = useState(true);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBackground(true);
        setNavHeight("py-6");
        setShowTopbar(false);
      } else {
        setNavBackground(false);
        setNavHeight("py-6");
        setShowTopbar(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActiveLink = (href: string) => pathname === href;

  return (
    <>
      <div
        className={`${
          showTopbar ? "h-8 bg-emerald-700/40 w-full px-4 lg:px-24 hidden md:flex" : "h-0"
        } transition-all duration-400 ease-in-out flex justify-between items-center px-4`}
      >
        <div className="flex space-x-4 items-center cursor-pointer">
          <FaTwitter className="text-white text-xs hover:text-blue-500/40 cursor-pointer" />
          <FaDiscord className="text-white text-xs hover:text-blue-500/40 cursor-pointer" />
        </div>
        <div className="flex space-x-6 text-white text-xs cursor-pointer">
          <span>Email: info@example.com</span>
          <span>|</span>
          <span>Phone: +123 456 789</span>
        </div>
      </div>

      <nav
        className={`fixed w-full z-10 top-0 transform transition-all duration-400 ease-in-out ${navHeight} ${
          navBackground ? "bg-gray-300 shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex justify-between items-center">
            <div className="font-bold cursor-pointer">
              <Link
                href="/"
                className={`text-gray-800 text-lg hover:text-green-800/40 font-extrabold ${
                  isActiveLink("/")
                    ? "border-b border-green-800/40 w-fit"
                    : ""
                }`}
              >
                logo&reg;
              </Link>
            </div>

            <div className="hidden md:flex space-x-4">
              <Link
                href="/portfolio"
                className={`text-gray-800 hover:text-green-800/50 font-extrabold ${
                  isActiveLink("/portfolio")
                    ? "border-b border-green-800/40 w-fit"
                    : ""
                }`}
              >
                Portfolio
              </Link>
              <Link
                href="/about"
                className={`text-gray-800 hover:text-green-800/40 font-extrabold ${
                  isActiveLink("/about")
                    ? "border-b border-green-800/40 w-fit"
                    : ""
                }`}
              >
                About
              </Link>
              <Link
                href="/blog"
                className={`text-gray-800 hover:text-green-800/40 font-extrabold ${
                  isActiveLink("/blog")
                    ? "border-b border-green-800/40 w-fit"
                    : ""
                }`}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className={`text-gray-800 hover:text-green-800/40 font-extrabold ${
                  isActiveLink("/contact")
                    ? "border-b border-green-800/40 w-fit"
                    : ""
                }`}
              >
                Contact
              </Link>
            </div>

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-800 focus:border p-2 font-bold"
              >
                MENU
              </button>
            </div>
          </div>
        </div>

        {/* mobile nav */}
        <div
          className={`md:hidden fixed inset-0 bg-gray-800 text-white z-20 transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{ height: "100vh", width: "100vw" }}
        >
          <div className="flex justify-between items-center p-4">
            <div>
              <Link
                href="/"
                onClick={toggleMenu}
                className={`text-gray-200 text-lg cursor-pointer  hover:text-green-800/40 font-extrabold ${
                  isActiveLink("/")
                    ? "border-b-4 border-green-500/40 w-fit"
                    : ""
                }`}
              >
                logo&reg;
              </Link>
            </div>
            <button
              onClick={toggleMenu}
              className="text-white p-2 font-bold focus:border"
            >
              CLOSE
            </button>
          </div>
          <div className="flex flex-col items-center justify-center h-full space-y-6">
            <Link
              href="/portfolio"
              onClick={toggleMenu}
              className={`text-lg font-extrabold cursor-pointer tracking-wider hover:text-green-800/40 transition duration-300 ${
                isActiveLink("/portfolio")
                  ? "border-b-4 border-green-800/40"
                  : ""
              }`}
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              onClick={toggleMenu}
              className={`text-lg font-extrabold  cursor-pointer tracking-wider hover:text-green-800/40 transition duration-300 ${
                isActiveLink("/about")
                  ? "border-b-4 border-green-800/40"
                  : ""
              }`}
            >
              About
            </Link>
            <Link
              href="/blog"
              onClick={toggleMenu}
              className={`text-lg font-extrabold cursor-pointer tracking-wider hover:text-green-800/40 transition duration-300 ${
                isActiveLink("/blog")
                  ? "border-b-4 border-green-800/40"
                  : ""
              }`}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              onClick={toggleMenu}
              className={`text-lg font-extrabold cursor-pointer tracking-wider hover:text-green-800/40 transition duration-300 ${
                isActiveLink("/contact")
                  ? "border-b-4 border-green-800/40"
                  : ""
              }`}
            >
              Contact
            </Link>

            <div className="text-center text-white justify-between flex flex-col">
            <div className="flex text-center justify-center p-4 space-x-8">
              <FaXTwitter/>
              <FaDiscord/>
            </div>
            <div className="flex text-center justify-between p-4 space-x-8">
              <p>email@example.com</p>
              <p>+123 456 789</p>
            </div>
          </div>
          </div>

          
        </div>
        
      </nav>
    </>
  );
}
