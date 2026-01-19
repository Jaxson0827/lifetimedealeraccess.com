import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import StorageSchemaBootstrap from "@/components/StorageSchemaBootstrap";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Lifetime Auto Sales - Access True Wholesale Pricing",
  description:
    "Access true wholesale pricing through dealer-only auctions with a dedicated buying consultant guiding every step.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <StorageSchemaBootstrap />
        {children}
      </body>
    </html>
  );
}
