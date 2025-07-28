'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [isSliding, setIsSliding] = useState(false);

    const testimonials = [
        {
            id: 1,
            name: "Priya Sharma",
            rank: "AIR 23",
            year: "2024",
            image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
            quote: "Dikshant IAS provided me with the perfect blend of traditional coaching and modern teaching methods. The faculty's guidance was instrumental in my success.",
            background: "B.Tech from IIT Delhi",
            attempts: "2nd Attempt",
            optional: "Sociology"
        },
        {
            id: 2,
            name: "Rajesh Kumar",
            rank: "AIR 45",
            year: "2024",
            image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
            quote: "The answer writing sessions and personal mentorship made all the difference. The systematic approach helped me crack UPSC in my first attempt.",
            background: "M.A. Political Science",
            attempts: "1st Attempt",
            optional: "Political Science"
        },
        {
            id: 3,
            name: "Anjali Patel",
            rank: "AIR 67",
            year: "2024",
            image: "https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
            quote: "As a working professional, the flexible timings and comprehensive study material were perfect. The current affairs modules kept me updated.",
            background: "CA, Working Professional",
            attempts: "3rd Attempt",
            optional: "Commerce & Accountancy"
        },
        {
            id: 4,
            name: "Amit Singh",
            rank: "AIR 89",
            year: "2024",
            image: "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
            quote: "The test series with detailed analysis helped me track my progress. The faculty's experience and dedication are truly commendable.",
            background: "B.A. History (Hons)",
            attempts: "2nd Attempt",
            optional: "History"
        },
        {
            id: 5,
            name: "Sneha Reddy",
            rank: "AIR 156",
            year: "2024",
            image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
            quote: "The structured approach and optional subject coaching were excellent. The peer learning environment was very motivating and supportive.",
            background: "M.Sc. Geography",
            attempts: "1st Attempt",
            optional: "Geography"
        },
        {
            id: 6,
            name: "Vikram Joshi",
            rank: "AIR 234",
            year: "2023",
            image: "https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
            quote: "The interview preparation gave me confidence to face the UPSC panel. Mock interviews with experienced panelists were crucial for my success.",
            background: "B.E. Mechanical",
            attempts: "3rd Attempt",
            optional: "Mechanical Engineering"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const nextTestimonial = () => {
        if (isSliding) return;
        setIsSliding(true);
        setTimeout(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
            setIsSliding(false);
        }, 150);
    };

    const prevTestimonial = () => {
        if (isSliding) return;
        setIsSliding(true);
        setTimeout(() => {
            setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
            setIsSliding(false);
        }, 150);
    };

    return (
        <section className="py-5 md:py-5">
            <div className="mx-auto sm:px-6 lg:px-8 max-w-7xl">

                {/* Section Header */}
                <div className="mb-12 md:mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                        Success Stories That <span className="text-[#f43144] mt-1 md:mt-2">Inspire Excellence</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                        Meet our successful candidates who cleared UPSC and are now serving the nation
                    </p>
                </div>

                {/* Testimonials Slider */}
                <div className="relative">
                    <div className="bg-slate-900 rounded-2xl md:rounded-3xl shadow-xl relative overflow-hidden">

                        {/* Decorative Quote Icon */}
                        <div className="absolute top-4 right-4 md:top-6 md:right-6 opacity-10 z-10">
                            <Quote className="w-16 h-16 md:w-24 md:h-24 text-yellow-400" />
                        </div>

                        {/* Testimonials Container with Sliding Effect */}
                        <div className="relative w-full overflow-hidden">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                            >
                                {testimonials.map((testimonial, index) => (
                                    <div key={testimonial.id} className="w-full flex-shrink-0 p-6 sm:p-8 md:p-12">
                                        {/* Testimonial Content */}
                                        <div className="grid md:grid-cols-5 gap-6 md:gap-8 items-center relative z-10">

                                            {/* Profile Image and Basic Info */}
                                            <div className="md:col-span-2 text-center">
                                                <div className="relative inline-block mb-4 md:mb-6">
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full mx-auto shadow-lg border-4 border-rose-100"
                                                    />
                                                </div>

                                                <div className="space-y-2 md:space-y-3">
                                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-50">
                                                        {testimonial.name}
                                                    </h3>
                                                    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
                                                        <span className="bg-[#f43144] text-white px-3 py-1 md:px-4 md:py-2 rounded-full font-bold text-sm md:text-lg">
                                                            {testimonial.rank}
                                                        </span>
                                                        <span className="bg-white/15 text-white px-3 py-1 md:px-4 md:py-2 rounded-full font-bold text-sm md:text-lg">
                                                            {testimonial.year}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Quote and Details */}
                                            <div className="md:col-span-3 space-y-4 md:space-y-6">

                                                {/* Quote */}
                                                <div>
                                                    <Quote className="w-8 h-8 md:w-12 md:h-12 text-orange-300 mb-3 md:mb-4" />
                                                    <blockquote className="text-base sm:text-lg md:text-xl text-gray-50 leading-relaxed italic">
                                                        &quot;{testimonial.quote}&quot;
                                                    </blockquote>
                                                </div>

                                                {/* Details Grid */}
                                                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                                                    <div className="bg-gray-50 p-3 md:p-4 rounded-xl">
                                                        <h4 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">Background</h4>
                                                        <p className="text-gray-600 text-xs md:text-sm">{testimonial.background}</p>
                                                    </div>
                                                    <div className="bg-gray-50 p-3 md:p-4 rounded-xl">
                                                        <h4 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">Attempts</h4>
                                                        <p className="text-gray-600 text-xs md:text-sm">{testimonial.attempts}</p>
                                                    </div>
                                                    <div className="bg-gray-50 p-3 md:p-4 rounded-xl sm:col-span-2 md:col-span-1">
                                                        <h4 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">Optional</h4>
                                                        <p className="text-gray-600 text-xs md:text-sm">{testimonial.optional}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Navigation Arrows */}
                            <button
                                onClick={prevTestimonial}
                                disabled={isSliding}
                                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-lg rounded-full p-2 md:p-3 hover:bg-rose-700 hover:text-white transition-all duration-300 group z-20 disabled:opacity-50 disabled:cursor-not-allowed"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
                            </button>

                            <button
                                onClick={nextTestimonial}
                                disabled={isSliding}
                                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-lg rounded-full p-2 md:p-3 hover:bg-rose-700 hover:text-white transition-all duration-300 group z-20 disabled:opacity-50 disabled:cursor-not-allowed"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
                            </button>
                        </div>

                        {/* Indicators */}
                        <div className="flex justify-center md:mt-8 space-x-2 mb-7">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        if (!isSliding) {
                                            setIsSliding(true);
                                            setTimeout(() => {
                                                setCurrentTestimonial(index);
                                                setIsSliding(false);
                                            }, 150);
                                        }
                                    }}
                                    disabled={isSliding}
                                    className={`w-6 h-2 md:w-7 md:h-3 rounded-full duration-300 disabled:cursor-not-allowed ${index === currentTestimonial
                                        ? 'bg-orange-500 '
                                        : 'bg-gray-400 hover:bg-orange-400'
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;