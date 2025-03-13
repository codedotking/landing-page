import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Finwise - Smart, Secure, Simple Financial Management",
  description: "Your all-in-one tool for tracking expenses, budgeting, investing, and more. Take control of your financial future today.",
  icons: {
    icon: [
      { url: '/favicon.svg' },
    ],
    apple: [
      { url: '/favicon.svg' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
