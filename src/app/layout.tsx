"use client";

import "./_styles/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Metadata } from "next";
import MainClientView from "./_components/ui/MainClientView";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: 'Portfolio Landing Page ',
  description: 'Portfolio Landing Page  ',
}


// formally MyApp
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <MainClientView>{children}</MainClientView>
        </ThemeProvider>
      </body>
    </html>
  );
}
