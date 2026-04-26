"use client";

import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navigation from "./components/Navigation";
import ChatWidget from "./components/ChatWidget";
import CustomCursor from "./components/CustomCursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <head>
        <title>Lakshya Verma — Full Stack Developer</title>
        <meta
          name="description"
          content="Portfolio of Lakshya Verma — Full Stack Developer building scalable web applications with React, Node.js, and modern cloud infrastructure."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#09090b" />
      </head>
      <body className={`${inter.className} cursor-none`}>
        <CustomCursor />
        <Navigation />
        <main className="relative z-10">{children}</main>
        <ChatWidget />
      </body>
    </html>
  );
}
