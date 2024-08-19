import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { headers } from 'next/headers';

const outfit = Outfit({ subsets: ["latin"] });

// Define a mapping of routes to titles
const routeTitles: Record<string, string> = {
  '/about': 'About Us',
  '/portfolio': 'Our Services',  // Corrected the typo here
  '/contact': 'Contact Us',
  // Add more routes as needed
};

export async function generateMetadata(): Promise<Metadata> {
  const headersList = headers();
  const pathname = headersList.get('x-invoke-path') || '/about';

  // Type assertion to ensure pathname is a valid key
  const pageTitle = routeTitles[pathname as keyof typeof routeTitles] || 'Default Title';

  return {
    title: `${pageTitle}`,
    description: `${pageTitle} page of the website.`,
    // Add other metadata as needed
  };
}

export default function CompanyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
<Navbar/>
        <main>{children}</main>
      
      </body>
    </html>
  );
}
