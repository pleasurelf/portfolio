import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteNav } from "@/components/site-nav";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const jetbrainsMono = JetBrains_Mono({subsets:['latin'],variable:'--font-mono'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // title that appears in the tab
    title: "Jennifer Kilroy - Portfolio",
  description: "Melbourne based game developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, jetbrainsMono.variable, "font-sans", inter.variable)}
      suppressHydrationWarning data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col">
        <Script id="theme-init" strategy="beforeInteractive">{`
          (function() {
            var stored = localStorage.getItem('theme');
            var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (stored === 'dark' || (!stored && prefersDark)) {
              document.documentElement.classList.add('dark');
            }
          })();
        `}</Script>
        <ThemeProvider>
          <div className="relative min-h-full flex flex-col bg-stone-50 dark:bg-zinc-950">
            {/* Ambient glow — light mode: indigo left, amber right */}
            <div
              className="fixed inset-x-0 top-0 h-screen pointer-events-none z-0 dark:hidden"
              style={{
                background:
                  "radial-gradient(ellipse 60% 50% at 30% -10%, rgba(40,214,241,0.10) 0%, transparent 80%), radial-gradient(ellipse 60% 50% at 70% -10%, rgba(245,158,11,0.10) 0%, transparent 80%)",
              }}
            />
            {/* Ambient glow — dark mode: indigo centre */}
            <div
              className="fixed inset-x-0 top-0 h-screen pointer-events-none z-0 hidden dark:block"
              style={{
                background:
                  "radial-gradient(ellipse 100% 68% at 50% -10%, rgba(70,150,250,0.20) 0%, transparent 85%)",
              }}
            />
            <SiteNav />
            <main className="relative z-10 flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
