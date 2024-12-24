"use client"

import React from "react";
import { FlipWords } from "../ui/flip-words";
import Image from "next/image";
import pfp from "../../../public/images/profile.jpeg";
import moveUp from "@/hooks/animations/moveUp"
import { motion } from "framer-motion";

export function About() {
    const words = ["chess", "painting", "piano"];
    const {ref, controls} = moveUp();

    return (
        <div className="h-auto flex flex-col px-4 py-20 scroll-smooth" id="about">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                className="text-center"
            >
                <h1
                    className="text-6xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-10">
                    About me
                </h1>
            </motion.div>
            <div className="px-6 min-[480px]:px-10 flex flex-col items-center justify-center gap-4">
                <div className="mt-12 ">
                    <Image
                        src={pfp}
                        width={200}
                        height={200}
                        alt="me"
                        className="rounded-full shadow-lg object-cover"
                    />
                </div>

                <div className="text-xl mt-12 mb-10 text-neutral-500 dark:text-neutral-300 leading-relaxed min-[800px]:px-14 mx-auto">
                    <p>
                        I am a Computer Science and Engineering undergrad at NIT Jamshedpur with a strong passion for collaboration and innovation. I thrive in environments where I can work with others to create impactful solutions, believing that the best ideas often come from teamwork. I actively contribute to open-source projects, finding immense satisfaction in being part of a global community that works together to solve challenges. I am always eager to learn from others, share my knowledge, and build something meaningful alongside like-minded individuals, whether through coding, problem-solving, or developing new ideas that push the boundaries of what&apos;s possible.
                    </p>
                </div>
            </div>

            <div className="text-sm min-[420px]:text-xl min-[520px]:text-2xl ml-4 min-[520px]:ml-10 min-[800px]:px-14 mt-5 font-normal text-neutral-600 dark:text-neutral-400">
                Otherwise, just obsessed with
                <FlipWords words={words}/> <br />
                when I&apos;m tired of development.
            </div>
        </div>
    );
}
