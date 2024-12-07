import Link from "next/link";
import { FaDiscord, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const TextPage = () => {
    return (
      <section className="max-w-[1000px] mx-auto flex flex-col md:flex-row justify-between py-20 md:space-x-2">
        {/* Segment 1 */}
        <div className="flex-1 py-4">
          
          
          <div className="w-96 text-end  border-r border-gray-800/40 pr-6">

          <h2 className="text-md md:text-lg font-bold text-gray-800 mb-2">
            Empower Your Digital Presence
          </h2>

          <p className="text-4xl text-gray-500">
            Cross-referenced with our robust tech stack, we ensure scalability and performance.
          </p>
          <button className="bg-emerald-800/40 active:bg-transparent border border-gray-800/40 px-4 py-2 mt-6 ">
            Create a presence that works today!
          </button>
          </div>

          
          
        </div>
  
        {/* Segment 2 */}
        <div className="flex-1 bg-emerald-800/30 px-6 py-4 w-96 h-auto rounded-sm border-l border-gray-800/40">
          <div className="w-full text-start justify-center ">
          <h2 className="text-xs md:text-md font-bold text-gray-800 mb-4">
            Elevate Your Business Online
          </h2>
          <p className="text-md md:text-xl font-extrabold text-gray-600 mb-4">
            Tailored solutions to drive success in the digital marketplace.
          </p>
          <p className="text-2xl font-bold text-gray-500 mb-4">
            Cross-referenced with industry trends, our strategies are built for the future.
          </p>
          <p className="text-xl text-gray-500">
            Discover how we can transform your business with our expertise.
          </p>
          <div className="flex space-x-8 mt-4">
          <Link
            href="https://x.com"
            className="bg-transparent text-gray-600/40 p-2 rounded-md border hover:bg-gray-800/50 transition"
          >
            <FaXTwitter size={20} />
          </Link>
          <Link
            href="https://discord.com"
            className="bg-transparent text-gray-600/40 p-2 rounded-md border hover:bg-indigo-600/50 transition"
          >
            <FaDiscord size={20} />
          </Link>
            </div>
          </div>
        </div>
      </section>
    );
};

export default TextPage;
