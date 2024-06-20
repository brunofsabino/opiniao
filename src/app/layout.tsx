import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Opinião Gospel",
  description: "Site Opinião Gospel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-customColor">
          <Header />


          {children}
        </div>
      </body>
    </html>
  );
}
