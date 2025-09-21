import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mandali Suresh Kumar - Senior IT Operations Manager",
  description: "30+ years of aviation IT expertise. Senior Manager at WAISL Limited specializing in digital transformation, airport operations, and IT infrastructure.",
  keywords: ["Aviation IT", "Digital Transformation", "Airport Operations", "IT Infrastructure", "WAISL", "GMR", "Senior Manager"],
  authors: [{ name: "Mandali Suresh Kumar" }],
  creator: "Mandali Suresh Kumar",
  publisher: "Mandali Suresh Kumar",
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Mandali Suresh Kumar - Senior IT Operations Manager",
    description: "30+ years of aviation IT expertise. Senior Manager at WAISL Limited specializing in digital transformation, airport operations, and IT infrastructure.",
    siteName: "Mandali Suresh Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mandali Suresh Kumar - Senior IT Operations Manager",
    description: "30+ years of aviation IT expertise. Senior Manager at WAISL Limited specializing in digital transformation, airport operations, and IT infrastructure.",
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
        {children}
      </body>
    </html>
  );
}
