import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AegisFlow | B2B SaaS InfoSec Maturity Assessment",
  description:
    "Evaluate and verify your organization's Information Security compliance maturity using evidence-based verification and local AI analysis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col bg-[#050811] text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-200">
        <header className="border-b border-white/5 bg-[#050811]/40 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/25 ring-1 ring-white/10">
                Æ
              </div>
              <div>
                <span className="font-extrabold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-slate-100 to-purple-200">
                  AegisFlow
                </span>
                <span className="ml-1.5 text-[10px] font-bold tracking-widest text-indigo-400 uppercase bg-indigo-500/10 px-1.5 py-0.5 rounded border border-indigo-500/20">
                  SaaS
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-slate-400 font-medium flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Ollama: <code className="text-indigo-300">{process.env.OLLAMA_MODEL || "qwen2.5:7b"}</code>
              </span>
            </div>
          </div>
        </header>
        <main className="flex-1 flex flex-col">{children}</main>
        <footer className="border-t border-white/5 py-6 text-center text-xs text-slate-500 bg-[#050811]/60">
          <p>© {new Date().getFullYear()} AegisFlow InfoSec Systems. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
