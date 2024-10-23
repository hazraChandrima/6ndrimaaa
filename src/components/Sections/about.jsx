import React from "react";
import { FlipWords } from "../ui/flip-words";
import Image from "next/image";
import pfp from "@/assets/images/profile.jpeg";

export function About() {
    const words = ["chess", "photography", "painting", "piano", "swimming"];

    return (
        <div className="h-auto flex flex-col px-4 py-20 scroll-smooth" id="about">
            <div className="text-center">
                <h1
                    className="text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-5">
                    About me
                </h1>
            </div>
            <div className="px-12 flex flex-col md:flex-row items-center justify-center gap-4">
                <div className="flex-shrink-0 mb-8 md:mb-0">
                    <Image
                        src={pfp}
                        width={200}
                        height={200}
                        alt="me"
                        className="rounded-full shadow-lg object-cover"
                    />
                </div>

                <div className="text-xl mt-16 mb-10 text-neutral-500 dark:text-neutral-300 leading-relaxed px-14 mx-auto">
                    <p>
                        I am a Computer Science and Engineering undergrad at NIT Jamshedpur with a strong passion for collaboration and innovation. I thrive in environments where I can work with others to create impactful solutions, believing that the best ideas often come from teamwork. I actively contribute to open-source projects, finding immense satisfaction in being part of a global community that works together to solve challenges. I am always eager to learn from others, share my knowledge, and build something meaningful alongside like-minded individuals, whether through coding, problem-solving, or developing new ideas that push the boundaries of what&apos;s possible.
                    </p>
                </div>
            </div>

            <div className="text-4xl md:ml-80 ml-20 mt-5 font-normal text-neutral-600 dark:text-neutral-400">
                Otherwise, just obsessed with
                <FlipWords words={words}/> <br />
                when I&apos;m tired of development.
            </div>
        </div>
    );
}
