import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { projects, type Project } from "@/lib/projects";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative flex flex-col border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-colors">
      <Link
        href={`/projects/${project.id}`}
        className="absolute inset-0 z-10"
        aria-label={`View ${project.title}`}
      />
      {project.image ? (
        <div className="w-full h-60 overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${project.imagePosition === "top" ? "object-top" : "object-center"}`}
          />
        </div>
      ) : null}
      <div className="flex flex-col p-5 flex-1">
        <div className="flex items-center gap-2 mb-1.5">
          {project.role && (
            <span className="text-[11px] text-indigo-500 dark:text-indigo-400 font-medium uppercase tracking-wider">
              {project.role}
            </span>
          )}
          <span className="text-[11px] text-zinc-400 dark:text-zinc-600">
            {project.year}
          </span>
        </div>
        <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50 mb-0.5">
          {project.title}
        </h3>
        {project.team && (
          <p className="text-xs text-zinc-500 mb-3">{project.team}</p>
        )}
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="relative z-20 flex items-center justify-between pt-3 border-t border-zinc-100 dark:border-zinc-800">
          <Link href={`/projects/${project.id}`} className="text-xs text-indigo-500 dark:text-indigo-400 flex items-center gap-1 group-hover:gap-2 transition-all">
            View project <ArrowRight size={12} />
          </Link>
          {project.links && project.links.length > 0 && (
            <div className="flex items-center gap-3">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors"
                >
                  {link.type === "github" ? (
                    <img
                      src="/github.svg"
                      alt=""
                      aria-hidden="true"
                      className="w-3 h-3 dark:invert opacity-50 hover:opacity-100 transition-opacity"
                    />
                  ) : (
                    <ExternalLink size={11} />
                  )}
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-6">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-px bg-amber-400" />
        <span className="text-amber-600 dark:text-amber-400 text-xs tracking-widest uppercase">
          {label}
        </span>
      </div>
      <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
        {title}
      </h2>
    </div>
  );
}

export default function ProjectsPage() {
  const professionalWork = projects.filter((p) => p.category === "professional");
  const personalWork = projects.filter((p) => p.category === "personal");
  const personalOtherWork = projects.filter((p) => p.category === "personalOther");
  const jams = projects.filter((p) => p.category === "jam");

  return (
    <div className="text-zinc-900 dark:text-zinc-100">
      <div className="container-section py-10">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors mb-10"
        >
          <ArrowLeft size={14} /> Back to home
        </Link>

        {/* Page heading */}
        {/*<div className="flex items-center gap-2 mb-4">*/}
        {/*  <div className="w-6 h-px bg-indigo-400" />*/}
        {/*  <span className="text-indigo-500 dark:text-indigo-400 text-xs tracking-widest uppercase">*/}
        {/*    work*/}
        {/*  </span>*/}
        {/*</div>*/}
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight mb-14">
          All projects
        </h1>

        {/* Professional Work */}
        <div className="mb-16">
          <SectionHeading label="professional" title="" />
          {/*<SectionHeading label="professional" title="Professional Work" />*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {professionalWork.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Personal Game Projects */}
        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-14">
          {/*<SectionHeading label="personal" title="Personal Projects" />*/}
          <SectionHeading label="personal" title="" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {personalWork.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

      {/* Personal Other Projects */}
      <div className="border-t border-zinc-200 dark:border-zinc-800 pt-14">
          {/*<SectionHeading label="Other" title="World Building" />*/}
          <SectionHeading label="Other" title="" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personalOtherWork.map((project) => (
                  <ProjectCard key={project.id} project={project} />
              ))}
          </div>
      </div>

        {/* Game Jams */}
        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-14">
          {/*<SectionHeading label="jam" title="Game Jams" />*/}
          <SectionHeading label="jam" title="" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {jams.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}
