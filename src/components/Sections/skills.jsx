"use client"

import React, {useEffect} from "react";
import useMoveUp from "@/hooks/animations/moveUp"
import { motion } from "framer-motion";

export function Skills() {

    const {ref, controls} = useMoveUp();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Delay between children animations
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <div className="h-auto flex flex-col px-4 py-20 scroll-smooth" id="skills">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                variants={containerVariants}
                className="text-center">
                <h1
                    className="text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 my-10  pb-8">
                    Technologies I&apos;ve worked with
                </h1>
            </motion.div>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                variants={containerVariants}
                align="center"
            >

                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    variants={itemVariants}
                    className="mb-2"
                >
                    <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pb-6">
                        Languages
                    </h1>
                    <img
                        src="https://skillicons.dev/icons?i=js,python,java,c,bash" width="375px"/>
                </motion.div>

                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    variants={itemVariants}
                    className="mb-2"
                >
                    <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pt-10 pb-6">
                        Libraries and frameworks
                    </h1>
                    <img
                        src="https://skillicons.dev/icons?i=react,next,tailwind,bootstrap"
                        width="300px"/>
                    <br/>
                    <img
                        src="https://skillicons.dev/icons?i=vercel,express,nodejs,mui"
                        width="300px"/>
                </motion.div>

                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    variants={itemVariants}
                    className="mb-2"
                >
                    <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pt-10 pb-6">
                        Databases
                    </h1>
                    <img
                        src="https://skillicons.dev/icons?i=postgres,mysql,mongo,firebase"
                        width="300px"/>
                </motion.div>

                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    variants={itemVariants}
                    className="mb-2"
                >
                    <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pt-10 pb-6">
                        Cloud Services
                    </h1>
                    <img
                        src="https://skillicons.dev/icons?i=aws"
                        width="75px" />
                </motion.div>

                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    variants={itemVariants}
                    className="mb-2"
                >
                    <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pt-10 pb-6">
                        Software Tools
                    </h1>
                    <img
                        src="https://skillicons.dev/icons?i=git,github,webstorm,pycharm"
                        width="300px"/>
                    <br/>
                    <img
                        src="https://skillicons.dev/icons?i=figma,selenium,vscode,vim"
                        width="300px"/><br/>
                    <img
                        src="https://skillicons.dev/icons?i=blender"
                        width="75px"/>
                </motion.div>

                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    variants={itemVariants}
                    className="mb-2"
                >
                    <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pt-10 pb-6">
                        Operating System / Kernel
                    </h1>
                    <img
                        src="https://skillicons.dev/icons?i=linux,windows,powershell"
                        width="225px"/>
                </motion.div>

                {/*<a href="https://skillicons.dev">*/}
                {/*    <img*/}
                {/*        src="https://skillicons.dev/icons?i=git,github,webstorm,html,css,js,react,next,tailwind,bootstrap,vercel,express,nodejs,mui,npm,vite,postgres,python,pycharm,java,c,figma,selenium,vscode,windows,powershell,mongo,vim"/>*/}
                {/*</a>*/}

            </motion.div>
        </div>
    )
}
