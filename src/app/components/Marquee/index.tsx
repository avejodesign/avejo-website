"use client";

import React, { ReactNode, useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// const IMAGES: StaticImageData[] = [ Image01, Image02, Image03, Image04, Image01, Image02, Image03, Image04 ];
// const IMAGES2: StaticImageData[] = [ Image05, Image06, Image07, Image08,  Image05, Image06, Image07, Image08 ];

// const ARRAY = [...IMAGES, ...IMAGES];
// const ARRAY2 = [...IMAGES2, ...IMAGES2];

type Props = {
    isReversed?: boolean,
    duration?: number,
    children?: ReactNode,
}
export const Marquee = ({ isReversed = false, duration , children } : Props) => {
    const movingContainer = useRef<HTMLDivElement>(null);
    const timeline = useRef<GSAPTimeline>(null);
    
    useGSAP(() => {
        const setupInfiniteMarqueeTimeline = () => {
            timeline.current?.kill();
            gsap.set(movingContainer.current, {
                xPercent: isReversed ? -50 : 0,
            });
            timeline.current = gsap.timeline({
                defaults: { ease: "none", repeat: -1 }
            })
            .to(movingContainer.current, {
                xPercent: isReversed ? 0 : -50,
                duration: duration,
            })
            .set(movingContainer.current, { x: 0 });

        }

        setupInfiniteMarqueeTimeline();
    }, {
        dependencies: [isReversed]
    })

    const timelineTimeScaleTween = useRef<GSAPTween>(null)

    const onPointerEnter = () => {
        if(!timeline.current) return; 
        timelineTimeScaleTween.current?.kill();
        timelineTimeScaleTween.current = gsap.to(timeline.current, { timeScale: 0.24, duration: 0.4 })
    }

    const onPointerLeave = () => {
        if(!timeline.current) return; 
        timelineTimeScaleTween.current?.kill();
        timelineTimeScaleTween.current = gsap.to(timeline.current, { timeScale: 1, duration: 0.2 })
    }

    return (
        <div 
            ref={movingContainer} 
            className="flex w-fit"
            onPointerEnter={onPointerEnter}
            onPointerLeave={onPointerLeave}
            >
            <div className="flex w-fit items-center gap-2 mb-2">
                {children}
                {children}
            </div>
        </div>
    )
}