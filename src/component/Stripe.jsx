import React from "react";
import star from "../assets/star.svg";

const words = [
    "Accessible", "Responsive", "Dynamic", "Scalable",
    "Interactive", "Secure", "Reliable", "Engaging"
];

const Stripe = () => {
    return (
        <div className="relative h-40 w-full bg-black overflow-hidden">
            {/* First Stripe - Rotated Negative with Seamless Marquee */}
            <div className="absolute top-1/2 left-[-20%] w-[140%] bg-blue-700 py-3 lg:rotate-[-12] rotate-[-12] overflow-hidden">

                <div className="flex whitespace-nowrap animate-marquee-reverse">
                    {/* Repeated set for seamless effect */}
                    {[...words, ...words].map((word, i) => (
                        <div key={i} className="flex items-center gap-2 text-white text-4xl font-medium mx-4">
                            <span>{word}</span>
                            <img src={star} alt="star" className="w-6 h-6" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Second Stripe - Rotated Positive with Seamless Marquee */}
            <div className="absolute top-1/2 left-[-10%] w-[120%] bg-red-700 py-3 lg:rotate-6 rotate-12 overflow-hidden">
                <div className="flex whitespace-nowrap animate-marquee">
                    {/* Repeated set for seamless effect */}
                    {[..."Hire Me • Call Me".repeat(2)].map((_, i) => (
                        <p key={i} className="text-white text-4xl font-medium mx-8">Hire Me • Call Me</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stripe;
