import { Suspense } from "react";
import PaymentSuccessClient from "./PaymentSuccessClient";

export default function PaymentSuccessPage() {
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
      <PaymentSuccessClient />
    </Suspense>
  );
}

