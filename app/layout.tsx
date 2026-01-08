import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

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
  // #region agent log
  if (typeof window !== "undefined") {
    fetch('http://127.0.0.1:7246/ingest/00f9ee75-8139-470e-a682-0e05d6173856',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'layout.tsx:27',message:'RootLayout rendering',data:{hasWindow:true,userAgent:typeof navigator!=='undefined'?navigator.userAgent:'unknown'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A'})}).catch(()=>{});
    
    // Global error handler
    window.addEventListener('error', (e) => {
      fetch('http://127.0.0.1:7246/ingest/00f9ee75-8139-470e-a682-0e05d6173856',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'layout.tsx:error',message:'Global error caught',data:{message:e.message,filename:e.filename,lineno:e.lineno,colno:e.colno,error:String(e.error)},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'})}).catch(()=>{});
    });
    
    window.addEventListener('unhandledrejection', (e) => {
      fetch('http://127.0.0.1:7246/ingest/00f9ee75-8139-470e-a682-0e05d6173856',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'layout.tsx:rejection',message:'Unhandled promise rejection',data:{reason:String(e.reason)},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'})}).catch(()=>{});
    });
  }
  // #endregion
  
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
