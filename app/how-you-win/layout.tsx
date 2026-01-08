import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How You Win | Lifetime Auto Sales",
  description: "Your path from consultation to keys — without pressure or markups. Learn how our transparent, flat-fee buying process works.",
};

export default function HowYouWinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

