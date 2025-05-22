'use client'
import ShinyText from "./UI/shinyText";
import { FaReact, FaHtml5, FaCss3Alt, FaJava, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiNextdotjs, SiSpringboot, SiPostgresql, SiJavascript, SiApachemaven } from "react-icons/si";
import { InfiniteSlider } from "./motion-primitives/infinite-slider";
import { motion } from "motion/react";


export default function About() {
    return (
        <div className="min-h-screen flex flex-col items-center gap-6 bg-black w-full px-4 py-10 overflow-hidden" id="About">
            <div className="flex  items-center h-[70dvh]">
                <div className="w-[40dvw]">
                    <ShinyText text="ABOUT ME" speed={1} className="text-3xl font-bold text-white mb-10" />
                    <motion.p>
                        I’m a young and passionate developer from Madagascar, currently pursuing a degree in Computer Science. My enthusiasm for coding and technology drives me to continuously learn, build, and explore new ideas.
                        So far, I’ve worked on web applications and command-line tools as part of my academic journey. Outside the classroom, I enjoy experimenting with new technologies through personal projects that push my skills further.
                        I thrive in collaborative environments and am eager to contribute to real-world projects where I can grow, share ideas, and make a meaningful impact.
                    </motion.p>
                </div>
                <div className="">
                    <div className=" w-[40vw]">
                        <img src="/profile.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="flex">
                <div className="flex flex-col items-center justify-center w-[50dvw] h-[100dvh] md:grid-cols-3 gap-10 max-w-7xl z-10 border-2">

                    <div className="flex justify-center  gap-[2vw] w-fit h-[30vh] shadow-xl overflow-hidden border-2 ">

                        <div className="flex justify-center gap-[2vw] w-[20dvw] h-[30vh] shadow-xl overflow-hidden border-2 ">
                            <InfiniteSlider direction="vertical" speed={75} >
                                <SiNextdotjs className="text-5xl text-white" title="Next.js" />
                                <FaReact className="text-5xl text-cyan-400" title="React" />
                                <SiTailwindcss className="text-5xl text-sky-400" title="Tailwind CSS" />
                            </InfiniteSlider>
                            <InfiniteSlider direction="vertical" reverse>
                                <SiBootstrap className="text-5xl text-indigo-500" title="Bootstrap" />
                                <FaHtml5 className="text-5xl text-orange-500" title="HTML" />
                                <FaCss3Alt className="text-5xl text-blue-500" title="CSS" />
                                <SiJavascript className="text-5xl text-yellow-400" title="JavaScript" />
                            </InfiniteSlider>
                        </div>
                        <div className="w-[20dvw] h-[30vh] border-2">

                        </div>

                    </div>

                    <div className="">

                        <div className="flex justify-center gap-[2vw] w-fit h-[30vh] shadow-xl overflow-hidden border-2 ">
                            <div className="w-[20dvw] h-[30vh] border-2">

                            </div>

                            <div className="flex justify-center gap-[2vw] w-[20dvw] h-[30vh] shadow-xl overflow-hidden border-2 ">
                                <InfiniteSlider direction="vertical" speed={75} >
                                    <FaJava className="text-5xl text-blue-400" title="Java" />
                                    <SiSpringboot className="text-5xl text-green-400" title="Spring Boot" />
                                    <SiApachemaven className="text-5xl text-red-700" />
                                </InfiniteSlider>
                                <InfiniteSlider direction="vertical" reverse>
                                    <SiPostgresql className="text-5xl text-sky-400" title="PostgreSQL" />
                                    <FaDatabase className="text-5xl text-purple-400" title="DB Concepts" />
                                </InfiniteSlider>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col text-center border justify-center items-center w-[40dvw]">
                    <h1 className="text-3xl font-bold text-white mb-10">MY TECH STACK</h1>
                    <p>I am using a modern fullstack development setup combining React and Next.js for the frontend, styled with Tailwind CSS and Bootstrap. My backend is built 
                        with Spring Boot in Java, and I manage data using PostgreSQL. This stack allows me to build responsive, performant web applications with a scalable backend and solid database integration. I also have hands-on experience with HTML, CSS, JavaScript, and core database design principles.</p>
                </div>
            </div>

        </div>
    );
}
