import React from 'react'
import BackGroundImage from '../assets/bgBluredHero.webp'
import { GoArrowUpRight } from "react-icons/go";
import { MdCopyAll } from "react-icons/md";
import { motion } from "framer-motion";

const Banner = () => {

    const copyToClipBoard = () => {
        navigator.clipboard.writeText("byash0720@gmail.com")
            .then(() => alert("Email Copied"))
            .catch(err => console.error(err))
    }

    return (
        <div
            className="relative h-screen w-full mx-auto lg:py-64 py-32 text-white text-3xl font-bold overflow-hidden" id="Home"
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%), url(${BackGroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <motion.div
                className="justify-center"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
            >
                <p className='text-center lg:text-6xl text-3xl leading-tight'>Turning Ideas into Interactive &
                    <br />Engaging Web Applications</p>
                <p className='text-center lg:flex flex-row justify-center gap-5 py-10 text-2xl font-semibold text-slate-300'>Hello, I'm Yash Kumar Jha
                    <img src="" alt="" />
                    a Frontend & Full Stack Developer
                </p>
                <div className='lg:flex flex-row w-1/2 mx-auto justify-center gap-10'>
                    <a href="mailto:byash0720gmail.com">  <p className="relative bg-white/10 cursor-pointer my-2 flex items-center justify-center gap-4 text-base font-normal px-4 py-2 rounded-full z-10">
                        Let's Connect
                        <span className="bg-white rounded-full text-black cursor-pointer">
                            <GoArrowUpRight className="bg-white text-3xl p-2 rounded-full" />
                        </span>
                    </p>
                    </a>
                    <p className='flex items-center justify-between text-lg font-normal gap-4 cursor-pointer' onClick={copyToClipBoard}><MdCopyAll />byash0720@gmail.com</p>
                </div>
            </motion.div>
            <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 3 }}
                viewport={{ once: true }}
            >
                <div className="animate-scaleIn pointer-events-none relative z-10 mx-auto -mt-32 h-96 w-screen max-w-[--breakpoint-2xl] overflow-hidden [mask-image:radial-gradient(closest-side_at_50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(closest-side_at_bottom,#8350e8,transparent_80%)] before:opacity-60">
                    <div className="absolute top-1/2 -left-1/2 z-20 aspect-[1/0.7] w-[200%] rounded-[100%] border-t-4 border-t-[#ffffff] bg-[#0a0a0a] shadow-[inset_0_2px_20px_#fff,0_-10px_50px_1px_#ffffff6e]"></div>
                </div>
            </motion.div>
        </div>
    )
}

export default Banner