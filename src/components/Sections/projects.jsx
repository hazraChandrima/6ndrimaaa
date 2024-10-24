import { FocusCards } from "@/components/ui/focus-cards";
import Image from "next/image";
import React from "react";
import mm from '../../../public/images/mm.png';
import mvai from '../../../public/images/mvai.png';
import portfolio from '../../../public/images/portfolio.png'
import nirmas from '../../../public/images/nirmas.png'
import myn from '../../../public/images/myn.png'

export function Projects() {
    const cards = [
        {
            title: "Money Master",
            src: mm,
            link: "https://github.com/hazraChandrima/budget-finance-tracker"
        },
        {
            title: "NIT Jamshedpur Lab" ,
            src: mvai,
            link: "https://github.com/hazraChandrima/NIT-Jsr_Lab_frontend",
        },
        {
            title: "Personal Portfolio",
            src: portfolio,
            link: "https://github.com/hazraChandrima/6ndrimaaa",
        },
        {
            title: "Nirmas",
            src: nirmas,
            link: "https://github.com/hazraChandrima/nirmas",
        },
        {
            title: "Adding color analysis feature to E-Commerce app ",
            src: myn,
            link: "https://github.com/hazraChandrima/Myntra_Hackerramp-24",
        },
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
                <h1 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 py-6 mb-8">
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
