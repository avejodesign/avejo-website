"use client";

import Image, { StaticImageData } from "next/image";

import { Marquee } from "@/app/components/Marquee";
import ShuffleText from "@/app/components/ShuffleText";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Logo01 from "@/assets/clients-logo/logo-01.png";
import Logo02 from "@/assets/clients-logo/logo-02.png";
import Logo03 from "@/assets/clients-logo/logo-03.png";
import Logo04 from "@/assets/clients-logo/logo-04.png";
import Logo05 from "@/assets/clients-logo/logo-05.png";
import Logo06 from "@/assets/clients-logo/logo-06.png";
import Logo07 from "@/assets/clients-logo/logo-07.png";
import Logo08 from "@/assets/clients-logo/logo-08.png";

const IMAGES: StaticImageData[] = [Logo01, Logo02, Logo03, Logo04, Logo05, Logo06, Logo07, Logo08];

const ARRAY = [...IMAGES];

export const Clients = () => {
    useGSAP(() => {
        gsap.from("#clients img", {
            opacity: 0,
            ease: "power4.out",
            stagger: 0.15,
            scrollTrigger: {
                trigger: "#clients",
                start: "top bottom",
                scrub: false,
            }
        })
    }, []);

    return (
        <div className="bg-black overflow-hidden py-20" id="clients">
            <div className="container md:px-10">
                <ShuffleText as="h3" duration="1" className="shuffle-text xl:text-4xl text-2xl text-white mb-10" stagger={0.005} >
                Alguns de nossos clientes
                </ShuffleText>
            </div>
            <div 
                className="md:w-[2040px] mx-auto"
                style={{  maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)" }}>
                <Marquee isReversed={true} duration={20}>
                    {ARRAY.map((src, index) => (
                        <div
                            className="relative flex shrink-0 items-center justify-content"
                            key={index}
                            style={{ width: src.width, height: src.height}}
                        >
                            <Image style={{ width: src.width, height: src.height}} src={src} alt="Projetos" className="object-contain md:w-full w-52 md:p-2 p-1" />
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    )
}