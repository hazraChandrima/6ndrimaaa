"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandDiscord,
    IconBrandGithub,
    IconBrandGmail,
    IconBrandInstagram,
    IconBrandLeetcode,
    IconBrandLinkedin,
    IconBrandReddit,
    IconBrandX,
} from "@tabler/icons-react";
import { TypewriterEffect } from "../ui/typewriter-effect";


export function Contact() {

    const words = [
        {
            text: "Let's",
        },
        {
            text: "Connect!",
        },
        ]

    const links = [
        {
            title: "LinkedIn",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://linkedin.com/in/chandrima-hazra-65494a219",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://github.com/hazraChandrima",
        },
        {
            title: "Discord",
            icon: (
                <IconBrandDiscord className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://discord.com/channels/6ndrima_83544",
        },
        {
            title: "Reddit",
            icon: (
                <IconBrandReddit className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.reddit.com/user/CookEducational7483/",
        },
        {
            title: "Gmail",
            icon: (
                <IconBrandGmail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "mailto:hazrachandrimalfs@gmail.com",
        },
        {
            title: "Twitter",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://x.com/hazra78436",
        },
    ];

    return (
        <div
            className="flex flex-col items-center justify-center h-[35rem] border-gray-700 border-t-[1px] w-full"
            id="contact"
            style={{
                backgroundImage: "url('/images/layered-waves3.svg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="text-center">
                <h1
                    className="text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-10 pb-8 "
                >
                    <TypewriterEffect words={words} />
                </h1>
            </div>
            <FloatingDock
                mobileClassName="translate-y-20"
                items={links}
            />
        </div>
    );
}
