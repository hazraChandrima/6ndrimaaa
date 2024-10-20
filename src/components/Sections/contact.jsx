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
        (<div className="flex items-center justify-center h-[35rem] w-full" id="contact">
            <FloatingDock
                mobileClassName="translate-y-20"
                items={links} />
        </div>)
    );
}
