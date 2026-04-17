import Image from "next/image";

export default function HomeContact() {
  return (
    <section id="contact" className="border-t border-zinc-200 dark:border-zinc-800/60">
      <div className="container-section section-padding">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-px bg-indigo-400" />
          <span className="text-indigo-500 dark:text-indigo-400 text-xs tracking-widest uppercase">contact</span>
        </div>
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight mb-4">Get In Touch</h2>
          {/* Left — photo */}
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
                  {/* Photo container */}
                  <div>
                      <Image
                          src="/images/jenny/baeley-and-jenny.jpg"
                          alt="Art Portrait of Baeley the Beagle and Jenny"
                          fill
                          sizes="(max-width: 768px) 192px, 224px"
                          className="object-cover object-top"
                          priority
                      />
                  </div>
              </div>
          </div>
          
        <p className="text-zinc-500 dark:text-zinc-400 mb-10 max-w-md">
          I'm open to new opportunities and collaborations. Feel free to reach out via email or connect with me online.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
              // action for emailing
            href="mailto:jennekilroy@gmail.com"
            className="inline-flex items-center gap-2.5 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white text-sm transition-colors"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M2 7l10 7 10-7" />
              // the actual text
            </svg>
            jennekilroy@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/jennykilroy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-400 text-sm transition-colors"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>
        </div>
          
      </div>
    </section>
  );
}
