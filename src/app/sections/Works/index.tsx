"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import ShuffleText from "@/app/components/ShuffleText";

import Image from "next/image";
import Project01 from "@/assets/projects-images/image-01.png";
import Project02 from "@/assets/projects-images/image-02.png";
import Project03 from "@/assets/projects-images/image-03.png";
import Project04 from "@/assets/projects-images/image-04.png";
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
            stagger: 0.5,
        }, 0);
    }, [containerRef])


    return (
        <div ref={containerRef} className="container mx-auto py-[100px]" id="work-section">
            <div className="md:px-10">

                <div className="md:flex justify-between items-center mb-16">
                    <ShuffleText as="h2" duration="1" className="shuffle-text xl:text-6xl text-2xl mb:mb-0 mb-4" stagger={0.02} >
                        Projetos criados
                    </ShuffleText>
                    <button id="button-all-projects" className="text-black md:text-base text-sm py-3 px-6 border border-black rounded-full">Todos os projetos</button>
                </div>
                <div className="works lg:flex gap-8 md:mb-10 mb-6">
                    <div className="lg:w-96 flex flex-col gap-2 mb-6">
                        <a href="https://www.behance.net/gallery/164119901/Delivery-App-UXUI-Design" target="_blank" className="hover:opacity-90 transition">
                            <Image src={Project01} alt="" className="w-full object-fit" />
                        </a>
                        <a href="https://www.behance.net/gallery/164119901/Delivery-App-UXUI-Design" target="_blank" className="hover:opacity-90 transition">
                            <h3 className="md:text-2xl text-xl">Getfood - Aplicativo de delivery</h3>
                        </a>
                        <div className="flex flex-wrap gap-3">
                            <span className="border border-gray-300 rounded-full py-1 px-3 text-sm">App Design</span>
                            <span className="border border-gray-300 rounded-full py-1 px-3 text-sm">UX/UI Design</span>
                        </div>
                    </div>
                    <div className="flex-auto flex flex-col gap-2">
                        <a href="https://www.behance.net/gallery/161875863/Gametrim-Tournament-Game-PC-Mobile-Web-UXUI" target="_blank" className="hover:opacity-90 transition">
                            <Image src={Project02} alt="" className="w-full object-fit" />
                        </a>
                        <a href="https://www.behance.net/gallery/161875863/Gametrim-Tournament-Game-PC-Mobile-Web-UXUI" target="_blank" className="hover:opacity-90 transition">
                            <h3 className="md:text-2xl text-xl">Gametrim - Torneios de jogos</h3>
                        </a>
                        <div className="flex flex-wrap gap-3">
                            <span className="border border-gray-300 rounded-full py-1 px-3 text-sm">Web Design</span>
                            <span className="border border-gray-300 rounded-full py-1 px-3 text-sm">App Design</span>
                            <span className="border border-gray-300 rounded-full py-1 px-3 text-sm">UX/UI Design</span>
                        </div>
                    </div>
                </div>
                <div className="works lg:flex gap-8">
                    <div className="flex-auto flex flex-col gap-2 mb-6">
                        <a href="https://mytech-platform.netlify.app/" target="_blank" className="hover:opacity-90 transition">
                            <Image src={Project03} alt="" className="w-full object-fit" />
                        </a>
                        <a href="https://mytech-platform.netlify.app/" target="_blank" className="hover:opacity-90 transition">
                            <h3 className="md:text-2xl text-xl">Mytech - Plataforma de serviços para blockchain</h3>
                        </a>
                        <div className="flex flex-wrap gap-3">
                            <span className="border border-gray-300 rounded-full py-1 px-3 text-sm">React.js</span>
                            <span className="border border-gray-300 rounded-full py-1 px-3 text-sm">Next.js</span>
                            <span className="border border-gray-300 rounded-full py-1 px-3 text-sm">GSAP</span>
                            <span className="border border-gray-300 rounded-full py-1 px-3 text-sm">Web Design</span>
                            <span className="border border-gray-300 rounded-full py-1 px-3 text-sm">UX/UI Design</span>
                        </div>
                    </div>
                    <div className="lg:w-96 flex flex-col gap-2">
                        <a href="https://www.behance.net/gallery/161875863/Gametrim-Tournament-Game-PC-Mobile-Web-UXUI" target="_blank" className="hover:opacity-90 transition">
                            <Image src={Project04} alt="" className="w-full object-fit" />
                        </a>
                        <a href="https://www.behance.net/gallery/161875863/Gametrim-Tournament-Game-PC-Mobile-Web-UXUI" target="_blank" className="hover:opacity-90 transition">
                            <h3 className="md:text-2xl text-xl">Exchange Crypto App</h3>
                        </a>
                        <div className="flex flex-wrap gap-3">
                            <span className="border border-gray-300 rounded-full py-1 px-3 text-sm">App Design</span>
                            <span className="border border-gray-300 rounded-full py-1 px-3 text-sm">UX/UI Design</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}