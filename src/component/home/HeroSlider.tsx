'use client'
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const courses = [
        { name: "Online Courses", color: "bg-purple-200", icon: "⏰" },
        { name: "Offline Course", color: "bg-yellow-200", icon: "🎥" },
        { name: "Mentorship Programme", color: "bg-green-200", icon: "🏫" },
        { name: "Essay Answer Writing", color: "bg-pink-200", icon: "✍️" },
        { name: "Interview Guidance", color: "bg-red-200", icon: "📚" },
        { name: "E-Learning", color: "bg-blue-200", icon: "👥" },
    ];
    const slides = [
        { id: 1, title: 'Slide 1', image: '/img/hero-slider.jpg' },
        { id: 2, title: 'Slide 2', image: '/img/hero-slider-2.webp' },
        { id: 3, title: 'Slide 3', image: '/img/hero-slider.jpg' },
        { id: 4, title: 'Slide 4', image: '/img/hero-slider-2.webp' },
    ];

    return (
        <div className="bg-white mt-4">

            {/* Top Slider */}
            <div className="max-w-7xl md:mx-auto mx-1">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 1,
                        },
                        1024: {
                            slidesPerView: 1,
                        },
                    }}
                    className="md:rounded-xl rounded-lg"
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className="h-auto bg-white shadow-md md:rounded-lg overflow-hidden flex items-center justify-center">
                                <Image width={1920} height={500} src={slide.image} alt={slide.title} className="w-full h-full" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Popular Courses Card Slider */}
            <div className="container max-w-7xl mx-auto my-4 md:py-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 pl-2 md:pl-0">Popular <span className="text-[#f43144]">  Courses</span></h2>
                <div className="flex overflow-x-auto space-x-6 pb-4 hide-scrollbar mx-2 md:mx-0">
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            className={`flex-shrink-0 md:w-48 w-44 md:h-32 h-26 ${course.color} rounded-lg flex flex-col text-center p-4`}
                        >
                            <span className="text-3xl mb-2">{course.icon}</span>
                            <span className="text-sm md:text-lg font-bold">{course.name}</span>
                            {/* <span className="text-sm text-gray-600">›</span> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}