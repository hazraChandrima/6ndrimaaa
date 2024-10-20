import React from "react";


export function Skills() {
    return (
        <div className="h-auto flex flex-col px-4 py-20 scroll-smooth" id="skills">
            <div className="text-center">
                <h1
                    className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 my-10  pb-8">
                    Technologies I've worked with
                </h1>
            </div>
            <div align="center">
                <div className="">
                    <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pb-6">
                        Languages
                    </h1>
                    <img
                        src="https://skillicons.dev/icons?i=js,python,java,c" width="300px"/>
                </div>
                <div className="">
                    <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pt-10 pb-6">
                        Libraries and frameworks
                    </h1>
                    <img
                        src="https://skillicons.dev/icons?i=react,next,tailwind,bootstrap,vercel,express,nodejs,mui"
                        width="600px"/>
                </div>
                <div className="">
                    <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pt-10 pb-6">
                        Databases
                    </h1>
                    <img
                        src="https://skillicons.dev/icons?i=postgres,mongo"
                        width="150px"/>
                </div>
                <div className="">
                    <h1 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pt-10 pb-6">
                        Software Tools
                    </h1>
                    <img
                        src="https://skillicons.dev/icons?i=git,github,webstorm,pycharm,figma,selenium,vscode,vim"
                        width="600px"/>
                </div>
                <div className="">
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