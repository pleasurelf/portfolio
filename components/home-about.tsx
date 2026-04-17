import { skillGroups } from "@/lib/about";
import { renderBody } from "@/components/render-body";

export default function HomeAbout() {
  return (
    <section id="about" className="border-t border-zinc-200 dark:border-zinc-800/60">
      <div className="container-section section-padding">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-px bg-indigo-400" />
          <span className="text-indigo-500 dark:text-indigo-400 text-xs tracking-widest uppercase">
            about
          </span>
        </div>
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight mb-10">
          Skills Summary
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">

          {/* Skills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-6">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <h3 className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-600 mb-3 font-medium">
                  {group.label}
                </h3>
                <ul className="space-y-1.5">
                  {group.skills.map((skill) => (
                    <li key={skill} className="flex items-baseline gap-2">
                      <span className="w-1 h-1 rounded-full bg-indigo-400 shrink-0 mt-1.75]" />
                      <span className="text-sm text-zinc-700 dark:text-zinc-300">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
          
      </div>
    </section>
  );
}
