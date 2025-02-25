"use client";
import { useRef } from "react";

import Logo from "@/assets/logo.svg";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLenis } from "lenis/react";
import Link from "next/link";

export const Footer = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const lenis = useLenis();

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom-=200",
                scrub: false,
            }
        });
        tl.from("#footer-up > *", {
            opacity: 0,
            y: 300,
            ease: "power4.out",
            duration: 1,
            stagger: 0.2,
        }, 0).from("#footer-down > *", {
            opacity: 0,
            y: 300,
            ease: "power4.out",
            duration: 1,
            stagger: 0.2,
        }, 0.5)
    }, [containerRef]);

    return (
        <footer ref={containerRef} className="overflow-hidden border border-x-0 border-b-0 border-gray-200">
            <div className="container mx-auto md:mt-24 mt-18 my-12">
                <div className="md:px-10">
                    <div className="flex md:mb-32 mb-12 md:flex-row flex-col md:gap-0 gap-10" id="footer-up">
                        <div className="md:flex-1">
                            <Logo className="mb-4"/>
                            <p className="text-base font-medium md:pr-32">Esteja pronto para o futuro junto conosco</p>
                        </div>
                        <div className="md:flex-1">
                            <h4 className="md:text-lg text-base font-[Poppins] font-medium mb-4">Empresa</h4>
                            <ul className="flex flex-col gap-4">
                                <li className="md:text-base text-sm font-medium text-gray-400 hover:text-black transition" onClick={() => {
                                    lenis?.scrollTo("#about-section"); 
                                }}>
                                    <a href="#">Sobre</a>
                                </li>
                                <li className="md:text-base text-sm font-medium text-gray-400 hover:text-black transition" onClick={() => {
                                    lenis?.scrollTo("#button-about"); 
                                }}>
                                    <a href="#" >Clientes</a>
                                </li>
                                <li className="md:text-base text-sm font-medium text-gray-400 hover:text-black transition" onClick={() => {
                                    lenis?.scrollTo("#work-section"); 
                                }}>
                                    <a href="#" >Projetos</a>
                                </li>
                                <li className="md:text-base text-sm font-medium text-gray-400 hover:text-black transition" onClick={() => {
                                    lenis?.scrollTo("#services-section"); 
                                }}>
                                    <a href="#" >Serviços</a>
                                </li>
                                <li className="cursor-pointer md:text-base text-sm font-medium text-gray-400 hover:text-black transition">
                                    <Link href="/contact">Contato</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="md:flex-1">
                            <h4 className="md:text-lg text-base  font-[Poppins] font-medium mb-4">Projetos relevantes</h4>
                            <ul className="flex flex-col gap-4">
                                <li className="md:text-base text-sm font-medium text-gray-400 hover:text-black transition">
                                    <a href="https://www.behance.net/gallery/164119901/Delivery-App-UXUI-Design" target="_blank" >Getfood</a>
                                </li>
                                <li className="md:text-base text-sm font-medium text-gray-400 hover:text-black transition">
                                    <a href="https://www.behance.net/gallery/161875863/Gametrim-Tournament-Game-PC-Mobile-Web-UXUI" target="_blank" >Gametrim</a>
                                </li>
                                <li className="md:text-base text-sm font-medium text-gray-400 hover:text-black transition">
                                    <a href="https://mytech-platform.netlify.app/" target="_blank" >Mytech</a>
                                </li>
                                <li className="md:text-base text-sm font-medium text-gray-400 hover:text-black transition">
                                    <a href="https://dribbble.com/shots/24464949-Exchange-Crypto-App-Web3" target="_blank">Exchange Crypto App</a>
                                </li>
                            </ul>
                        </div>
                        <div className="md:flex-1">
                            <h4 className="md:text-lg text-base font-[Poppins] font-medium mb-4">Contato</h4>
                            <ul className="flex flex-col gap-4">
                                <li className="md:text-base text-sm font-medium text-gray-400 hover:text-black transition">
                                    <a href="https://wa.me/5512991822358?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20conversar%20sobre%20um%20projeto%20com%20voc%C3%AAs!" >+55 (12) 99182-2358</a>
                                </li>
                                <li className="md:text-base text-sm font-medium text-gray-400 hover:text-black transition">
                                    <a href="mailto:avejo.design@gmail.com" >avejo.design@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:flex justify-between" id="footer-down">
                        <p className="md:text-base font-medium md:mb-0 mb-4">© Avejo 2025. Todos os direitos reservados</p>
                        <ul className="md:flex">
                            <li><a href="#" className="md:text-base text-sm font-medium text-gray-400 hover:text-black transition">Políticas de Privacidade</a></li>
                            <div className="mx-4 text-gray-400 md:block hidden">•</div>
                            <li><a href="#" className="md:text-base text-sm font-medium text-gray-400 hover:text-black transition">Políticas do Cookie</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}