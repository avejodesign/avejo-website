"use client"

import {  useRef} from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

type Props = {
    as?: React.ElementType,
    className?: string,
    stagger?: number,
    duration?: string,
    delay?: string,
    children?: React.ReactNode,
    triggerOnScroll?: boolean,
}

export default function ShuffleText({ 
    className = "",
    as: Container = "div",
    stagger,
    duration,
    delay = "",
    children,
    ...props
}: Props) {

    const containerRef = useRef<HTMLDivElement>(null);
    
    

    
    
    useGSAP(() => {
        

        if(containerRef.current) {
            const SPLIT = SplitType.create(containerRef.current, { types: "lines,chars", wordClass: "words" });
            gsap.from(SPLIT.chars, {
                delay: delay,
                y: 200,
                ease: "power4.out",
                duration: duration,
                stagger: stagger,
                scrollTrigger: {
                    trigger: SPLIT.chars,
                    start: "top bottom",
                    scrub: false,
                }
            });
        }
    }, [children]);

    return (
        <Container 
            ref={containerRef}
            className={className}
            {...props}
        >
            {children}
        </Container>
    )
}