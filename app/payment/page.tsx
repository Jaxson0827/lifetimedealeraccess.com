import { Suspense } from "react";
import PaymentClient from "./PaymentClient";

export default function PaymentPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#f8fafc]">
          <div className="pt-[65px] min-h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1F3E8E]"></div>
          </div>
        </main>
      }
    >
      <PaymentClient />
    </Suspense>
  );
}

