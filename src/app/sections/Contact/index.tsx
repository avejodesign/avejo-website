"use client";

import { useRef } from "react";

import Image from "next/image";

import LogoBg from "@/assets/contact-images/logo-bg.png";
import ArrowDiagonal from "@/assets/arrow-diagonal.svg";

import ShuffleText from "@/app/components/ShuffleText";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

export const Contact = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom-=200",
                scrub: false,
            }
        });
        tl.from("#social-media-group .social-media", {
            opacity: 0,
            x: -300,
            ease: "power4.out",
            duration: 1,
            stagger: 0.05,
        }, 1).from("#button-contact", {
            opacity: 0,
            y: 300,
            ease: "power4.out",
            duration: 1,
        }, 1)
    }, [containerRef]);

    return (
        <div className="relative" ref={containerRef} id="contact-section">
            <div className="container mx-auto">
                <div className="lg:flex justify-between items-end md:px-10 md:py-48 py-20">
                    <div className="w-full md:block flex flex-col-reverse">
                        <ShuffleText as="h2" duration="1" className="shuffle-text lg:text-6xl md:text-4xl text-3xl text-black lg:mr-64 mb-6" stagger={0.02}>
                        Quer dar início ao seu projeto agora mesmo?
                        </ShuffleText>
                        <div className="flex flex-wrap gap-4" id="social-media-group">
                            <div className="social-media">
                                <a href="https://www.dribbble.com/avejodesign" className="flex items-center text-sm text-black font-medium hover:opacity-60 transition duration-100">Dribbble <ArrowDiagonal /></a>
                            </div>
                            <div className="social-media">
                                <a href="https://www.behance.net/avejodesign" className="flex items-center text-sm text-black font-medium hover:opacity-60 transition duration-100">Behance <ArrowDiagonal /></a>
                            </div>
                            <div className="social-media">
                                <a href="https://www.instagram.com/avejodesign/" className="sm:flex items-center text-sm text-black font-medium hover:opacity-60 transition duration-100  hidden">Instagram <ArrowDiagonal /></a>
                            </div>
                            <div className="social-media">
                                <a href="https://www.linkedin.com/company/avejodesign" className="flex items-center text-sm text-black font-medium hover:opacity-60 transition duration-100">Linkedin <ArrowDiagonal /></a>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 w-full">
                        <Image src={LogoBg} alt="" className="md:block hidden absolute right-0 top-0 h-full z-[-1]"/>
                        <ShuffleText as="p" duration="1" className="shuffle-text md:text-base text-sm font-medium mb-6" stagger={0.005}>
                            Nos envie seu orçamento com seus dados e as informações de seu projeto para começarmos!
                        </ShuffleText>
                        <Link href="/contact">
                            <button className="bg-black text-white md:text-base text-sm py-3 px-6 rounded-full" id="button-contact">Entrar em contato</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}