import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Setup Deposit | Lifetime Auto Sales",
  description: "Secure your setup deposit to begin the wholesale vehicle sourcing process with your dedicated buying consultant.",
};

export default function PaymentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

