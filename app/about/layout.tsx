import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Lifetime Auto Sales",
  description: "Learn about Lifetime Auto Sales - your buyer representation service for accessing true wholesale pricing through dealer-only auctions.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

