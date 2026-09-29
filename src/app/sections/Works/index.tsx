"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import ShuffleText from "@/app/components/ShuffleText";

import Image, { StaticImageData } from "next/image";
import Project01 from "@/assets/projects-images/awam-agency-project-3.png";
import Project02 from "@/assets/projects-images/vertex-pure-matter.png";
import Project03 from "@/assets/projects-images/mytech-2.png";
import Project04 from "@/assets/projects-images/bankook-2.png";
import Project05 from "@/assets/projects-images/ooh-brasil-2.png";
import { useRef } from "react";
import { useLanguage } from "@/app/i18n/LanguageContext";

type Project = {
    href: string;
    image: StaticImageData;
    title: string;
    location: string;
    tags: string[];
    /** Posição/tamanho no desktop (grid de 12 colunas) */
    layout: string;
};

export const Works = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { t } = useLanguage();

    // Ordem e posições seguem o layout escalonado do design
    const projects: Project[] = [
        {
            // Linha 1 – esquerda, grande
            href: "https://oohbrasil.com.br/",
            image: Project05,
            title: t.works.items[0],
            location: "Belo Horizonte, Minas Gerais",
            tags: ["UX/UI Design", "Web Development", "GSAP", "Advertising", "Outdoor"],
            layout: "lg:col-span-6 lg:col-start-1 lg:row-start-1",
        },
        {
            // Linha 1 – direita, menor e deslocado para baixo
            href: "https://mytech-platform.netlify.app/",
            image: Project03,
            title: t.works.items[1],
            location: "New York, United States",
            tags: ["Web Development", "Crypto", "Blockchain"],
            layout: "lg:col-span-5 lg:col-start-7 lg:row-start-1 lg:mt-[210px] lg:ml-[30px]",
        },
        {
            // Linha 2 – centralizado, grande
            href: "https://awam.agency",
            image: Project01,
            title: t.works.items[2],
            location: "Berlin, Germany",
            tags: ["Marketing Agency", "Advertising", "Social Media"],
            layout: "lg:col-span-7 lg:col-start-3 lg:row-start-2",
        },
        {
            // Linha 3 – esquerda, menor
            href: "https://vertex-website.netlify.app/",
            image: Project02,
            title: t.works.items[3],
            location: "São Paulo, Brazil",
            tags: ["Web Development", "Architecture", "GSAP", "Swiss Design"],
            layout: "lg:col-span-5 lg:col-start-1 lg:row-start-3",
        },
        {
            // Linha 4 – deslocado para a direita
            href: "https://dribbble.com/shots/25702861-Bankook-Landing-page-para-banco-digital",
            image: Project04,
            title: t.works.items[4],
            location: "São Paulo, Brazil",
            tags: ["Landing Page", "Digital Bank", "GSAP", "Dashboard"],
            layout: "lg:col-span-7 lg:col-start-5 lg:row-start-4",
        },
    ];

    useGSAP(() => {
        const cards = gsap.utils.toArray<HTMLElement>(".works > div");
    
        cards.forEach((card) => {
            gsap.from(card, {
                opacity: 0,
                y: 120,
                ease: "power4.out",
                duration: 1.2,
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",        // dispara quando o topo do card chega a 85% da altura da viewport
                    toggleActions: "play none none none",
                    // once: true,           // opcional: garante que roda só uma vez
                },
            });
        });
    }, { scope: containerRef });

    return (
        <div
            ref={containerRef}
            className=" mx-auto py-[40px] md:py-[100px]"
            id="work-section"
        >
            <div className="container md:flex justify-between items-start mb-10 md:mb-16">
                <ShuffleText
                    as="h2"
                    duration="1"
                    className="shuffle-text xl:text-6xl text-4xl md:mb-0 mb-4"
                    stagger={0.02}
                >
                    {t.works.titleLine1}
                    <br className="md:block hidden" />
                    {t.works.titleLine2}
                </ShuffleText>
                <p className="max-w-[360px] text-sm font-semibold leading-snug md:pt-2">
                    {t.works.description}
                </p>
            </div>
            <div className="container-2xl">
                <div className="px-4 md:px-10">
                    {/* Cabeçalho: título à esquerda, descrição à direita */}

                    {/* Grid escalonado */}
                    <div className="works grid grid-cols-1 lg:grid-cols-12 gap-x-3 gap-y-10 lg:gap-y-16">
                        {projects.map((project, i) => (
                            <div
                                key={i}
                                className={`flex flex-col gap-2 self-start ${project.layout}`}
                            >
                                <a
                                    href={project.href}
                                    target="_blank"
                                    className="group relative block hover:opacity-90 transition"
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full aspect-[4/3] object-cover"
                                    />
                                    {/* Tags sobre a imagem, canto inferior esquerdo */}
                                    <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="md:text-sm text-[10px] px-3 py-1 text-white border border-white rounded-full backdrop-blur-sm bg-black/30"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </a>

                                <p className="mt-2 text-xs md:text-sm uppercase text-black/50">
                                    {project.location}
                                </p>
                                <a
                                    href={project.href}
                                    target="_blank"
                                    className="hover:opacity-90 transition"
                                >
                                    <h3 className="md:text-2xl text-xl leading-tight">
                                        {project.title}
                                    </h3>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};