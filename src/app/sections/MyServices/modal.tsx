"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";

import Image, { StaticImageData } from "next/image";

import Image01 from "@/assets/service-images/image-01.png";
import Image02 from "@/assets/service-images/image-02.png";
import Image03 from "@/assets/service-images/image-03.png";
import Image04 from "@/assets/service-images/image-04.png";

const ARRAYIMAGES: StaticImageData[] = [Image01, Image02, Image03, Image04];

type Props = {
    modal?: { active?: boolean, index?: number},
    projects?: { title?: string, description?: string, src: string }[] ,
}

const scaleAnimation = {
    initial: {scale: 0, x:"-50%", y:"-50%"},
    enter: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
    closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
}

import "./style.css";

export const Modal = ({modal}: Props) => {
    const { active, index } = modal || {active: false, index: 0};
    const modalContainer = useRef<HTMLDivElement>(null);
    const cursor = useRef<HTMLDivElement>(null);
    const cursorLabel = useRef<HTMLDivElement>(null);
    
    useGSAP( () => {
        const xMoveContainer = gsap.quickTo(modalContainer.current, "left", {duration: 0.8, ease: "power3"})
        const yMoveContainer = gsap.quickTo(modalContainer.current, "top", {duration: 0.8, ease: "power3"})
        //Move cursor
        const xMoveCursor = gsap.quickTo(cursor.current, "left", {duration: 0.5, ease: "power3"})
        const yMoveCursor = gsap.quickTo(cursor.current, "top", {duration: 0.5, ease: "power3"})
        //Move cursor label
        const xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {duration: 0.45, ease: "power3"})
        const yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {duration: 0.45, ease: "power3"})
        
        window.addEventListener('mousemove', (e) => {
            const { pageX, pageY } = e;
            xMoveContainer(pageX)
            yMoveContainer(pageY)
            xMoveCursor(pageX)
            yMoveCursor(pageY)
            xMoveCursorLabel(pageX)
            yMoveCursorLabel(pageY)
        })
    }, [])
    return (
        <>
            
            <motion.div ref={modalContainer} className="modalContainer " variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>
                <div style={{top: `${(index ?? 0) * -100 }%`}} className="modalSlider md:block hidden">
                    {
                        ARRAYIMAGES.map((image, index) => {
                            return  <div className="modal" key={index}>
                                <Image src={image}height={0} alt="image"/>
                            </div>
                        })
                    }
                </div>
            </motion.div>
        </>
    )
}