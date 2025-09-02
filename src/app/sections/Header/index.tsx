"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { useLenis } from "lenis/react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Logo from "@/assets/logo.svg";
import Menu from "@/assets/menu.svg";
import { ButtonComponent } from "@/app/components/ButtonComponent";

gsap.registerPlugin(useGSAP);

export const Header = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const lenis = useLenis();
    const [open, setOpen] = useState(false);
    const panelRef = useRef<HTMLDivElement>(null);
    const tl = useRef<gsap.core.Timeline>(null);

    useGSAP(() => {
        if (containerRef.current) {
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
            }, 0).set(panelRef.current, {
                scaleX: 0,
                scaleY: 0,
                transformOrigin: "50% 50%",
            });

            gsap.set(panelRef.current, {
                webkitClipPath: "inset(0 0 100% 0)",
                clipPath: "inset(0 0 100% 0)",
                willChange: "clip-path",
                pointerEvents: "none",
                overflow: "hidden",             // ajuda a não "vazar" conteúdo
            });

            // timeline do menu
            tl.current = gsap.timeline({ paused: true, defaults: { ease: "power3.out" } })
                .set(panelRef.current, { pointerEvents: "auto" }, 0)
                .to(panelRef.current, {
                    webkitClipPath: "inset(0 0 0% 0)", // revela até o final (top→bottom)
                    clipPath: "inset(0 0 0% 0)",
                    duration: 0.4
                }, 0);
        }
    }, [containerRef]);

    const toggleMenu = () => {
        if (!tl.current) return;
        if (!open) {
            // garante que não ficou nenhum scale herdado por engano
            gsap.set(panelRef.current, { scaleX: 1, scaleY: 1 });
            tl.current.play(0);
        } else {
            tl.current.reverse().eventCallback("onReverseComplete", () => {
                gsap.set(panelRef.current, { pointerEvents: "none" });
            });
        }
        setOpen(v => !v);
    };

    return (
        <nav className="fixed z-50">
            <div ref={containerRef} className="overflow-hidden fixed container z-10 top-4" style={{ left: "50%", transform: "translateX(-50%)" }}>
                <div className="md:px-10 md:h-auto h-[calc(100vh_-_2rem)]">
                    <div className="md:py-6 py-4 md:px-12 px-6 bg-white border border-gray-200 rounded-full flex justify-between">
                        <div>
                            <Link href="/">
                                <Logo className="scale-[0.8] md:scale-[1]" />
                            </Link>
                        </div>
                        <ul className="md:flex hidden gap-10 " id="menu-links">
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
                        <Menu className="md:hidden md:scale-[1] scale-[0.8]" onClick={toggleMenu} />
                        {/* <div className="flex items-center gap-4">
                        </div> */}
                    </div>
                    <div ref={panelRef} className="md:hidden bg-white border border-gray-200 rounded-[20px] mt-2 px-6 py-6 h-[calc(100%_-_72px)] flex flex-col justify-between" style={{ boxShadow: "0px 4px 17.5px rgba(0, 0, 0, 0.06)" }}>

                        <ul className="gap-4 flex flex-col mb-6 mt-2">
                            <li className="cursor-pointer text-xl font-medium hover:opacity-60 transition-opacity" onClick={() => {
                                lenis?.scrollTo("#about-section");
                            }}>Sobre</li>
                            <li className="cursor-pointer text-xl font-medium hover:opacity-60 transition-opacity" onClick={() => {
                                lenis?.scrollTo("#button-about");
                            }}>Clientes</li>
                            <li className="cursor-pointer text-xl font-medium hover:opacity-60 transition-opacity" onClick={() => {
                                lenis?.scrollTo("#work-section");
                            }}>Projetos</li>
                            <li className="cursor-pointer text-xl font-medium hover:opacity-60 transition-opacity" onClick={() => {
                                lenis?.scrollTo("#services-section");
                            }}>Serviços</li>
                            <li className="cursor-pointer text-xl font-medium hover:opacity-60 transition-opacity" onClick={() => {
                                lenis?.scrollTo("#contact-section");
                            }}>Contato</li>
                            <Link href="/contact">
                                <ButtonComponent onClick={() => null}>Contate-nos</ButtonComponent>
                            </Link>
                        </ul>
                        <div className="flex flex-col gap-4">
                            <div >
                                <a href="https://www.dribbble.com/avejodesign" className="flex items-center text-sm text-black font-medium hover:opacity-60 transition duration-100 gap-2">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.0003 1.66667C14.6028 1.66667 18.3337 5.3975 18.3337 10C18.3337 14.6025 14.6028 18.3333 10.0003 18.3333C5.39783 18.3333 1.66699 14.6025 1.66699 10C1.66699 5.3975 5.39783 1.66667 10.0003 1.66667ZM11.3478 11.6533C9.22365 12.2788 7.36659 13.5905 6.06699 15.3833C7.20775 16.2195 8.58592 16.6692 10.0003 16.6667C10.8655 16.6672 11.7226 16.4994 12.5237 16.1725C12.2606 14.6352 11.8672 13.1231 11.3478 11.6525V11.6533ZM12.9962 11.3175C13.4395 12.6033 13.7962 13.93 14.0578 15.2908C15.2806 14.3536 16.1411 13.0217 16.4928 11.5217C15.3481 11.2501 14.1647 11.181 12.9962 11.3175ZM10.2928 9.09333C8.06308 9.88012 5.68605 10.1602 3.33449 9.91333L3.33366 10C3.33366 11.6058 3.90199 13.0792 4.84783 14.23C6.32792 12.2654 8.39032 10.818 10.7412 10.0942C10.5984 9.75789 10.4489 9.42449 10.2928 9.09417V9.09333ZM15.407 6.09917C14.3279 7.04197 13.1258 7.83392 11.8337 8.45333C12.0287 8.87 12.2142 9.29139 12.3903 9.7175C13.807 9.50083 15.2653 9.54583 16.6653 9.85167C16.6375 8.50193 16.1985 7.19281 15.407 6.09917ZM7.14533 3.975C6.27434 4.38894 5.50326 4.98647 4.88501 5.72656C4.26676 6.46664 3.81599 7.33176 3.56366 8.2625C5.5765 8.46617 7.60963 8.23891 9.52783 7.59583C8.83016 6.32809 8.03352 5.11738 7.14533 3.975ZM10.0003 3.33333C9.59977 3.33333 9.20949 3.3675 8.82949 3.43583C9.6639 4.55675 10.4167 5.73617 11.082 6.965C12.2338 6.41672 13.3063 5.71538 14.2703 4.88C13.073 3.87872 11.5612 3.33113 10.0003 3.33333Z" fill="black" />
                                    </svg>

                                    Dribbble
                                </a>
                            </div>
                            <div >
                                <a href="https://www.behance.net/avejodesign" className="flex items-center text-sm text-black font-medium hover:opacity-60 transition duration-100 gap-2">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.8175 3.75C6.39375 3.75 6.92625 3.79375 7.415 3.925C7.9025 4.0125 8.30375 4.195 8.66 4.41375C9.01625 4.6325 9.28125 4.94625 9.46125 5.3475C9.63625 5.7475 9.73125 6.23625 9.73125 6.76875C9.73125 7.38875 9.59875 7.92125 9.28625 8.32125C9.0175 8.72125 8.57875 9.07875 8.04 9.3425C8.7975 9.5625 9.37375 9.9625 9.725 10.495C10.0763 11.0275 10.3013 11.6912 10.3013 12.4487C10.3013 13.0687 10.17 13.6013 9.945 14.0463C9.72137 14.4947 9.38439 14.8769 8.9675 15.155C8.5675 15.4237 8.07875 15.6425 7.54625 15.775C7.0247 15.9131 6.48822 15.987 5.94875 15.995L0 16.0038V3.75H5.8175ZM5.46125 8.7225C5.94875 8.7225 6.34875 8.59125 6.6575 8.36625C6.965 8.14125 7.10125 7.745 7.10125 7.2575C7.10125 6.9875 7.0575 6.725 6.97 6.54875C6.87449 6.37068 6.73724 6.21841 6.57 6.105C6.38893 6.00556 6.19502 5.93153 5.99375 5.885C5.77375 5.84125 5.54875 5.84125 5.285 5.84125H2.7125V8.72875C2.7125 8.7225 5.46125 8.7225 5.46125 8.7225ZM5.5925 13.9637C5.86125 13.9637 6.125 13.92 6.35 13.8762C6.57 13.8325 6.795 13.7438 6.97 13.6063C7.145 13.4688 7.2825 13.3375 7.415 13.1187C7.5025 12.8987 7.59 12.63 7.59 12.3175C7.59 11.6975 7.415 11.2525 7.0575 10.94C6.70125 10.6712 6.2125 10.54 5.63625 10.54H2.7125V13.9575H5.59375L5.5925 13.9637ZM14.165 13.92C14.5217 14.2758 15.0542 14.4533 15.7625 14.4525C16.25 14.4525 16.695 14.32 17.0525 14.095C17.4075 13.8283 17.6283 13.5617 17.715 13.295H19.89C19.5325 14.3587 19 15.1163 18.2925 15.605C17.585 16.0488 16.7388 16.3125 15.7175 16.3125C15.0644 16.3165 14.4165 16.1955 13.8087 15.9563C13.2609 15.7541 12.7723 15.4181 12.3875 14.9787C11.976 14.5701 11.6705 14.0672 11.4975 13.5137C11.2787 12.9375 11.185 12.3175 11.185 11.6037C11.185 10.94 11.2725 10.3137 11.4975 9.7375C11.7225 9.1625 12.03 8.6725 12.4312 8.22875C12.8312 7.82875 13.32 7.47125 13.8525 7.25125C14.4461 7.01431 15.0796 6.89338 15.7187 6.895C16.4762 6.895 17.14 7.02625 17.7163 7.33875C18.2913 7.65125 18.7375 8.00375 19.0937 8.53625C19.45 9.02375 19.7138 9.6 19.895 10.2213C19.9825 10.8413 20.0263 11.4662 19.9825 12.175H13.545C13.545 12.9 13.8075 13.5625 14.165 13.92ZM16.965 9.255C16.6525 8.9425 16.1625 8.76625 15.5862 8.76625C15.1862 8.76625 14.8787 8.85375 14.61 8.98625C14.3412 9.11875 14.165 9.29875 13.99 9.47375C13.8268 9.64545 13.7181 9.86161 13.6775 10.095C13.6325 10.3138 13.59 10.495 13.59 10.67H17.585C17.4975 10.0125 17.2737 9.5675 16.965 9.255ZM13.0562 4.595H18.0288V5.79125H13.0562V4.595Z" fill="black" />
                                    </svg>

                                    Behance
                                </a>
                            </div>
                            <div >
                                <a href="https://www.instagram.com/avejodesign/" className="flex items-center text-sm text-black font-medium hover:opacity-60 transition duration-100 gap-2">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.50033 1.66667H13.5003C16.167 1.66667 18.3337 3.83333 18.3337 6.5V13.5C18.3337 14.7819 17.8244 16.0113 16.918 16.9177C16.0116 17.8241 14.7822 18.3333 13.5003 18.3333H6.50033C3.83366 18.3333 1.66699 16.1667 1.66699 13.5V6.5C1.66699 5.21812 2.17622 3.98874 3.08264 3.08232C3.98907 2.17589 5.21845 1.66667 6.50033 1.66667ZM6.33366 3.33333C5.53801 3.33333 4.77495 3.64941 4.21234 4.21201C3.64973 4.77462 3.33366 5.53768 3.33366 6.33333V13.6667C3.33366 15.325 4.67533 16.6667 6.33366 16.6667H13.667C14.4626 16.6667 15.2257 16.3506 15.7883 15.788C16.3509 15.2254 16.667 14.4623 16.667 13.6667V6.33333C16.667 4.675 15.3253 3.33333 13.667 3.33333H6.33366ZM14.3753 4.58333C14.6516 4.58333 14.9165 4.69308 15.1119 4.88843C15.3072 5.08378 15.417 5.34873 15.417 5.625C15.417 5.90127 15.3072 6.16622 15.1119 6.36157C14.9165 6.55692 14.6516 6.66667 14.3753 6.66667C14.0991 6.66667 13.8341 6.55692 13.6388 6.36157C13.4434 6.16622 13.3337 5.90127 13.3337 5.625C13.3337 5.34873 13.4434 5.08378 13.6388 4.88843C13.8341 4.69308 14.0991 4.58333 14.3753 4.58333ZM10.0003 5.83333C11.1054 5.83333 12.1652 6.27232 12.9466 7.05372C13.728 7.83512 14.167 8.89493 14.167 10C14.167 11.1051 13.728 12.1649 12.9466 12.9463C12.1652 13.7277 11.1054 14.1667 10.0003 14.1667C8.89526 14.1667 7.83545 13.7277 7.05405 12.9463C6.27265 12.1649 5.83366 11.1051 5.83366 10C5.83366 8.89493 6.27265 7.83512 7.05405 7.05372C7.83545 6.27232 8.89526 5.83333 10.0003 5.83333ZM10.0003 7.5C9.33728 7.5 8.7014 7.76339 8.23256 8.23223C7.76372 8.70107 7.50033 9.33696 7.50033 10C7.50033 10.663 7.76372 11.2989 8.23256 11.7678C8.7014 12.2366 9.33728 12.5 10.0003 12.5C10.6634 12.5 11.2993 12.2366 11.7681 11.7678C12.2369 11.2989 12.5003 10.663 12.5003 10C12.5003 9.33696 12.2369 8.70107 11.7681 8.23223C11.2993 7.76339 10.6634 7.5 10.0003 7.5Z" fill="black" />
                                    </svg>

                                    Instagram
                                </a>
                            </div>
                            <div >
                                <a href="https://www.linkedin.com/company/avejodesign" className="flex items-center text-sm text-black font-medium hover:opacity-60 transition duration-100 gap-2">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.78353 4.16666C5.78331 4.60869 5.6075 5.03252 5.29478 5.34493C4.98207 5.65733 4.55806 5.83272 4.11603 5.83249C3.674 5.83227 3.25017 5.65647 2.93776 5.34375C2.62536 5.03103 2.44997 4.60702 2.4502 4.16499C2.45042 3.72297 2.62622 3.29913 2.93894 2.98673C3.25166 2.67432 3.67567 2.49894 4.1177 2.49916C4.55972 2.49938 4.98356 2.67519 5.29596 2.98791C5.60837 3.30062 5.78375 3.72463 5.78353 4.16666ZM5.83353 7.06666H2.5002V17.5H5.83353V7.06666ZM11.1002 7.06666H7.78353V17.5H11.0669V12.025C11.0669 8.97499 15.0419 8.69166 15.0419 12.025V17.5H18.3335V10.8917C18.3335 5.74999 12.4502 5.94166 11.0669 8.46666L11.1002 7.06666Z" fill="black" />
                                    </svg>

                                    Linkedin
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    )
}