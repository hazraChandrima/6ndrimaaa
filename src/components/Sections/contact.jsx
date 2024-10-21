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
import Image from "next/image";

export function Contact() {
    const links = [
        {
            title: "LinkedIn",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Discord",
            icon: (
                <IconBrandDiscord className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Reddit",
            icon: (
                <IconBrandReddit className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Leetcode",
            icon: (
                <IconBrandLeetcode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Instagram",
            icon: (
                <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Gmail",
            icon: (
                <IconBrandGmail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Twitter",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },

    ];
    return (
        (<div className="flex flex-col items-center justify-center h-[35rem] w-full" id="contact">
            <div className="text-center">
                <h1
                    className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-10 pb-8 ">
                    Let's Connect!
                </h1>
            </div>
            <FloatingDock
                mobileClassName="translate-y-20"
                items={links}/>
        </div>)
    );
}
