"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import ShuffleText from "@/app/components/ShuffleText";
import { Modal } from "./modal";

const projects = [
    {
        title: "Design de Produtos",
        description: "Da concepção à execução, desenvolvemos interfaces e experiências que impulsionam produtos digitais.",
    },
    {
        title: "Desenvolvimento web",
        description: "Construímos sites e aplicações web, focados em segurança, escalabilidade e experiência do usuário. ",
    },
    {
        title: "UX/UI Design",
        description: "Nossos designs são pensados para aumentar a conversão e retenção aplicando usabilidade e interatividade.",
    },
    {
        title: "Low/no Code",
        description: "Ferramentas como Wordpress e Framer são rápidas e eficientes, para lançamentos de MVPs e produtos digitais. ",
    },
]

export const MyServices = () => {
    const [ modal, setModal ] = useState<{ active: boolean; index: number }>({active: false, index: 0})
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from("#services .service", {
            opacity: 0,
            x: -400,
            ease: "power4.out",
            duration: 1,
            stagger: 0.5,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom-=200",
                scrub: false,
            },
        })
    }, [containerRef]);

    return (
        <div className="bg-black z-50" ref={containerRef} id="services-section">
            <div className="container mx-auto md:py-[100px] py-[40px]">
                <div className="md:px-10">
                    <div className="md:flex justify-between items-center mb:mb-16 mb-8">
                        <ShuffleText as="h2" duration="1" className="shuffle-text xl:text-4xl text-3xl text-white mb:mb-0 mb-4" stagger={0.02}>
                            Nossos serviços
                        </ShuffleText>
                        <ShuffleText as="p" duration="1" className="shuffle-text text-sm text-gray-400" stagger={0.005}>
                            *Passe o mouse
                        </ShuffleText>
                    </div>
                    {/* Services */}
                    <div id="services" >
                        {projects.map((project, index) => {
                            return (
                                <div 
                                    className="service" 
                                    key={index}
                                    onMouseEnter={() => {setModal({active: true, index})}} 
                                    onMouseLeave={() => {setModal({active: false, index})}} 
                                >
                                    <div className="
                                        md:flex justify-between md:text-gray-500 text-white
                                        border border-x-[0] border-b-[0] border-gray-600 
                                        md:py-14
                                        py-8
                                        text-gray-400 
                                        hover:text-white hover:cursor-pointer
                                        transition duration-200 ease-in-out
                                    ">
                                        <div className="md:flex lg:w-full md:mb-0 mb-4">
                                            <span className="text-xl md:mr-32 mb-4">{"0" + (index + 1)}</span>
                                            <h3 className="md:text-3xl text-2xl ">{project.title}</h3>
                                        </div>
                                        <div className="lg:w-3/4 w-full">
                                            <p className="text-sm font-medium">{project.description}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                        <Modal modal={modal} />
                    </div>
                </div>
            </div>
        </div>
    )
}