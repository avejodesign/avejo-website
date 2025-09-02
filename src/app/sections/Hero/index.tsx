"use client";

import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Image, { StaticImageData } from "next/image";

import ShuffleText from "@/app/components/ShuffleText";

import Image01 from "../../../assets/hero-images/image-01.png";
import Image02 from "@/assets/hero-images/image-02.png";
import Image03 from "@/assets/hero-images/image-03.png";
import Image04 from "@/assets/hero-images/image-04.png";
import Image05 from "@/assets/hero-images/image-05.png";
import Image06 from "@/assets/hero-images/image-06.png";
import Image07 from "@/assets/hero-images/image-07.png";
import Image08 from "@/assets/hero-images/image-08.png";

const IMAGES: StaticImageData[] = [Image01, Image02, Image03, Image04, Image01, Image02, Image03, Image04];
const IMAGES2: StaticImageData[] = [Image05, Image06, Image07, Image08, Image05, Image06, Image07, Image08];

const ARRAY: StaticImageData[] = [...IMAGES, ...IMAGES];
const ARRAY2: StaticImageData[] = [...IMAGES2, ...IMAGES2];

import { Marquee } from "@/app/components/Marquee";
import { useLenis } from "lenis/react";
import { ButtonComponent } from "@/app/components/ButtonComponent";

export const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const lenis = useLenis();

    useGSAP(() => {
        if(containerRef.current) {
            gsap.timeline().from("#button-hero", {
                opacity: 0,
                y: 400,
                duration: 1.5,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    scrub: false,
                }
            },0).from("#portfolio-hero", {
                duration: 2,
                ease: "power4.out",
                clipPath: "inset(100% 100% 100% 100%)"
            }, 0.5);
        }
    }, [containerRef])

    return (
        <header ref={containerRef} className="overflow-hidden">
            <div className="container mx-auto">
                <div className="md:flex md:justify-between md:align-end place-content-end md:pt-80 pt-40 md:px-10">
                    <div className="md:w-1/2 w-full">
                        <ShuffleText as="h1" duration="1" className="shuffle-text xl:text-6xl md:text-6xl text-3xl md:mb-0 mb-4" stagger={0.03} >
                            Construindo e inovando no mundo da tecnologia
                        </ShuffleText>
                    </div>
                    <div className="block">
                        <ShuffleText as="p" duration="1" className="shuffle-text md:text-base text-sm pb-6 size-fit font-medium" stagger={0.02}>
                            Criamos experiências digitais para projetos <br className="md:block hidden" />inovadores e consistentes, com foco no <br className="md:block hidden"/>crescimento de nossos clientes.
                        </ShuffleText>
                        <ButtonComponent id="button-hero" onClick={() => lenis?.scrollTo("#about-section")}>Conhecer mais</ButtonComponent>
                    </div>
                </div>
            </div>
            <div className="bg-black mt-24 overflow-hidden md:w-[2040px] w-full mx-auto" id="portfolio-hero">
                <div className="rotate-[-4deg] md:scale-[0.6] scale-[0.35] md:-translate-y-[30%] -translate-y-[40%]  md:h-[700px] h-[400px]">
                    <Marquee duration={60} isReversed={false}>
                        {ARRAY.map((src, index) => (
                            <div
                                className="relative flex shrink-0 items-center justify-content"
                                key={index}
                                style={{ width: src.width, height: src.height }}
                            >
                                <Image src={src} alt="Projetos" style={{ width: src.width, height: src.height }} className="object-contain w-96" />
                            </div>
                        ))}
                    </Marquee>
                    <Marquee duration={60} isReversed={true}>
                        {ARRAY2.map((src, index) => (
                            <div
                                className="relative flex shrink-0 items-center justify-content"
                                key={index}
                                style={{ width: src.width, height: src.height }}
                            >
                                <Image src={src} alt="Projetos" style={{ width: src.width, height: src.height }} className="object-contain w-96" />
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </header>
    )
}
