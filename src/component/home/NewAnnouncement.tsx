'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function NewAnnouncement() {
    const courses = [
        { name: "E-Learning", color: "bg-purple-200", icon: "⏰" },
        { name: "What to  Read in The Indian Express", color: "bg-green-200", icon: "🏫" },
        { name: "Editorial Analysis", color: "bg-red-200", icon: "📚" },
        { name: "What to Read in The Hindu", color: "bg-yellow-200", icon: "🎥" },
        { name: "Important Facts of the Day ", color: "bg-blue-200", icon: "👥" },
        { name: "Daily Current Affairs", color: "bg-pink-200", icon: "✍️" },
    ];

    return (
        <div className="bg-white md:mt-2 mx-0">

            {/* Popular Courses Card Slider with Autoplay */}
            <div className="container max-w-7xl mx-auto mt-4 md:py-8">
                <h2 className="text-xl md:text-3xl font-bold mb-4 text-[#00072c] pl-2 md:pl-0">
                    New<span className="text-[#f43144]"> Announcements</span>
                </h2>
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={8}
                    slidesPerView={2}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 6 },
                    }}
                >
                    {courses.map((course, index) => (
                        <SwiperSlide key={index}>
                            <div className={`md:w-48 w-44 md:h-32 h-26 ${course.color} rounded-lg flex flex-col text-center p-4`}>
                                <span className="text-3xl mb-2">{course.icon}</span>
                                <span className="text-[13px] md:text-[15px] font-bold text-[#000622]">{course.name}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </div>
    );
}
