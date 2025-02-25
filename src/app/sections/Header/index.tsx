"use client";

import Link from "next/link";
import { useRef} from "react";
import { useLenis } from "lenis/react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Logo from "@/assets/logo.svg";
import Menu from "@/assets/menu.svg";

export const Header = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const lenis = useLenis();

    useGSAP(() => {
        if(containerRef.current) {
            gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    scrub: false,
                }
            }).from(containerRef.current, {
                opacity: 0,
                y: -400,
                duration: 2,
                ease: "power4.out",
            }, 0).from("#menu-links li", {
                y: -400,
                duration: 1.2,
                stagger: 0.05,
                ease: "power4.out",
            }, 0);
        }
    }, [containerRef])

    return (
        <nav  className="fixed z-50" style={{ transform: "initial !important" }}>
            <div ref={containerRef}className="overflow-hidden fixed container z-10 top-4" style={{ left: "50%", transform: "translateX(-50%)" }}>
                <div className="md:px-10">
                    <div className="py-6 md:px-12 px-6 bg-white border border-gray-200 rounded-full flex justify-between">
                        <div>
                            <Link href="/">
                                <Logo />
                            </Link>
                        </div>
                        <div className="md:flex hidden">
                            <ul className="md:flex gap-10" id="menu-links">
                                <li className="cursor-pointer text-base font-medium hover:opacity-60 transition-opacity" onClick={() => {
                                    lenis?.scrollTo("#about-section"); 
                                }}>Sobre</li>
                                <li className="cursor-pointer text-base font-medium hover:opacity-60 transition-opacity" onClick={() => {
                                    lenis?.scrollTo("#button-about"); 
                                }}>Clientes</li>
                                <li className="cursor-pointer text-base font-medium hover:opacity-60 transition-opacity" onClick={() => {
                                    lenis?.scrollTo("#work-section"); 
                                }}>Projetos</li>
                                <li className="cursor-pointer text-base font-medium hover:opacity-60 transition-opacity" onClick={() => {
                                    lenis?.scrollTo("#services-section"); 
                                }}>Serviços</li>
                                <li className="text-base font-medium hover:opacity-60 transition-opacity"><Link href="/contact">Contato</Link></li>
                            </ul>
                        </div>
                        <Menu className="md:hidden"/>
                    </div>
                </div>
            </div>
        </nav>
    )
}