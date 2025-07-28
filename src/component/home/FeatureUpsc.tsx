'use client'
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock, Users, CheckCircle } from 'lucide-react';
import Image from 'next/image';

interface Program {
  id: number;
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  originalPrice: number;
  currentPrice: number;
  rating: number;
  duration: string;
  students: string;
  features: string[];
  moreFeatures: number;
  image: string;
  backcolor: string;
}

interface ProgramCardProps {
  program: Program;
}

const FeatureUpsc: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [slidesToShow, setSlidesToShow] = useState<number>(1);

  const programs: Program[] = [
    {
      id: 1,
      badge: 'Most Popular',
      badgeColor: 'bg-green-500',
      title: 'Prelims Foundation',
      description: 'Complete preparation for UPSC Preliminary Examination',
      originalPrice: 65000,
      currentPrice: 48000,
      rating: 4.9,
      duration: '12 Months',
      students: '3,500+',
      features: [
        'Complete NCERT Foundation',
        'Daily Current Affairs',
        '25+ Mock Tests'
      ],
      moreFeatures: 2,
      image: '/img/Prelims-Foundation-Course.webp',
      backcolor: 'purple-200'
    },
    {
      id: 2,
      badge: 'High Success Rate',
      badgeColor: 'bg-blue-500',
      title: 'Mains Intensive Course',
      description: 'Comprehensive mains preparation with answer writing mastery',
      originalPrice: 70000,
      currentPrice: 58000,
      rating: 4.8,
      duration: '10 Months',
      students: '2,200+',
      features: [
        'Essay Writing Masterclass',
        'GS Paper-wise Coverage',
        'Weekly Answer Tests'
      ],
      moreFeatures: 2,
      image: '/img/Mains-Intensive-Course.webp',
      backcolor: 'purple-200'
    },
    {
      id: 3,
      badge: 'Best Value',
      badgeColor: 'bg-red-600',
      title: 'Complete UPSC Course',
      description: 'End-to-end preparation from Prelims to Interview',
      originalPrice: 125000,
      currentPrice: 89000,
      rating: 4.9,
      duration: '18 Months',
      students: '4,100+',
      features: [
        'Prelims + Mains + Interview',
        'Optional Subject Coaching',
        'Unlimited Mock Tests'
      ],
      moreFeatures: 2,
      image: '/img/Complete-UPSC-Course.webp',
      backcolor: 'purple-200'
    },
    {
      id: 4,
      badge: 'Expert Faculty',
      badgeColor: 'bg-purple-500',
      title: 'Sociology Optional',
      description: 'Specialized coaching for Sociology optional subject',
      originalPrice: 52000,
      currentPrice: 38000,
      rating: 4.7,
      duration: '8 Months',
      students: '1,800+',
      features: [
        'Subject Expert Faculty',
        'Previous Year Analysis',
        'Weekly Tests'
      ],
      moreFeatures: 2,
      image: '/img/Sociology-Optional.webp',
      backcolor: 'purple-200'
    },
    {
      id: 5,
      badge: 'New Launch',
      badgeColor: 'bg-orange-500',
      title: 'Essay Writing Masterclass',
      description: 'Focused training on essay writing techniques',
      originalPrice: 35000,
      currentPrice: 25000,
      rating: 4.6,
      duration: '6 Months',
      students: '1,200+',
      features: [
        'Expert Essay Review',
        'Weekly Practice Tests',
        'Personalized Feedback'
      ],
      moreFeatures: 2,
      image: '/img/Essay-Writing-Masterclass.webp',
      backcolor: 'purple-200'
    },
    {
      id: 6,
      badge: 'Limited Seats',
      badgeColor: 'bg-indigo-500',
      title: 'Interview Guidance',
      description: 'Comprehensive interview preparation with mock sessions',
      originalPrice: 45000,
      currentPrice: 32000,
      rating: 4.8,
      duration: '4 Months',
      students: '800+',
      features: [
        'Mock Interview Sessions',
        'Personality Development',
        'Current Affairs Focus'
      ],
      moreFeatures: 2,
      image: '/img/Interview-Guidance-Program.webp',
      backcolor: 'purple-200'
    }
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
    const maxSlides = Math.max(0, programs.length - slidesToShow);
    if (currentSlide > maxSlides) {
      setCurrentSlide(maxSlides);
    }
  }, [slidesToShow, programs.length, currentSlide]);

  const maxSlides = Math.max(0, programs.length - slidesToShow);

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

  // Auto-slide functionality (optional - can be enabled)
  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      if (programs.length > slidesToShow) {
        nextSlide();
      }
    }, 50000000); // Auto-slide every 5 seconds

    return () => clearInterval(autoSlideInterval);
  }, [slidesToShow, programs.length]);

  return (
    <div className="bg-white py-6 md:py-16  md:px-4 px-2">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-start">
            Featured UPSC 
            <span className="text-[#f43144]"> Coaching Programs</span>
          </h2>
        </div>

        {/* Slider Container */}
        <div className="relative">
          <div 
            ref={sliderRef}
            className="overflow-hidden rounded-lg"
          >
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(-${(currentSlide * 100) / slidesToShow}%)`,
               
              }}
            >
              {programs.map((program: Program) => (
                <div 
                  key={program.id} 
                  className="flex-shrink-0 md:px-3 px-0"
                  style={{ 
                    width: `${100 / slidesToShow}%`
                  }}
                >
                  <ProgramCard program={program} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          {programs.length > slidesToShow && (
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
          {programs.length > slidesToShow && (
            <div className="flex justify-center mt-6 md:mt-8 gap-2">
              {Array.from({ length: maxSlides + 1 }, (_, index: number) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-7 h-2 md:w-7 md:h-3 rounded-full transition-colors ${
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

const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 relative h-full bg-white">
      {/* Badge */}
      <div className={`absolute top-3 md:top-4 left-3 md:left-4 ${program.badgeColor} text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium z-10`}>
        {program.badge}
      </div>

      {/* Price Badge */}
      <div className="absolute top-3 md:top-4 right-3 md:right-4 bg-white rounded-lg shadow-md p-1.5 md:p-2 z-10">
        <div className="text-gray-400 text-xs md:text-sm line-through">₹{program.originalPrice.toLocaleString()}</div>
        <div className="text-[#f43144] font-bold text-sm md:text-lg">₹{program.currentPrice.toLocaleString()}</div>
      </div>

      {/* Rating */}
      <div className="absolute top-16 md:top-20 left-3 md:left-4 flex items-center gap-2 mb-3 z-10">
        <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-lg text-xs md:text-sm font-medium flex items-center gap-1">
          ⭐ {program.rating}
        </div>
      </div>

      {/* Course Image */}
      <div className="h-40 md:h-48 bg-gradient-to-r from-gray-100 to-gray-200 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent">
          <Image 
            src={program.image} 
            width={500} 
            height={300} 
            alt={program.title} 
            className="object-cover h-full w-full" 
          />
        </div>
        {/* Fallback placeholder */}
        <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
          <div className="text-2xl md:text-4xl font-bold text-gray-400">{program.title.charAt(0)}</div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6 flex flex-col h-auto">
        {/* Title and Description */}
        <h3 className="text-lg md:text-xl font-bold text-[#00131d] mb-2">{program.title}</h3>
        <p className="text-gray-800 text-sm leading-relaxed mb-4 line-clamp-2">{program.description}</p>

        {/* Stats */}
        <div className="flex items-center justify-between gap-4 mb-4 text-sm text-[#ee6b36]">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3 md:w-4 md:h-4" />
            <span className="text-xs md:text-sm">{program.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3 h-3 md:w-4 md:h-4" />
            <span className="text-xs md:text-sm">{program.students}</span>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-2 mb-4 md:mb-6 flex-grow">
          {program.features.slice(0, 2).map((feature: string, index: number) => (
            <div key={index} className="flex items-center gap-2 text-xs md:text-sm">
              <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-green-500 flex-shrink-0" />
              <span className="text-gray-700 line-clamp-1">{feature}</span>
            </div>
          ))}
          {program.features.length > 2 && (
            <div className="text-[#f43144] text-xs md:text-sm font-medium">
              +{program.features.length - 2 + program.moreFeatures} more features
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="space-y-2 md:space-y-3 mt-auto">
          <button className="w-full bg-[#f43144] hover:bg-[#d12a3a] text-white font-semibold py-2.5 md:py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-sm md:text-base">
            Enroll Now
            <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
          </button>
          <button className="w-full text-gray-600 hover:text-gray-800 font-medium py-2 transition-colors duration-200 text-sm md:text-base">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureUpsc;