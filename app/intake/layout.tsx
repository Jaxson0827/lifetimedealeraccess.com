import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vehicle Intake Form | Lifetime Auto Sales",
  description: "Tell us about your dream vehicle. Complete this quick intake form to help our buying consultants find the perfect wholesale vehicle for you.",
};

export default function IntakeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

