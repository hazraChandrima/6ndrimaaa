import React from "react";
import { FlipWords } from "../ui/flip-words";

export function About() {
    const words = ["chess", "photography", "painting", "piano", "swimming"];

    return (
        (
            <div className="h-[40rem] flex px-4 scroll-smooth" id="about">
            <div
                className="text-4xl ml-40 font-normal text-neutral-600 dark:text-neutral-400">
                Just obsessed with
                <FlipWords words={words} /> <br />
                when I'm tired of development.
            </div>
        </div>)
    );
}
