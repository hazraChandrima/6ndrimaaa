import { FocusCards } from "@/components/ui/focus-cards";
import Image from "next/image";

export function Projects() {
    const cards = [
        {
            title: "Forest Adventure",
            src: "https://assets.aceternity.com/the-first-rule.png",
        },
        {
            title: "Valley of life",
            src: "https://assets.aceternity.com/the-first-rule.png",
        },
        {
            title: "Sala behta hi jayega",
            src: "https://assets.aceternity.com/the-first-rule.png",
        },
        {
            title: "Camping is for pros",
            src: "https://assets.aceternity.com/the-first-rule.png",
        },
        {
            title: "The road not taken",
            src: "https://assets.aceternity.com/the-first-rule.png",
        },
        {
            title: "The First Rule",
            src: "https://assets.aceternity.com/the-first-rule.png",
        },
    ];

    return (
        <div className="m-5" id="projects">
            <div className="flex items-center justify-center w-full">
                <Image alt={"GitHub stats"}
                       src="https://raw.githubusercontent.com/hazraChandrima/hazraChandrima/master/profile-3d-contrib/profile-night-green.svg"
                       width={640} height={425}/>
            </div>
            <FocusCards cards={cards}/>
        </div>

    );
}
