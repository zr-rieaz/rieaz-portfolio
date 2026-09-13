import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rieaz | Full-Stack Developer & CST Student",
  description: "Personal portfolio of Rieaz, Computer Science and Technology student at Jashore Govt. Polytechnic Institute. Specializing in Full-Stack development, Automation, and Android systems.",
  keywords: ["Rieaz", "Jashore Polytechnic", "CST Student", "Full-Stack Developer", "Next.js Portfolio", "Android Customization"],
  authors: [{ name: "Rieaz", url: "https://github.com/zr-rieaz" }],
  openGraph: {
    title: "Rieaz | Portfolio",
    description: "Building Software, Automation & Scalable Solutions",
    url: "https://github.com/zr-rieaz",
    siteName: "Rieaz Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}