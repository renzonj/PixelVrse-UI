import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = Noto_Sans({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: "swap",
});

export const metadata: Metadata = {
  title: "PixelVerse UI",
  description: "Sampe Mobile PixelVerse UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('font-sans min-h-screen', fontSans.variable)}>{children}</body>
    </html>
  );
}
