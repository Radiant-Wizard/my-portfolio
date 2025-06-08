'use client'
import ShinyText from "./UI/shinyText";
import { motion } from "motion/react";
import Image from 'next/image'

export default function About() {
    return (
        <div className="min-h-screen flex flex-col items-center gap-6 bg-black w-full px-4 py-10 overflow-hidden" id="About">
            <div className="flex  items-center h-[70dvh]">
                <div className="w-[40dvw]">
                    <ShinyText text="ABOUT ME" speed={1} className="text-3xl font-bold text-white mb-10" />
                    <motion.p className="text-2xl">
                        I’m a young and passionate developer from Madagascar, currently pursuing a degree in Computer Science. My enthusiasm for coding and technology drives me to continuously learn, build, and explore new ideas.
                        So far, I’ve worked on web applications and command-line tools as part of my academic journey. Outside the classroom, I enjoy experimenting with new technologies through personal projects that push my skills further.
                        I thrive in collaborative environments and am eager to contribute to real-world projects where I can grow, share ideas, and make a meaningful impact.
                    </motion.p>
                </div>
                <Image src="/profile.png"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    />
            </div>
        </div>
    );
}
