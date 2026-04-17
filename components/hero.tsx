import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { tagline } from "@/lib/about";
import { renderBody } from "@/components/render-body";

export default function Hero() {
  const stats = [
    { num: "+ 15 years", label: "professional experience" },
    { num: "+ 4 years", label: "in game development" },
    { num: "+ 5 years", label: "hospitality" },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Hero body */}
      <div className="relative container-section section-padding flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left */}
        <div className="flex-1 min-w-0">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-5">
            <div className="w-6 h-px bg-indigo-400" />
            <span className="text-indigo-500 dark:text-indigo-400 text-xs tracking-widest uppercase">
              
            </span>
          </div>

          {/* Name + title */}
          <h1 
              className="
              text-4xl 
              md:text-5xl 
              font-bold 
              text-zinc-900 
              dark:text-zinc-50 
              leading-tight 
              tracking-tight 
              mb-2"
          >
              {/* header name */}
            Jennifer Kilroy
          </h1>
            
          <p className="text-lg text-zinc-500 mb-6 font-medium">
            Engineer{" "}
          </p>

          {/* Bio */}
          <div className="text-sm max-w-lg mb-8">
            {renderBody(tagline)}
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-3 flex-wrap mb-8">
            <a href="/JenniferKilroyCV_2026.pdf" download>
              <Button 
                  className="
                  bg-amber-500 
                  hover:bg-amber-700 
                  text-white 
                  rounded-full 
                  font-medium 
                  text-sm 
                  px-5 
                  gap-2 
                  transition-colors"
              >
                <Download size={14} />
                  CV
              </Button>
            </a>
            <a href="/projects">
              <Button
                variant="outline"
                className="rounded-none text-sm px-5 bg-transparent border-zinc-300 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors"
              >
                My Projects
              </Button>
            </a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <span className="text-zinc-400 dark:text-zinc-600 text-xs mr-1">find me on</span>
            <a
              href="https://linkedin.com/in/jennykilroy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-11 h-11 flex items-center justify-center border border-blue-400 dark:border-blue-500 text-blue-500 dark:text-blue-400 hover:bg-blue-500 hover:text-white hover:border-blue-500 hover:scale-110 transition-all duration-150"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            {/*    // TODO remove*/}
            {/*<a*/}
            {/*  href="https://github.com/Aspekt1024"*/}
            {/*  target="_blank"*/}
            {/*  rel="noopener noreferrer"*/}
            {/*  aria-label="GitHub"*/}
            {/*  className="group w-11 h-11 flex items-center justify-center border border-violet-400 dark:border-violet-500 hover:bg-violet-500 hover:scale-110 transition-all duration-150"*/}
            {/*>*/}
            {/*  <img*/}
            {/*    src="/github.svg"*/}
            {/*    alt=""*/}
            {/*    aria-hidden="true"*/}
            {/*    className="w-6 h-6 dark:invert opacity-70 group-hover:invert group-hover:opacity-100 transition-all"*/}
            {/*  />*/}
            {/*</a>*/}
            <a
              href="mailto:jennekilroy@gmail.com"
              aria-label="Email"
              className="w-11 h-11 flex items-center justify-center border border-amber-400 dark:border-amber-500 text-amber-500 dark:text-amber-400 hover:bg-amber-500 hover:text-white hover:border-amber-500 hover:scale-110 transition-all duration-150"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 7l10 7 10-7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right — photo */}
        <div className="shrink-0">
          <div className="relative w-48 h-48 md:w-56 md:h-56">
            {/* Soft glow behind photo */}
            <div
              className="absolute inset-0 pointer-events-none scale-150"
              style={{
                background:
                  "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
              }}
            />
            {/* Offset accent border */}
            <div 
                className="
                absolute inset-0 border 
                {/*border-indigo-400/40 */}
                translate-x-2.5 
                translate-y-2.5
                rounded-full
                " 
            />
            {/* Photo container */}
            {/*<div className="relative z-10 w-full h-full bg-zinc-200 dark:bg-zinc-800/80 border border-zinc-300 dark:border-zinc-700 overflow-hidden">*/}
            <div>
              <Image
                src="/jenny/JennyProfilePicture.png"
                alt="Photograph of Jennifer Kilroy"
                fill
                sizes="(max-width: 768px) 192px, 224px"
                className="object-cover object-top rounded-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative container-section border-t border-zinc-200 dark:border-zinc-800/60 flex">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex-1 px-6 md:px-10 py-6 border-r border-zinc-200 dark:border-zinc-800/60 last:border-r-0"
          >
            <div className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-zinc-50 leading-none mb-1">
              {stat.num.replace("+", "")}
              {stat.num.includes("+") && (
                <span className="text-emerald-500 dark:text-emerald-400">+</span>
                // <span className="text-amber-500 dark:text-amber-400">+</span>
              )}
            </div>
            <div className="text-[11px] text-zinc-400 dark:text-zinc-600 uppercase tracking-wider">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
