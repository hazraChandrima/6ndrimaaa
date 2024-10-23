"use client"
import React, { useState } from 'react';
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link"
// import logo from "../../assets/images/logo.png"
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";


export const MobileNavbar = () => {

    const sections = [
        {
            name : 'Home',
            link : '/#',
        },
        {
            name : 'About',
            link : '/#about',
        },
        {
            name : 'Skills',
            link : '/#skills',
        },
        {
            name : 'Projects',
            link : '/#projects',
        },
        {
            name : 'Contact',
            link : '/#contact',
        },

    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
        exit: {
            opacity: 0,
            transition: {
                delay: 0.3,
                duration: 0.5
            },
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 }
    };

    const [isOpen, setOpen] = useState(false);

    const handleLinkClick =() => {
        setOpen(false);
    }


    return (

        <div
            className="sm:invisible visible fixed flex flex-row justify-between top-0 left-0 h-20 z-50 w-screen bborder-b backdrop-blur-md border-transparent shadow-lg bg-opacity-80">

            <span className="mx-3 flex items-center justify-center">
                <Hamburger toggled={isOpen} size={40} toggle={setOpen}/>
            </span>

            <span className="mx-3 flex items-center justify-center">
               <button
                   className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <span
                                className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"/>
                            <span
                                className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                                <span className="font-semibold mx-4">
                                    <Link
                                        href="https://drive.google.com/file/d/1ZHzxl2uPdH61zODSyH0DepnokobjIVnC/view?usp=sharing">Resume</Link>
                                </span>
                            </span>
               </button>
            </span>

            <AnimatePresence>
                {isOpen &&
                    <motion.div
                        className="fixed w-screen overflow-y-scroll h-screen top-20 p-5 pt-0 bg-black opacity-100 flex items-center justify-center"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={containerVariants}
                    >
                        <div
                            className="overflow-y-scroll font-sans mb-10 pb-8 text-slate-200 text-center flex flex-col justify-between h-[52%] w-full max-w-3xl">
                            {sections.map((key, index) => (
                                <motion.div key={index}
                                            className="mb-6"
                                            variants={itemVariants}>

                                    <h2 className="text-4xl text-gray-200 opacity-90 mb-2 hover:text-violet-300">
                                    <Link href={`/${key.link}`} onClick={handleLinkClick}
                                    className="my-5"
                                    >
                                        {key.name}</Link>
                                    </h2>
                                </motion.div>
                            ))}

                        </div>
                    </motion.div>
                }
            </AnimatePresence>

        </div>

    );
};