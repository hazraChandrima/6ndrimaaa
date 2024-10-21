import React from "react";
import { Spotlight } from "../ui/spotlight";

export function Hero() {
    return (
        (
            <div
            className="scroll-smooth h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
            <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
                <h1
                    className="text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-10">
                    Hi, I'm Chandrima.
                </h1>
                <h1 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Great to have you here!
                </h1>
                <p
                    className="mt-10 font-normal text-lg text-neutral-300 max-w-lg text-center mx-auto">
                    I'm a developer from India who loves open source and debugging my life away.
                    Sometimes, my code runs correctly... And those are the moments that keep me going!
                </p>
            </div>
        </div>)
    );
}
