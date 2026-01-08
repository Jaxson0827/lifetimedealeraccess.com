import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Vehicle Summary | Lifetime Auto Sales",
  description: "Review your vehicle preferences and consultant fee structure before we begin sourcing wholesale vehicles for you.",
};

export default function ResultsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

