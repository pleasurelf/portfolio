"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { projects, featuredProjects, type Project } from "@/lib/projects";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative flex flex-col border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-colors">
      {/* Stretched link overlay — covers the whole card */}
      <Link
        href={`/projects/${project.id}`}
        className="absolute inset-0 z-10"
        aria-label={`View ${project.title}`}
      />

      {/* Image / video / placeholder */}
      {project.image ? (
        <div className="w-full h-44 overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${project.imagePosition === "top" ? "object-top" : "object-center"}`}
          />
        </div>
      ) : (
        <div className="w-full h-44 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(99,102,241,0.03) 50%, rgba(245,158,11,0.06) 100%)" }}
        >
          <span className="text-2xl font-bold text-indigo-400/30 dark:text-indigo-500/20 tracking-widest uppercase select-none">
            {project.title.slice(0, 2)}
          </span>
        </div>
      )}

      <div className="flex flex-col p-6 flex-1">
        {/* Meta */}
        <div className="flex items-center gap-2 mb-2">
          {project.role && (
            <span className="text-[11px] text-indigo-500 dark:text-indigo-400 font-medium uppercase tracking-wider">
              {project.role}
            </span>
          )}
          <span className="text-[11px] text-zinc-400 dark:text-zinc-600">
            {project.year}
          </span>
        </div>

        <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50 mb-1">
          {project.title}
        </h3>
        {project.team && (
          <p className="text-xs text-zinc-500 mb-3">{project.team}</p>
        )}

        {/* Tags */}
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

        {/* Footer — z-20 so external links sit above the card overlay */}
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

export default function HomeProjects() {
  const featured = featuredProjects
    .map((id) => projects.find((p) => p.id === id))
    .filter((p): p is Project => p !== undefined);

  return (
    <section id="work" className="border-t border-zinc-200 dark:border-zinc-800/60">
      <div className="container-section section-padding">
        {/* Heading */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            {/*<div className="w-6 h-px bg-indigo-400" />*/}
            <span className="text-indigo-500 dark:text-indigo-400 text-xs tracking-widest uppercase">
              {/*work*/}
            </span>
          </div>
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
            Selected projects
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View all button */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-sm text-zinc-600 dark:text-zinc-400 hover:border-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
          >
            View all projects <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
