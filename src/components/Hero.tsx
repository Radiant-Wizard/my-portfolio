'use client'

import { motion} from 'motion/react'
import { TextGenerateEffect } from './UI/TextGenerateEffect'
import ShinyText from './UI/shinyText'
import BlurText from './UI/BlurText'

const navigation = [


    { name: 'About', href: '#' },
    { name: 'Project', href: '#' },
    { name: 'Contact', href: '#' },
]

export default function Hero() {
    return (
        <div className="bg-black w-dvw h-dvh flex justify-center items-center flex-col overflow-hidden">

            <div className="absolute inset-0 z-0">
                <div className="absolute size-[700px] rounded-full bg-radial from-purple-800/30 from-40% to-black to-90% blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>


                <div className="absolute size-[500px] rounded-full bg-radial-[at_75%_75%] from-sky-500/20 via-blue-800/10 to-black to-80% blur-3xl"></div>

                <div className="absolute size-[400px] rounded-full bg-radial-[at_20%_20%] from-white/10 to-zinc-900/0 to-75% blur-2xl"></div>
            </div>

            <header className="absolute inset-x-0  top-0 z-50">
                <nav aria-label="Global" className="sticky flex items-center justify-between p-6 lg:px-8">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            Portfolio
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        {/* <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-6" />
                        </button> */}
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <motion.a key={item.name}
                                href={item.href}
                                className="text-sm/6 font-semibold text-white"
                                whileHover={{ scale: 1.2 }}
                                transition={{ type: 'spring', duration: 1, stiffness: 500 }}
                            >

                                {item.name}
                            </motion.a>
                        ))}
                    </div>
                </nav>

            </header>

            <div className=" flex items-center justify-center w-dvw relative isolate px-6 pt-14 lg:px-8">
                <div className="text-center">
                    <div className="w-[70dvw] h-[50vh] flex text-center flex-col justify-center items-center">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { delay: 1.2, duration: 1, ease: "easeIn" } }}
                            className="uppercase text-xs text-center text-blue-100 max-w-80">
                            Trainee Fullstack developer, passionate about Learning new things.
                        </motion.p>
                        <TextGenerateEffect
                            words="Fueling My Future, One Line of Code at a Time"
                            className="text-center text-[40px] md:text-5xl lg:text-6xl"
                        />
                        <BlurText
                            text="Hi! I'm RADIANT WIZARD, a motivated second-year Computer Science student eager to grow as a developer and make a meaningful impact through continuous learning. I thrive in team environments thanks to strong collaboration skills, and I’m actively seeking opportunities to apply what I know and acquire new skills along the way."
                            delay={5}
                            animateBy="letters"
                            direction="bottom"
                            className="text-center w-full max-w-2xl mx-auto text-gray-100 text-[1rem] "

                        />
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { delay: 1.2, duration: 1, ease: "easeIn" } }}
                            className="mt-10 flex items-center justify-center gap-x-6" >
                            <motion.a
                                href="#About"
                                className="rounded-md uppercase px-3.5 border-2 py-2.5 text-sm font-semibold text-white shadow-xs "
                                whileHover={{
                                    color: 'black',
                                    backgroundColor: 'white',
                                    boxShadow: '0px 0px 8px rgb(177, 0, 255),  0 0 16px rgb(177, 0, 255)',
                                    scale: 1.1,
                                    transition: {
                                        ease: "easeInOut",
                                        duration: 0.5,
                                    }
                                }}
                                whileTap={{ scale: 0.9 }}
                            >
                                About Me
                            </motion.a>
                            <motion.a href="#" className="rounded-md uppercase px-3.5 py-2.5 text-sm font-semibold text-gray-500 shadow-xs ">
                                <ShinyText text='My projects' disabled={false} speed={3} className='text-white' />
                            </motion.a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}