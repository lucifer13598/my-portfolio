import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "@/../utils/ScrollToTopButton";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Md Altamash | Full Stack Developer",
  description:
    "Portfolio of Md Altamash – Full Stack Developer specializing in MERN stack, React, Node.js, and modern web applications.",
  keywords: [
    "Md Altamash",
    "Full Stack Developer",
    "MERN Developer",
    "React Developer",
    "Node.js Developer",
    "Software Engineer",
  ],
  authors: [{ name: "Md Altamash" }],
  openGraph: {
    title: "Md Altamash | Personal Portfolio",
    description:
      "Full Stack Developer building scalable web applications and modern user experiences.",
    url: "https://your-portfolio.vercel.app",
    siteName: "Md Altamash Portfolio",
    images: [
      {
        url: "/Website-overview.png",
        width: 1200,
        height: 630,
        alt: "Md Altamash Portfolio Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Altamash | Full Stack Developer",
    description:
      "Building modern web applications with MERN stack and scalable architectures.",
    images: ["/Website-overview.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="text-white">
          <div className="container">{children}</div>
        </main>
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
