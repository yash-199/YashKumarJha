import React, { useState } from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { SiAboutdotme } from "react-icons/si";
import { GrTechnology } from "react-icons/gr";
import { ImBlogger } from "react-icons/im";
import { FaFileDownload } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import YashKumarJha from "../assets/YASH KUMAR JHA (Frontend Developer).pdf"
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <div className='flex bg-black/80 justify-around fixed w-full z-20 py-4 shadow-2xl'>
            <p className='bg-white/5 p-2 text-white rounded-full'>Yash Kumar Jha</p>
            <ul className='hidden lg:flex justify-center gap-6 bg-white/5 py-2 px-6 rounded-full text-white'>
                <a href="#Home">
                    <li className='cursor-pointer'>Home</li>
                </a>
                <a href='#aboutme'>
                    <li className='cursor-pointer'>About</li>
                </a>
                <a href="#project">
                    <li className='cursor-pointer'>Project</li>
                </a>
                <a href="#Experience">
                    <li className='cursor-pointer'>Experience</li>
                </a>
                <a href="mailto:byash0720@gmail.com">
                    <li className='cursor-pointer'>Hire Me</li>
                </a>
            </ul>
            <p className='hidden lg:flex bg-white/5 py-2 px-6 rounded-full text-white cursor-pointer'>
                <a href={YashKumarJha}>Download Assest</a>
            </p>
            <div className='lg:hidden'>
                {showMenu ? (
                    <MdOutlineClose onClick={() => setShowMenu(false)} className='text-white my-2 text-2xl cursor-pointer' />
                ) : (
                    <FaBarsStaggered onClick={() => setShowMenu(true)} className='text-white my-2 text-2xl cursor-pointer' />
                )}
            </div>
            {showMenu && (
                <div className='bg-black/80 w-96 rounded-xl p-2 fixed top-16 right-0 '>
                    <a href="home">
                        <div className='flex text-white py-2 px-4 gap-2 cursor-pointer'>
                            <div className='bg-white/15 px-4 rounded-lg pt-3.5'>
                                <IoHomeOutline className='text-lg' />
                            </div>
                            <div>
                                <p className='text-lg'>Home</p>
                                <p className='font-light text-sm'>Welecome to my forever work-in-progress</p>
                            </div>
                        </div>
                    </a>
                    <a href="#aboutme">
                        <div className='flex text-white py-2 px-4 gap-2 cursor-pointer'>
                            <div className='bg-white/15 px-4 rounded-lg pt-3.5'>
                                <SiAboutdotme className='text-lg' />
                            </div>
                            <div>
                                <p className='text-lg'>About</p>
                                <p className='font-light text-sm'>Learn More About Me!</p>
                            </div>
                        </div>
                    </a>
                    <a href="#project">
                        <div className='flex text-white py-2 px-4 gap-2 cursor-pointer'>
                            <div className='bg-white/15 px-4 rounded-lg pt-3.5'>
                                <GrTechnology className='text-lg' />
                            </div>
                            <div>
                                <p className='text-lg'>Project</p>
                                <p className='font-light text-sm'>Showcase of my Project</p>
                            </div>
                        </div>
                    </a>
                    <a href="#Experience">
                        <div className='flex text-white py-2 px-4 gap-2 cursor-pointer'>
                            <div className='bg-white/15 px-4 rounded-lg pt-3.5'>
                                <ImBlogger className='text-lg' />
                            </div>
                            <div>
                                <p className='text-lg'>Experience</p>
                                <p className='font-light text-sm'>Thought,Mental Model and Tutorials</p>
                            </div>
                        </div>
                    </a>
                    <a href={YashKumarJha}>
                        <div className='flex text-white py-2 px-4 gap-2 cursor-pointer'>
                            <div className='bg-white/15 px-4 rounded-lg pt-3.5'>
                                <FaFileDownload className='text-lg' />
                            </div>
                            <div>
                                <p className='text-lg'>Resume</p>
                                <p className='font-light text-sm'>My Experience</p>
                            </div>
                        </div>
                    </a>
                </div>
            )}
        </div>
    )
}

export default Navbar