'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Monitor, Building2, BookOpen, FileText } from 'lucide-react';
import Image from 'next/image';

interface Course {
  id: number;
  title: string;
  subtitle: string;
  bgColor: string;
  circleColor: string;
  icon: React.ReactNode;
  image: string;
}

const BestIasCoaching: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [slidesToShow, setSlidesToShow] = useState<number>(4);

  const courses: Course[] = [
    {
      id: 1,
      title: 'Online Courses',
      subtitle: 'Show more',
      bgColor: 'bg-red-100',
      circleColor: 'bg-red-300',
      icon: <Monitor className="w-8 h-8 text-red-600" />,
      image: '/api/placeholder/200/150'
    },
    {
      id: 2,
      title: 'Distance Learning Program',
      subtitle: 'Show more',
      bgColor: 'bg-purple-300',
      circleColor: 'bg-purple-500',
      icon: <Building2 className="w-8 h-8 text-purple-700" />,
      image: '/api/placeholder/200/150'
    },
    {
      id: 3,
      title: 'Test Series',
      subtitle: 'Show more',
      bgColor: 'bg-yellow-200',
      circleColor: 'bg-yellow-500',
      icon: <BookOpen className="w-8 h-8 text-yellow-500" />,
      image: '/api/placeholder/200/150'
    },
    {
      id: 4,
      title: 'Scholarship',
      subtitle: 'Show more',
      bgColor: 'bg-rose-200',
      circleColor: 'bg-rose-300',
      icon: <FileText className="w-8 h-8 text-rose-700" />,
      image: '/api/placeholder/200/150'
    }
    //  {
    //   id: 5,
    //   title: 'Scholarship',
    //   subtitle: 'Show more',
    //   bgColor: 'bg-blue-200',
    //   circleColor: 'bg-blue-300',
    //   icon: <FileText className="w-8 h-8 text-blue-700" />,
    //   image: '/api/placeholder/200/150'
    // }
  ];

  // Calculate slides to show based on screen size
  useEffect(() => {
    const updateSlidesToShow = (): void => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setSlidesToShow(4); // Desktop: show 4 cards
      } else if (width >= 768) {
        setSlidesToShow(2); // Tablet: show 2 cards
      } else {
        setSlidesToShow(1); // Mobile: show 1 card
      }
    };

    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  // Reset current slide when slidesToShow changes to prevent going out of bounds
  useEffect(() => {
    const maxSlides = Math.max(0, courses.length - slidesToShow);
    if (currentSlide > maxSlides) {
      setCurrentSlide(maxSlides);
    }
  }, [slidesToShow, courses.length, currentSlide]);

  const maxSlides = Math.max(0, courses.length - slidesToShow);

  const nextSlide = (): void => {
    setCurrentSlide((prev: number) => {
      const next = prev + 1;
      return next > maxSlides ? 0 : next; // Loop back to start
    });
  };

  const prevSlide = (): void => {
    setCurrentSlide((prev: number) => {
      const next = prev - 1;
      return next < 0 ? maxSlides : next; // Loop to end
    });
  };

  const goToSlide = (index: number): void => {
    setCurrentSlide(Math.min(index, maxSlides));
  };

  return (
    <div className="bg-white py-8 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-900 text-left">
            Best <span className="text-[#f43144]"> IAS Coaching  </span>Institute in India
          </h1>
        </div>

        {/* Slider Container */}
        <div className="relative">
          <div className="overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(-${(currentSlide * 100) / slidesToShow}%)`,
                // width: `${courses.length * (100 / slidesToShow)}%`
              }}
            >
              {courses.map((course: Course) => (
                <div 
                  key={course.id} 
                  className="flex-shrink-0 px-3"
                  style={{ 
                    width: `${100 / slidesToShow}%`
                  }}
                >
                  <CourseCard course={course} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          {courses.length > slidesToShow && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 md:p-3 z-10 hover:bg-gray-50 transition-colors"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-gray-600" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 md:p-3 z-10 hover:bg-gray-50 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-gray-600" />
              </button>
            </>
          )}

          {/* Dots Indicator */}
          {courses.length > slidesToShow && (
            <div className="flex justify-center mt-6 md:mt-8 gap-2">
              {Array.from({ length: maxSlides + 1 }, (_, index: number) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-6 h-2 md:w-7 md:h-3 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-[#f43144]' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className={`${course.bgColor} rounded-3xl p-6 md:p-8 h-80 md:h-96 relative overflow-hidden group hover:shadow-lg transition-shadow duration-300`}>
      {/* Header with Icon */}
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-white rounded-lg shadow-sm">
          {course.icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
        {course.title}
      </h3>

      {/* Subtitle */}
      <p className="text-sm md:text-base text-gray-600 font-medium mb-8">
        {course.subtitle}
      </p>

      {/* Circular Image Container */}
      <div className="absolute bottom-6 right-6">
        <div className={`${course.circleColor} rounded-full p-4 w-32 h-32 md:w-40 md:h-40 flex items-center justify-center overflow-hidden shadow-lg`}>
          {/* Document/Papers Image */}
          <div className="relative w-20 h-16 md:w-24 md:h-20">
            <div className="absolute inset-0 bg-white rounded-lg shadow-md transform rotate-12">
              <div className="p-2 space-y-1">
                {/* <div className="h-1 bg-gray-300 rounded w-3/4"></div>
                <div className="h-1 bg-gray-300 rounded w-1/2"></div>
                <div className="h-1 bg-gray-300 rounded w-2/3"></div>
                <div className="h-1 bg-gray-300 rounded w-3/4"></div>
                <div className="h-1 bg-gray-300 rounded w-1/2"></div> */}
              </div>
            </div>
            <div className="absolute inset-0 bg-white rounded-lg shadow-md transform -rotate-6 -translate-x-2">
              <div className="p-2 space-y-1">
                <div className="h-1 bg-gray-400 rounded w-2/3"></div>
                <div className="h-1 bg-gray-400 rounded w-3/4"></div>
                <div className="h-1 bg-gray-400 rounded w-1/2"></div>
                <div className="h-1 bg-gray-400 rounded w-2/3"></div>
                <div className="h-1 bg-gray-400 rounded w-3/4"></div>
              </div>
            </div>
            <div className="absolute inset-0 bg-white rounded-lg shadow-lg">
              <div className="p-2 space-y-1">
                <div className="h-1 bg-gray-600 rounded w-3/4"></div>
                <div className="h-1 bg-gray-600 rounded w-1/2"></div>
                <div className="h-1 bg-gray-600 rounded w-2/3"></div>
                <div className="h-1 bg-gray-600 rounded w-3/4"></div>
                <div className="h-1 bg-gray-600 rounded w-1/2"></div>
                <div className="h-1 bg-gray-600 rounded w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hover Effect */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div> */}
    </div>
  );
};

export default BestIasCoaching;