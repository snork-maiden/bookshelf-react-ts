"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import Header from "./header/header";

const sourceSans = Source_Sans_3({
  subsets: [
    "cyrillic",
    "cyrillic-ext",
    "greek",
    "greek-ext",
    "latin",
    "latin-ext",
    "vietnamese",
  ],
});

export const metadata: Metadata = {
  title: "Books search",
  description: "Start looking for books in Google Books",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sourceSans.className}>
        <Header></Header>
        <main className="main">{children}</main>
      </body>
    </html>
  );
}
