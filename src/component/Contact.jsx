import React from 'react';
import ContactBg from "../assets/cta.webp";
import { GoArrowUpRight } from "react-icons/go";
const Contact = () => {
    return (
        <div
            className="relative h-screen w-full mx-auto lg:py-56 py-20 text-white text-3xl font-bold overflow-hidden"
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0,1) 50%, rgba(0, 0, 0, 0.7) 100%, rgba(0, 0, 0, 0.5) 100%), url(${ContactBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <p className='text-center py-4 font-medium lg:text-4xl text-3xl p-2'>FROM CONCEPT TO <b>CREATION</b></p>
            <p className='text-center font-normal p-2'>LET'S MAKE IT <b>HAPPEN!</b></p>
            <div className='flex justify-center gap-10 py-10'>
                <p className="relative bg-white/10 cursor-pointer flex items-center justify-center gap-4 text-base font-normal px-4 py-2 rounded-full z-10">
                    <a href='mailto:byash0720@gmail.com' >Get In Touch</a>
                    <span className="bg-white rounded-full text-black cursor-pointer">
                        <GoArrowUpRight className="bg-white text-3xl p-2 rounded-full" />
                    </span>
                </p>
            </div>
            <p className='text-center lg:mt-10 text-2xl'>I'm available for full-time roles & freelance projects.</p>
            <p className='text-center font-light mt-4'>I thrive on crafting dynamic web applications, and<br />
                delivering seamless user experiences.</p>
            <div className='w-full mx-auto text-center absolute bottom-0 py-2 bg-black'>
                <hr className='py-2' />
                <p className='text-sm font-light'>Copyright © 2025 Yash Kumar Jha. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Contact;
