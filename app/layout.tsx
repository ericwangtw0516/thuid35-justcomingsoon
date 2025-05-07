import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Open_Sans } from 'next/font/google';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const openSans = Open_Sans({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "thuid35 | Coming Soon",
  description: "東海工設35屆期中展 | 敬請期待...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW" className={`${geistSans.variable} ${geistMono.variable} ${openSans.className} antialiased`}>
      <body>{children}</body>
    </html>
  );
};
