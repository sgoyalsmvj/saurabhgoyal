import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saurabh Goyal",
  description: "Namaste! Welcome To Portfolio Of Saurabh Goyal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden text-cool `}
      >
        <StarCanvas/>
        <Navbar/>
        {children}
        <SpeedInsights />
        <Footer/>
      </body>
    </html>
  );
}
