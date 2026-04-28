import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects, getProjectById, type ProjectSection } from "@/lib/projects";
import { LightboxImage } from "@/components/lightbox-image";
import { renderBody } from "@/components/render-body";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectById(slug);
  if (!project) notFound();

  const paragraphs = (project.fullDescription ?? project.description).split("\n\n");

  return (
    <div className="text-zinc-900 dark:text-zinc-100">
      <div className="container-section py-10">
        {/* Back */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-yellow-500 transition-colors mb-10"
        >
          <ArrowLeft size={14} /> Back to projects
        </Link>

        {/* Header media */}
        {project.image ? (
          <div className="w-full rounded-3xl mb-10 overflow-hidden">
          {/*<div className="w-full border border-zinc-200 dark:border-zinc-800 mb-10 overflow-hidden">*/}
            <LightboxImage
              src={project.image}
              alt={project.title}
              className="w-full h-auto max-h-[70vh] object-contain"
            />
          </div>
        ) : project.video ? (
          <div className="w-full border border-zinc-200 dark:border-zinc-800 mb-10 overflow-hidden">
            <video
              src={project.video}
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-full h-auto max-h-[70vh]"
            />
          </div>
        ) : null}

        {/* Title block */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
            {project.role && (
              <span className="text-xs text-indigo-500 dark:text-indigo-400 font-medium uppercase tracking-widest">
                {project.role}
              </span>
            )}
            <span className="text-xs text-zinc-400 dark:text-zinc-600">
              {project.year}
            </span>
            {project.team && (
              <span className="text-xs text-zinc-400 dark:text-zinc-600">
                · {project.team}
              </span>
            )}
          </div>
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight mb-4">
            {project.title}
          </h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          {project.links && project.links.length > 0 && (
            <div className="flex flex-wrap items-center gap-3">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm px-4 py-2 border rounded-3xl border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                  // className="inline-flex items-center gap-1.5 text-sm px-4 py-2 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                >
                  {link.type === "github" ? (
                    <img
                      src="/github.svg"
                      alt=""
                      aria-hidden="true"
                      className="w-3.5 h-3.5 dark:invert opacity-60"
                    />
                  ) : (
                    <ExternalLink size={13} />
                  )}
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Overview */}
        <div className="max-w-2xl space-y-4 mb-16">
          <h2 className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-600 font-medium">
            {/*Overview Title // TODO jenny, do I want this on every project page?*/}
          </h2>
          {paragraphs.map((para, i) => (
            <p key={i} className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        {/* Alternating sections */}
        {project.sections && project.sections.length > 0 && (
          <div>
            {project.sections.map((section: ProjectSection, i: number) => {
              const imageLeft = i % 2 === 0;
              return (
                <div
                  key={section.title}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center py-12"
                >
                  {/* Media: image, video, or youtube — in priority order */}
                  {section.image ? (
                    <div className={imageLeft ? "" : "md:order-last"}>
                      <LightboxImage
                        src={section.image}
                        alt={section.imageAlt ?? section.title}
                        className="w-full rounded-3xl"
                        // className="w-full border border-zinc-200 dark:border-zinc-800 object-cover"
                      />
                    </div>
                  ) : section.video ? (
                    <div className={imageLeft ? "" : "md:order-last"}>
                      <video
                        src={section.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls
                        className="w-full rounded-3xl"
                        // className="w-full border border-zinc-200 dark:border-zinc-800 object-cover"
                      />
                    </div>
                  ) : section.youtube ? (
                    <div className={`aspect-video ${imageLeft ? "" : "md:order-last"}`}>
                      <iframe
                        src={`https://www.youtube.com/embed/${section.youtube}`}
                        title={section.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full rounded-3xl"
                        // className="w-full h-full border border-zinc-200 dark:border-zinc-800"
                      />
                    </div>
                  ) : null}
                  {/* Text */}
                  <div className={!section.image && !section.video && !section.youtube ? "md:col-span-2" : ""}>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
                      {section.title}
                    </h3>
                    {renderBody(section.body)}
                  </div>
                  {/* YouTube embed — full width below the image+text row */}
                  {section.youtubeBelow && (
                    <div className="md:col-span-2 aspect-video">
                      <iframe
                        src={`https://www.youtube.com/embed/${section.youtubeBelow}`}
                        title={section.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full rounded-3xl"
                        // className="w-full h-full border border-zinc-200 dark:border-zinc-800"
                      />
                    </div>
                  )}
                  {/* Video file — full width below the image+text row */}
                  {section.videoBelow && (
                    <div className="md:col-span-2">
                      <video
                        src={section.videoBelow}
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls
                        className="w-full rounded-3xl"
                        // className="w-full border border-zinc-200 dark:border-zinc-800"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}
