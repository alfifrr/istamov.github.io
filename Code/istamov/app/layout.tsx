import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeModeScript } from "flowbite-react";
import { AuthProvider } from "@/contexts/authContext";
import { FavoriteProvider } from "@/contexts/favoriteContext";

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
  title: "Istamov",
  description: "Istamosh Movie Selection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeModeScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-black`}
      >
        <AuthProvider>
          <FavoriteProvider>{children}</FavoriteProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
