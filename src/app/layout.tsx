"use client";
import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/sonner";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <html lang="en">
      <body className={`${inter.className} ${isLoaded ? "loaded" : ""}  `}>
        <Provider store={store}>
          {children}
          <Toaster richColors />
        </Provider>
      </body>
    </html>
  );
}
