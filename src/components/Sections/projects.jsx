import { FocusCards } from "@/components/ui/focus-cards";
import Image from "next/image";
import React from "react";
import mm from '@/assets/images/mm.png';
import mvi from '@/assets/images/mvi.png';
import portfolio from '@/assets/images/portfolio.png'

export function Projects() {
    const cards = [
        {
            title: "Money Master",
            src: mm,
        },
        {
            title: "NIT Jamshedpur Lab" ,
            src: mvi,
        },
        {
            title: "Personal Portfolio",
            src: portfolio,
        },
        // {
        //     title: "Camping is for pros",
        //     src: "https://assets.aceternity.com/the-first-rule.png",
        // },
        // {
        //     title: "The road not taken",
        //     src: "https://assets.aceternity.com/the-first-rule.png",
        // },
    ];

    return (
        <div className="h-auto px-4 py-20 scroll-smooth" id="projects">
            <div className="w-full flex flex-col justify-center items-center">
                <div className="text-center">
                    <h1
                        className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 my-10  pb-8">
                        My Projects
                    </h1>
                </div>
            </div>

            <FocusCards cards={cards}/>

            <div className="mt-24">
                <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 py-6 mb-8">
                    My GitHub Stats
                </h1>
                <Image alt={"GitHub stats"}
                       src="https://raw.githubusercontent.com/hazraChandrima/hazraChandrima/master/profile-3d-contrib/profile-night-green.svg"
                       width={640} height={425}
                       layout="intrinsic" className="mx-auto"/>
            </div>
        </div>

    );
}
