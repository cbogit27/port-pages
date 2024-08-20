import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { headers } from "next/headers";
import { Toaster } from "react-hot-toast";

const outfit = Outfit({ subsets: ["latin"] });

// Define a mapping of routes to titles
const routeTitles: Record<string, string> = {
  '/': 'Home',
  '/about': 'About Us',
  '/portfolio': 'Our Services',
  '/contact': 'Contact Us',
  // Add more routes as needed
};

export async function generateMetadata(): Promise<Metadata> {
  const headersList = headers();
  const pathname = headersList.get('x-invoke-path') || '/';

  // Extract the first part of the path (e.g., '/about/something' becomes '/about')
  const basePath = '/' + pathname.split('/')[1];

  // Get the title from the mapping, or use a default
  const pageTitle = routeTitles[basePath] || 'Default Title';

  return {
    title: ` Web & content development company`,
    description: `${pageTitle} page of the website.`,
    // Add other metadata as needed
  };
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Toaster/>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
