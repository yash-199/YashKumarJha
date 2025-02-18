import React from 'react'
import image from '../assets/hero3.png'
import { motion } from "framer-motion";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
const AboutMe = () => {
    return (
        <div className='bg-black pb-32' id='aboutme'>
            <div className='lg:flex justify-center mx-auto w-full'>
                <div className='lg:w-1/2 w-full p-6'>
                    <motion.div
                        className="justify-center"
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2 }}
                        viewport={{ once: true }}
                    >
                        <p className='text-slate-400'>More About Me</p>
                        <p className='text-white text-4xl my-4 leading-normal'>Frontend or Full Stack Developer and <br />little bit of <span className='uppercase'>everything</span></p>
                        <p className='text-white text-justify text-lg my-4'>I'm Yash Kumar Jha, a proactive Frontend Developer with 2+ years of experience in building dynamic,
                            responsive, and user-friendly web applications. Proficient in React.js, JavaScript, Redux,
                            Tailwind CSS, and modern UI frameworks. Skilled in performance optimization, API
                            integration, and scalable front-end architectures. Passionate about enhancing user
                            experiences, following best practices, and collaborating with teams to deliver high-quality,
                            accessible, and efficient web solutions.

                            I'm always eager to learn more.</p>

                        <p className='text-white my-4 text-justify text-lg'> When I'm not coding, I'm exploring new ideas and staying curious. Life's about balance, and I love embracing every part of it.</p>

                        <p className='text-white text-lg text-justify'> I believe in waking up each day eager to make a difference!</p>
                        <div className='flex gap-5 my-4'>
                            <a href="https://github.com/yash-199">
                                <FaGithubSquare className='bg-white text-black text-5xl rounded cursor-pointer hover:translate-y-[-2px] duration-150 transition-all' />
                            </a>
                            <a href="https://www.linkedin.com/in/yash-kumar-jha-8837a91ab/">
                                <FaLinkedin className='bg-white text-black text-5xl rounded cursor-pointer hover:translate-y-[-2px] duration-150 transition-all' />
                            </a>
                        </div>
                    </motion.div>
                </div>
                <div className='lg:w-1/2 max-w-[400px]'>
                    <img src={image} className='w-full mx-auto ' alt="" />
                </div>
            </div>
        </div>
    )
}

export default AboutMe