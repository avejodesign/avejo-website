"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import ShuffleText from "@/app/components/ShuffleText";

import Image from "next/image";
import Project01 from "@/assets/projects-images/awam-agency-project.png";
import Project02 from "@/assets/projects-images/vertex-pure-matter.png";
import Project03 from "@/assets/projects-images/mytech.png";
import Project04 from "@/assets/projects-images/bankook.png";
import { useRef } from "react";

export const Works = () => {
    const containerRef = useRef<HTMLDivElement>(null);

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
                        Selected<br className="md:block hidden" />Projects
                    </ShuffleText>
                    <a href="/contact" id="button-all-projects" className="md:block hidden text-black md:text-base text-sm py-3 px-6 border border-black rounded-full">Get in touch</a>
                </div>
                <div className="works grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-6 md:gap-y-14">
                    <div className="flex flex-col gap-2">
                        <a href="https://mytech-platform.netlify.app/" target="_blank" className="hover:opacity-90 transition">
                            <Image
                                src={Project01}
                                alt=""
                                className="w-full aspect-[4/3] object-cover border border-black/10"
                            />
                        </a>
                        <a href="https://mytech-platform.netlify.app/" target="_blank" className="hover:opacity-90 transition">
                            <h3 className="md:text-2xl text-1xl leading-tight">awam™ - German Marketing Agency</h3>
                        </a>
                        <div className="flex flex-wrap gap-2">
                            <span className="md:text-xs text-[10px] px-3 py-1 border border-black/20 rounded-full">GSAP</span>
                            <span className="md:text-xs text-[10px] px-3 py-1 border border-black/20 rounded-full">UX/UI Design</span>
                            <span className="md:text-xs text-[10px] px-3 py-1 border border-black/20 rounded-full">Webflow</span>
                            <span className="md:text-xs text-[10px] px-3 py-1 border border-black/20 rounded-full">Code Edition</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <a
                            href="https://www.behance.net/gallery/161875863/Gametrim-Tournament-Game-PC-Mobile-Web-UXUI"
                            target="_blank"
                            className="hover:opacity-90 transition"
                        >
                            <Image
                                src={Project02}
                                alt=""
                                className="w-full aspect-[4/3] object-cover border border-black/10"
                            />
                        </a>
                        <a
                            href="https://www.behance.net/gallery/161875863/Gametrim-Tournament-Game-PC-Mobile-Web-UXUI"
                            target="_blank"
                            className="hover:opacity-90 transition"
                        >
                            <h3 className="md:text-2xl text-1xl leading-tight">VERTEX - Brutalism Architecture</h3>
                        </a>
                        <div className="flex flex-wrap gap-2">
                            <span className="md:text-xs text-[10px] px-3 py-1 border border-black/20 rounded-full">UX/UI Design</span>
                            <span className="md:text-xs text-[10px] px-3 py-1 border border-black/20 rounded-full">Web</span>
                            <span className="md:text-xs text-[10px] px-3 py-1 border border-black/20 rounded-full">Mobile</span>
                            <span className="md:text-xs text-[10px] px-3 py-1 border border-black/20 rounded-full">Architecture</span>
                            <span className="md:text-xs text-[10px] px-3 py-1 border border-black/20 rounded-full">GSAP</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <a href="https://mytech-platform.netlify.app/" target="_blank" className="hover:opacity-90 transition">
                            <Image
                                src={Project03}
                                alt=""
                                className="w-full aspect-[4/3] object-cover border border-black/10"
                            />
                        </a>
                        <a href="https://mytech-platform.netlify.app/" target="_blank" className="hover:opacity-90 transition">
                            <h3 className="md:text-2xl text-1xl leading-tight">MYTECH - Blockchain Platform Exchange</h3>
                        </a>
                        <div className="flex flex-wrap gap-2">
                            <span className="md:text-xs text-[10px] px-3 py-1 border border-black/20 rounded-full">GSAP</span>
                            <span className="md:text-xs text-[10px] px-3 py-1 border border-black/20 rounded-full">UX/UI Design</span>
                            <span className="md:text-xs text-[10px] px-3 py-1 border border-black/20 rounded-full">Web</span>
                            <span className="md:text-xs text-[10px] px-3 py-1 border border-black/20 rounded-full">Mobile</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <a
                            href="https://www.behance.net/gallery/161875863/Gametrim-Tournament-Game-PC-Mobile-Web-UXUI"
                            target="_blank"
                            className="hover:opacity-90 transition"
                        >
                            <Image
                                src={Project04}
                                alt=""
                                className="w-full aspect-[4/3] object-cover border border-black/10"
                            />
                        </a>
                        <a
                            href="https://www.behance.net/gallery/161875863/Gametrim-Tournament-Game-PC-Mobile-Web-UXUI"
                            target="_blank"
                            className="hover:opacity-90 transition"
                        >
                            <h3 className="md:text-2xl text-1xl leading-tight">Bankook - Landing Page for Digital Bank</h3>
                        </a>
                        <div className="flex flex-wrap gap-2">
                            <span className="md:text-xs text-[10px] px-3 py-1 border border-black/20 rounded-full">UX/UI Design</span>
                            <span className="md:text-xs text-[10px] px-3 py-1 border border-black/20 rounded-full">Web</span>
                            <span className="md:text-xs text-[10px] px-3 py-1 border border-black/20 rounded-full">Landing Page</span>
                            <span className="md:text-xs text-[10px] px-3 py-1 border border-black/20 rounded-full">Bank</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}