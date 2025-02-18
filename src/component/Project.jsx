import React, { useRef } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import star from "../assets/star.svg";
import { assets } from "../assets/assets";
import WorldNews from "../assets/WorldNew.png";
import FoodDel from "../assets/FoodOrdering.png"
import Doctor from "../assets/curaconnect.png"
import FadeIn from 'react-fade-in';
import { FaD } from "react-icons/fa6";
const Project = () => {
    const videoRef = useRef(null);

    return (
        <div className="bg-black" id="project">
            <p className="text-center text-slate-500 text-base uppercase lg:py-20 py-20">My Project</p>
            <h2 className="text-center text-white text-5xl mt-6">Code. Create. Elevate.</h2>
            <FadeIn>
                {/* Project one */}
                <div className="lg:flex flex-row items-center justify-center w-full mt-12 gap-4 p-4">
                    <div className="lg:w-1/2 bg-white/15 p-2 rounded-xl border border-slate-500 shadow-2xl">
                        <div className="bg-purple-600 rounded-xl">
                            <a href="https://drive.google.com/file/d/1AOXbYin9Zwd6xcNdHt3hOIgbiSI3fUCN/view?usp=sharing">
                                <img src={WorldNews} alt="" />
                            </a>
                        </div>
                    </div>

                    <div className="lg:w-1/3">
                        <div className="flex items-center gap-4 lg:mt-0 mt-8">
                            <div className="bg-purple-600 w-6 rounded-xl h-1"></div>
                            <div className="flex items-center gap-3 ">
                                <p className="text-white lg:text-3xl font-bold">Real Time News Aggregator</p>
                                <p>
                                    <a href="https://github.com/yash-199/WorldNews"><FaGithub className="text-white text-3xl cursor-pointer" /></a>
                                </p>
                            </div>
                        </div>
                        <div className="my-5">
                            <p className="text-slate-500 text-justify pl-10 my-3">Developed WorldNews, a new platform for reading major headlines to stay updated on Hot Topics, Latest Topics, and Trending Topics.</p>
                            <p className="text-white font-semibold py-1 font-lg text-justify pl-10 flex items-center gap-4">
                                <img src={star} alt="" />A real-time news aggregator that fetches articles from multiple APIs and categorizes
                                them dynamically.

                            </p>
                            <p className="text-white font-semibold py-1 font-lg text-justify pl-10 flex items-center gap-4">
                                <img src={star} alt="" />Applied lazy loading & pagination, improving site performance by 40%.
                            </p>
                        </div>
                        <div className="lg:flex items-center justify-center gap-4 mt-20 ml-10">
                            <div className="flex items-center justify-center gap-2 my-4 bg-white/5 border border-slate-800 rounded-lg py-2 px-3">
                                <img src={assets.React} className="w-6" alt="ReactJS" />
                                <p className="text-white pt-1 text-sm">ReactJS</p>
                            </div>
                            <div className="flex items-center justify-center gap-2 my-4 bg-white/5 border border-slate-800 rounded-lg py-2 px-3">
                                <img src={assets.Redux} className="w-6" alt="Redux" />
                                <p className="text-white pt-1 text-sm">Redux</p>
                            </div>
                            <div className="flex items-center justify-center gap-2 my-4 bg-white/5 border border-slate-800 rounded-lg py-2 px-3">
                                <img src={assets.RestAPI} className="w-6" alt="RestAPI" />
                                <p className="text-white pt-1 text-sm">RestAPI</p>
                            </div>
                            <div className="flex items-center justify-center gap-2 my-4 bg-white/5 border border-slate-800 rounded-lg py-2 px-3">
                                <img src={assets.TailwindCSS} className="w-6" alt="TailwindCSS" />
                                <p className="text-white pt-1 text-sm">TailwindCSS</p>
                            </div>
                        </div>
                    </div>
                </div>

            </FadeIn>

            <FadeIn>
                {/* Project Two */}
                <div className="lg:flex items-center justify-center w-full mt-20 gap-4 p-4">
                    <div className="lg:w-1/2 bg-white/15 p-2 rounded-xl border border-slate-500 shadow-2xl">
                        <div className="bg-purple-600 rounded-xl">
                            <a href="https://drive.google.com/file/d/1s08suwG5O2lBMNRXsmHu-z5JwapkC3lF/view?usp=sharing">
                                <img src={FoodDel} alt="" />
                            </a>
                        </div>
                    </div>

                    <div className="lg:w-1/3 p-4">
                        <div className="flex items-center gap-4 lg:mt-0 mt-8">
                            <div className="bg-purple-600 w-6 rounded-xl h-1"></div>
                            <div className="flex items-center gap-3">
                                <p className="text-white text-3xl font-bold">Food Del Website</p>
                                <p>
                                    <a href="https://github.com/yash-199/WorldNews"><FaGithub className="text-white text-3xl cursor-pointer" /></a>
                                </p>
                            </div>
                        </div>
                        <div className="my-5">
                            <p className="text-slate-500 text-justify pl-10 my-3">Food-Delivery is a full-stack food ordering website built with React JS, MongoDB, Express, Node JS, and Stripe. This project allows users to browse food items, add them to their shopping cart, and place orders with online payment through the Stripe payment gateway.</p>
                            <p className="text-white font-semibold py-1 font-lg text-justify pl-10 flex items-center gap-4">
                                <img src={star} alt="" />User Authentication: Sign up and log in functionality for customers.

                            </p>
                            <p className="text-white font-semibold py-1 font-lg text-justify pl-10 flex items-center gap-4">
                                <img src={star} alt="" />Shopping Cart: Add food items to a cart and manage orders.
                            </p>
                            <p className="text-white font-semibold py-1 font-lg text-justify pl-10 flex items-center gap-4">
                                <img src={star} alt="" />Stripe Payment Integration: Seamless online payment processing using Stripe.
                            </p>
                            <p className="text-white font-semibold py-1 font-lg text-justify pl-10 flex items-center gap-4">
                                <img src={star} alt="" />Order Status: Track and update the status of placed orders.
                            </p>
                            <p className="text-white font-semibold py-1 font-lg text-justify pl-10 flex items-center gap-4">
                                <img src={star} alt="" />Admin Panel: Manage food items, orders, and user accounts from an admin dashboard.
                            </p>
                        </div>
                        <div className="lg:flex items-center justify-center gap-4 mt-10 ml-10">
                            <div className="flex items-center justify-center gap-2 lg:my-0 my-2 bg-white/5 border border-slate-800 rounded-lg py-2 px-3">
                                <img src={assets.React} className="w-6" alt="ReactJS" />
                                <p className="text-white pt-1 text-sm">ReactJS</p>
                            </div>
                            <div className="flex items-center justify-center gap-2 lg:my-0 my-2 bg-white/5 border border-slate-800 rounded-lg py-2 px-3">
                                <img src={assets.Nodejs} className="w-6" alt="Nodejs" />
                                <p className="text-white pt-1 text-sm">NodeJS</p>
                            </div>
                            <div className="flex items-center justify-center gap-2 lg:my-0 my-2 bg-white/5 border border-slate-800 rounded-lg py-2 px-3">
                                <img src={assets.Express} className="w-6" alt="Express" />
                                <p className="text-white pt-1 text-sm">Express</p>
                            </div>
                            <div className="flex items-center justify-center gap-2 lg:my-0 my-2 bg-white/5 border border-slate-800 rounded-lg py-2 px-3">
                                <img src={assets.MongoDB} className="w-6" alt="MongoDB" />
                                <p className="text-white pt-1 text-sm">MongoDB</p>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>

            <FadeIn>
                {/* Project THree */}
                <div className="lg:flex items-center justify-center w-full mt-20 gap-4 p-4">
                    <div className="lg:w-1/2 bg-white/15 p-2 rounded-xl border border-slate-500 shadow-2xl">
                        <div className="bg-purple-600 rounded-xl">
                            <a href="https://drive.google.com/file/d/1NpmzhL9TOSY7AZfG37lf4tFC__NQFSkG/view?usp=sharing">
                                <img src={Doctor} alt="" />
                            </a>
                        </div>
                    </div>

                    <div className="lg:w-1/3">
                        <div className="flex items-center gap-4 lg:mt-0 mt-8">
                            <div className="bg-purple-600 w-6 rounded-xl h-1"></div>
                            <div className="flex items-center gap-3">
                                <p className="text-white text-3xl font-bold">Doctor Booking Appointment</p>
                                <p>
                                    <a href="https://github.com/yash-199/CuraConnect-Front-and-Backend"><FaGithub className="text-white text-3xl cursor-pointer" /></a>
                                </p>
                            </div>
                        </div>
                        <div className="my-5">
                            <p className="text-slate-500 text-justify pl-10 my-3">View multiple doctors based on specialty. Filter doctors by specialty and view details of specific doctors. Choose available date and time slots (within a 7-day window) to book appointments. View related doctors based on their specialty. Ensure a fully user-friendly and responsive design for seamless experience on all devices.</p>
                            <p className="text-white font-semibold py-1 font-lg text-justify pl-10 flex items-center gap-4">
                                <img src={star} alt="" />Filter doctors by their specialties.

                            </p>
                            <p className="text-white font-semibold py-1 font-lg text-justify pl-10 flex items-center gap-4">
                                <img src={star} alt="" />Appointment Booking: Book appointments with doctors for available dates and time slots.
                            </p>
                            <p className="text-white font-semibold py-1 font-lg text-justify pl-10 flex items-center gap-4">
                                <img src={star} alt="" />View detailed information about a selected doctor and see related doctors in the same specialty.
                            </p>
                            <p className="text-white font-semibold py-1 font-lg text-justify pl-10 flex items-center gap-4">
                                <img src={star} alt="" />Patients can sign up, log in, book appointments with doctors, and manage their bookings.
                            </p>
                            <p className="text-white font-semibold py-1 font-lg text-justify pl-10 flex items-center gap-4">
                                <img src={star} alt="" />Doctors can log in to view appointments, check earnings, and update their profiles from the dashboard.
                            </p>
                        </div>
                        <div className="lg:flex items-center justify-center gap-4 mt-10 ml-10">
                            <div className="flex items-center justify-center gap-2 lg:my-0 my-2 bg-white/5 border border-slate-800 rounded-lg py-2 px-3">
                                <img src={assets.React} className="w-6" alt="ReactJS" />
                                <p className="text-white pt-1 text-sm">ReactJS</p>
                            </div>
                            <div className="flex items-center justify-center gap-2 lg:my-0 my-2 bg-white/5 border border-slate-800 rounded-lg py-2 px-3">
                                <img src={assets.Nodejs} className="w-6" alt="Nodejs" />
                                <p className="text-white pt-1 text-sm">NodeJS</p>
                            </div>
                            <div className="flex items-center justify-center gap-2 lg:my-0 my-2 bg-white/5 border border-slate-800 rounded-lg py-2 px-3">
                                <img src={assets.Express} className="w-6" alt="Express" />
                                <p className="text-white pt-1 text-sm">Express</p>
                            </div>
                            <div className="flex items-center justify-center gap-2 lg:my-0 my-2 bg-white/5 border border-slate-800 rounded-lg py-2 px-3">
                                <img src={assets.MongoDB} className="w-6" alt="MongoDB" />
                                <p className="text-white pt-1 text-sm">MongoDB</p>
                            </div>
                        </div>
                    </div>
                </div>

            </FadeIn>

            <FadeIn>
                <p className="text-center font-bold text-4xl text-white mt-10">ReCom Library Coming Soon</p>
            </FadeIn>
        </div>
    );
};

export default Project;
