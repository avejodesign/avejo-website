"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/app/sections/Header";
import { Footer } from "@/app/sections/Footer";
import { projects, getProjectBySlug } from "@/app/data/projects";
import { useLanguage } from "@/app/i18n/LanguageContext";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export default function ProjectDetailsPage({ params }: ProjectPageProps) {
  const { slug } = use(params);
  const { lang } = useLanguage();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <>
        <Header />
        <main className="container mx-auto pt-[140px] pb-[80px] md:pb-[120px]">
          <div className="md:px-10">
            <h1 className="text-3xl md:text-5xl mb-4">
              {lang === "pt" ? "Projeto nao encontrado" : "Project not found"}
            </h1>
            <Link href="/" className="inline-flex px-4 py-2 border border-black rounded-full">
              {lang === "pt" ? "Voltar para inicio" : "Back to home"}
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const content = project.locale[lang];

  return (
    <>
      <Header />
      <main className="container mx-auto pt-[140px] pb-[80px] md:pb-[120px]">
        <div className="md:px-10">
          <div className="flex flex-wrap gap-3 mb-8">
            {projects.map((projectTab) => (
              <Link
                key={projectTab.slug}
                href={`/projects/${projectTab.slug}`}
                className={`px-4 py-2 rounded-full border text-sm transition ${
                  projectTab.slug === project.slug
                    ? "bg-black text-white border-black"
                    : "bg-white text-black border-black/20 hover:border-black"
                }`}
              >
                {projectTab.locale[lang].title}
              </Link>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-6xl leading-tight mb-4">{content.title}</h1>
              <p className="text-lg md:text-xl text-black/70 mb-6">{content.subtitle}</p>
              <p className="text-base md:text-lg text-black/80 max-w-3xl">{content.description}</p>
            </div>
            <aside className="border border-black/15 rounded-2xl p-6 h-fit">
              <p className="text-xs uppercase tracking-widest text-black/50 mb-1">
                {lang === "pt" ? "Cliente" : "Client"}
              </p>
              <p className="text-lg font-medium mb-6">{content.client}</p>

              <p className="text-xs uppercase tracking-widest text-black/50 mb-3">
                {lang === "pt" ? "O que fizemos" : "What we did"}
              </p>
              <ul className="flex flex-wrap gap-2">
                {content.whatWeDid.map((item) => (
                  <li key={item} className="text-xs px-3 py-1 border border-black/20 rounded-full">
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition"
              >
                {lang === "pt" ? "Visitar projeto" : "Visit project"}
              </a>
            </aside>
          </div>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {project.media.map((media, index) => (
              <article
                key={`${media.type}-${index}`}
                className={`border border-black/10 rounded-2xl overflow-hidden bg-white ${
                  index % 3 === 0 ? "md:col-span-2" : ""
                }`}
              >
                {media.type === "image" ? (
                  <Image
                    src={media.src}
                    alt={media.alt}
                    className="w-full h-full object-cover aspect-[16/10]"
                  />
                ) : (
                  <div className="aspect-video">
                    <iframe
                      src={media.src}
                      title={media.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                )}
              </article>
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
