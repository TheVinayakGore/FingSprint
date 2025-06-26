import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FingSprint | Typing Speed Test",
  description:
    "Test and improve your typing speed with real-time metrics. Track your WPM, accuracy, and progress over time.",
  keywords:
    "typing test, typing speed, WPM test, keyboard practice, typing practice",
  authors: [{ name: "Your Name", url: "https://vinayakgore.vercel.app" }],
  openGraph: {
    title: "FingSprint | Typing Speed Test",
    description: "Test and improve your typing speed with real-time metrics",
    url: "https://fingsprint.vercel.app",
    siteName: "FingSprint",
    images: [
      {
        url: "https://fingsprint.vercel.app/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FingSprint | Typing Speed Test",
    description: "Test and improve your typing speed with real-time metrics",
    images: ["https://fingsprint.vercel.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
