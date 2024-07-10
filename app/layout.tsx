import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Basim's Portfolio",
  description: "A personal website to showcase my work and projects.",
  icons: [
    {
      url: "/favicon.ico",
      sizes: "any",
      type: "image/x-icon",
    },
    {
      url: "/icon-144.png",
      sizes: "144x144",
      type: "image/png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
