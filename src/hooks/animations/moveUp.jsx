"use client"

import { useEffect } from 'react'
import { useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const moveUp = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                y: 0,
                transition: { duration: 0.8 },
            });
        }
    }, [controls, inView]);

    return { ref, controls };
};

export default moveUp;
