import React from "react";
import { Spotlight } from "../ui/spotlight";

export function Hero() {
    return (
        (
            <div
            className="scroll-smooth h-dvh w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight className="-top-40 left-0 md:left-72 lg:left-60 md:-top-20" fill="white" />
            <div className=" p-4 max-w-7xl flex flex-col justify-center mx-auto relative z-10 w-full ">
                <h1
                    className="sm:text-8xl min-[560px]:text-7xl text-[3.3rem] px-8 sm:px-2 font-bold text-center -mt-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-10">
                    Hi, I&apos;m Chandrima.
                </h1>
                <h1 className="min-[560px]:text-5xl text-4xl sm:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 px-5">
                    Great to have you here!
                </h1>
                <p
                    className="mt-14 font-normal text-xl sm:text-lg text-neutral-300 max-w-lg text-center mx-auto">
                    I&apos;m a developer from India.
                    Sometimes, my code runs correctly... And those are the moments that keep me going!
                </p>
            </div>
        </div>)
    );
}
