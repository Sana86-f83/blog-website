import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Metadata } from "next";
import Image from "next/image";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
      <div className="relative w-full h-auto bg-black md:bg-black/40">
            {/* Background Image */}
            <div className="md:block hidden fixed top-0 left-0 w-full h-full -z-10">
        <Image
          src={"/images/home-image/homebg.jpg"}
          alt={"bg-home"}
          fill
          className="object-cover fixed opacity-60"
        />
      </div>

      <Navbar />
        {children}
        <Footer />
        </div>
      </body>
    </html>
  );
}
