import { Suspense } from "react";
import PaymentSuccessClient from "./PaymentSuccessClient";

export default function PaymentSuccessPage() {
  // #region agent log
  fetch('http://127.0.0.1:7242/ingest/b5521433-4fef-47a3-91d1-de50e108800b',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({sessionId:'debug-session',runId:'pre-fix',hypothesisId:'H3',location:'app/payment/success/page.tsx:render',message:'rendering /payment/success page (server wrapper)',data:{},timestamp:Date.now()})}).catch(()=>{});
  // #endregion agent log

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

