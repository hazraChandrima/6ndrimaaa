import React from "react";

export function Skills() {
    return (
        <div className="h-auto flex flex-col px-4 py-20 scroll-smooth" id="skills">
            <div className="text-center">
                <h1
                    className="text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 my-10  pb-8">
                    Technologies I&apos;ve worked with
                </h1>
            </div>
            <div align="center">
                <div className="mb-2">
                    <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pb-6">
                        Languages
                    </h1>
                    <img
                        src="https://skillicons.dev/icons?i=js,python,java,c" width="300px"/>
                </div>
                <div className="mb-2">
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
                </div>
                <div className="mb-2">
                    <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pt-10 pb-6">
                        Databases
                    </h1>
                    <img
                        src="https://skillicons.dev/icons?i=postgres,mongo"
                        width="150px"/>
                </div>
                <div className="mb-2">
                    <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pt-10 pb-6">
                        Software Tools
                    </h1>
                    <img
                        src="https://skillicons.dev/icons?i=git,github,webstorm,pycharm"
                        width="300px"/>
                    <br/>
                    <img
                        src="https://skillicons.dev/icons?i=figma,selenium,vscode,vim"
                        width="300px"/>
                </div>
                <div className="mb-2">
                    <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pt-10 pb-6">
                        Operating System
                    </h1>
                    <img
                        src="https://skillicons.dev/icons?i=windows,powershell"
                        width="150px"/>
                </div>

                {/*<a href="https://skillicons.dev">*/}
                {/*    <img*/}
                {/*        src="https://skillicons.dev/icons?i=git,github,webstorm,html,css,js,react,next,tailwind,bootstrap,vercel,express,nodejs,mui,npm,vite,postgres,python,pycharm,java,c,figma,selenium,vscode,windows,powershell,mongo,vim"/>*/}
                {/*</a>*/}

            </div>
        </div>
    )
}