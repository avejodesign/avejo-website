"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import ShuffleText from "@/app/components/ShuffleText";
import Link from "next/link";

import Image from "next/image";
import { useRef } from "react";
import { useLanguage } from "@/app/i18n/LanguageContext";
import { projects } from "@/app/data/projects";

export const Works = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { t, lang } = useLanguage();

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom-=200",
                scrub: false,
            }
        });
        tl.from("#button-all-projects", {
            opacity: 0,
            x: -600,
            ease: "power4.inOut",
            duration: 2,
        }, 0).from(".works > div", {
            opacity: 0,
            y: 600,
            ease: "power4.inOut",
            duration: 2,
            stagger: 0.2,
        }, 0);
    }, [containerRef])


    return (
        <div ref={containerRef} className="container mx-auto py-[40px] md:py-[100px]" id="work-section">
            <div className="md:px-10">

                <div className="md:flex justify-between items-center mb-6 md:mb-16">
                    <ShuffleText as="h2" duration="1" className="shuffle-text xl:text-6xl text-4xl mb:mb-0 mb-4" stagger={0.02} >
                        {t.works.titleLine1}<br className="md:block hidden" />{t.works.titleLine2}
                    </ShuffleText>
                    <Link href="/contact" id="button-all-projects" className="md:block hidden text-black md:text-base text-sm py-3 px-6 border border-black rounded-full">{t.works.cta}</Link>
                </div>
                <div className="works grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-6 md:gap-y-14">
                    {projects.map((project) => (
                        <div key={project.slug} className="flex flex-col gap-2">
                            <Link href={`/projects/${project.slug}`} className="hover:opacity-90 transition">
                                <Image
                                    src={project.cover}
                                    alt={project.locale[lang].title}
                                    className="w-full aspect-[4/3] object-cover border border-black/10"
                                />
                            </Link>
                            <Link href={`/projects/${project.slug}`} className="hover:opacity-90 transition">
                                <h3 className="md:text-2xl text-1xl leading-tight">{project.locale[lang].title}</h3>
                            </Link>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="md:text-xs text-[10px] px-3 py-1 border border-black/20 rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    )
}