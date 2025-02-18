import React, { useEffect, useState } from "react";
import TechBackground from "../assets/gpt.webp";
import { assets } from "../assets/assets";
import FadeIn from 'react-fade-in';
const MyExperties = () => {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setRotation(scrollY * 0.2)
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    return (
        <div className="bg-black py-20">
            <div className="relative lg:w-1/4 w-full mx-auto">
                <img src={TechBackground} className="w-full mx-auto" style={{ transform: `rotate(${rotation}deg)` }} alt="" />
                {/* text overlay */}
                <div className="absolute inset-0 pt-40 bg-black/50">
                    <p className=" text-sm font-bold text-center uppercase text-slate-300">I constantly try to improve</p>
                    <p className="text-white text-center text-5xl font-bold  px-4 py-2 rounded-lg">
                        My Tech Stack
                    </p>
                </div>
            </div>

            {/* Logo */}
            <FadeIn>
                <div className="lg:flex items-center justify-center gap-4 mt-20">
                    <div className="flex items-center justify-center gap-4 bg-white/5 border border-slate-800 rounded-lg py-2 px-3">
                        <img src={assets.Html} className="w-6" alt="HTML" />
                        <p className="text-white pt-1">HTML</p>
                    </div>
                    <div className="flex items-center justify-center gap-4 bg-white/5 border border-slate-800 rounded-lg py-2 px-3">
                        <img src={assets.CSS} className="w-6" alt="CSS" />
                        <p className="text-white pt-1">CSS</p>
                    </div>
                    <div className="flex items-center justify-center gap-4 bg-white/5 border border-slate-800 rounded-lg py-2 px-3">
                        <img src={assets.TailwindCSS} className="w-6" alt="Tailwind CSS" />
                        <p className="text-white pt-1">TailwindCSS</p>
                    </div>
                    <div className="flex items-center justify-center gap-4 bg-white/5 border border-slate-800 rounded-lg py-2 px-3">
                        <img src={assets.JavaScript} className="w-6" alt="JavaScript" />
                        <p className="text-white pt-1">JavaScript</p>
                    </div>
                    <div className="flex items-center justify-center gap-4 bg-white/5 border border-slate-800 rounded-lg py-2 px-3">
                        <img src={assets.React} className="w-6" alt="Reactjs" />
                        <p className="text-white pt-1">ReactJS</p>
                    </div>
                    <div className="flex items-center justify-center gap-4 bg-white/5 border border-slate-800 rounded-lg py-2 px-3">
                        <img src={assets.Redux} className="w-6" alt="Redux" />
                        <p className="text-white pt-1">Redux</p>
                    </div>

                </div>
            </FadeIn>
            <FadeIn>
                <div className="lg:flex items-center justify-center gap-4 my-4">
                    <div className="flex items-center justify-center gap-4 bg-white/5 border border-slate-800 rounded-lg py-2 px-3">
                        <img src={assets.Framer} className="w-6" alt="Framer Motion" />
                        <p className="text-white pt-1">Framer Motion</p>
                    </div>
                    <div className="flex items-center justify-center gap-4 bg-white/5 border border-slate-800 rounded-lg py-2 px-3">
                        <img src={assets.Shadcn} className="w-6" alt="Shadcn" />
                        <p className="text-white pt-1">Shadcn</p>
                    </div>
                    <div className="flex items-center justify-center gap-4 bg-white/5 border border-slate-800 rounded-lg py-2 px-3">
                        <img src={assets.Nodejs} className="w-6" alt="NodeJS" />
                        <p className="text-white pt-1">NodeJS</p>
                    </div>
                    <div className="flex items-center justify-center gap-4 bg-white/5 border border-slate-800 rounded-lg py-2 px-3">
                        <img src={assets.Express} className="w-6" alt="Express JS" />
                        <p className="text-white pt-1">Express.JS</p>
                    </div>
                    <div className="flex items-center justify-center gap-4 bg-white/5 border border-slate-800 rounded-lg py-2 px-3">
                        <img src={assets.MongoDB} className="w-6" alt="MongoDB" />
                        <p className="text-white pt-1">MongoDB</p>
                    </div>
                </div>
            </FadeIn>
            <FadeIn>
                <div className="lg:flex items-center justify-center gap-4">

                    <div className="flex items-center justify-center gap-4 bg-white/5 border border-slate-800 rounded-lg py-2 px-3">
                        <img src={assets.RestAPI} className="w-6" alt="Rest API" />
                        <p className="text-white pt-1">RestAPI</p>
                    </div>

                    <div className="flex items-center justify-center gap-4 bg-white/5 border border-slate-800 rounded-lg py-2 px-3">
                        <img src={assets.MongoDB} className="w-6" alt="MongoDB" />
                        <p className="text-white pt-1">MongoDB</p>
                    </div>
                    <div className="flex items-center justify-center gap-4 bg-white/5 border border-slate-800 rounded-lg py-2 px-3">
                        <img src={assets.Mysql} className="w-6" alt="MySQL" />
                        <p className="text-white pt-1">MySQL</p>
                    </div>
                    <div className="flex items-center justify-center gap-4 bg-white/5 border border-slate-800 rounded-lg py-2 px-3">
                        <img src={assets.Git} className="w-6" alt="Git" />
                        <p className="text-white pt-1">Git</p>
                    </div>
                    <div className="flex items-center justify-center gap-4 bg-white/5 border border-slate-800 rounded-lg py-2 px-3">
                        <img src={assets.Github} className="w-6" alt="Github" />
                        <p className="text-white pt-1">Github</p>
                    </div>
                    <div className="flex items-center justify-center gap-4 bg-white/5 border border-slate-800 rounded-lg py-2 px-3">
                        <img src={assets.postman} className="w-6" alt="Postman" />
                        <p className="text-white pt-1">Postman</p>
                    </div>
                    <div className="flex items-center justify-center gap-4 bg-white/5 border border-slate-800 rounded-lg py-2 px-3">
                        <img src={assets.Vercel} className="w-6" alt="Vercel" />
                        <p className="text-white pt-1">Vercel</p>
                    </div>
                </div>
            </FadeIn>
        </div>
    );
};

export default MyExperties;
