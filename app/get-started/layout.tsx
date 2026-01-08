import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Started | Lifetime Auto Sales",
  description: "Start your wholesale vehicle buying journey. Complete the intake form, schedule a call, or send us a message.",
};

export default function GetStartedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

