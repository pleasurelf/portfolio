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
    <section className="relative overflow-hidden flex items-center justify-center min-h-screen">
        
        {/* Profile photo */}
        <div className="shrink-0">
            <div className="relative w-48 h-48 md:w-56 md:h-56">

                {/* Soft glow behind photo */}
                <div
                    className="
        absolute inset-0 
        pointer-events-none 
        scale-150"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",}}/>

            {/* Photo container */}
            <div>
                <Image
                    src="/jenny/JennyProfilePicture.png"
                    alt="Photograph of Jennifer Kilroy"
                    fill
                    sizes="(max-width: 768px) 192px, 224px"
                    className="
                    object-cover 
                    object-top 
                    rounded-full
                    "
                    priority/>
                </div>
            </div>
        </div>
        
      {/* Hero body */}
      <div className="
          relative container-section 
          section-padding flex 
          flex-col-reverse 
          md:flex-row 
          items-center 
          justify-between 
          gap-12
      ">
          
    {/* Left */}
    <div className="
    flex-1 
    min-w-0
    ">
      {/* Name + title */}
      <h1 
          className="
          text-4xl 
          md:text-5xl 
          font-bold
          text-zinc-700
          dark:text-zinc-200
          leading-tight 
          tracking-tight 
          mb-2
          ">
        Jennifer Kilroy
      </h1>
            
      <p className="
      flex items-center 
      text-zinc-500 
      mb-6 
      font-medium
      ">
        Mid-Level Engineer{" "}
      </p>

      {/* Bio */}
      <div className="
      text-sm 
      max-w-lg 
      mb-8
      ">
        {renderBody(tagline)}
      </div>
        
      <div className="
      flex items-center 
      gap-3 
      flex-wrap 
      mb-8
      ">
        <a href="/JenniferKilroyCV_2026.pdf" download>
          <Button
              className="
              text-pink-500 
              hover:text-pink-800
              bg-transparent
              rounded-full 
              font-medium 
              text-sm 
              px-5 
              gap-2 
              transition-colors
              ">
            <Download size={14} />
              CV
          </Button>
        </a>
          
      <a href="https://linkedin.com/in/jennykilroy">
          <Button
              className="
              text-blue-600 hover:text-blue-900
              bg-transparent
              rounded-full 
              font-medium 
              text-sm 
              px-5 
              gap-2 
              transition-colors
              "
          >LinkedIn
          </Button>
      </a>
      <a href="mailto:jennekilroy@gmail.com">
          <Button
              // variant="outline"
              className="
              text-amber-600 hover:text-amber-900
              bg-transparent
              rounded-full 
              font-medium 
              text-sm 
              px-5 
              gap-2 
              transition-colors
              "
          >Email
          </Button>
      </a>
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
