"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Logo from "@/assets/logo-about.svg";

import ShuffleText from "@/app/components/ShuffleText";
import { useRef } from "react";
import Link from "next/link";
import { ButtonComponent } from "@/app/components/ButtonComponent";
import { useLanguage } from "@/app/i18n/LanguageContext";

export const About = () => {

    const containerRef = useRef<HTMLDivElement>(null);
    const { t } = useLanguage();

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom-=200",
                scrub: false,
            }
        });
        tl.from("#button-about", {
            opacity: 0,
            y: 200,
            ease: "power4.out",
            duration: 1,
        }, 1).from("#line-about", {
            width: 0,
            ease: "power4.out",
            duration: 2,
        }, 0).from("#logo-about", {
            rotation: 360,
            ease: "power4.out",
            duration: 2,
        }, 0)
    }, [containerRef])
    return (
        <div ref={containerRef} className="container mx-auto md:py-[100px] py-[50px]" id="about-section">
            <div className="md:px-10">
                <div className="flex items-center justify-center mb-10">
                    <div className="p-4 rounded-full border-gray-300 border">
                        <Logo id="logo-about"/>
                    </div>
                    <div className="w-full h-px bg-gray-300" id="line-about"></div>
                </div>
                <div className="md:w-[700px] ml-auto md:pr-[100px] w-full">
                    <ShuffleText as="h2" duration="1" className="shuffle-text xl:text-4xl md:text-2xl text-2xl mb-6" stagger={0.03} >
                    {t.about.title}
                    </ShuffleText>
                    <ShuffleText as="p" duration="1" className="shuffle-text md:text-base text-sm text-gray-600 mb-6" stagger={0.03} >
                    {t.about.description}
                    </ShuffleText>
                    <Link href="/contact">
                        <ButtonComponent id="button-about" onClick={() => null}>{t.about.cta}</ButtonComponent>
                    </Link>
                </div>
            </div>
        </div>
    )
}