'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface VideoItem {
  id: number;
  title: string;
  youtubeUrl: string;
}

const videos: VideoItem[] = [
  {
    id: 1,
    title: 'Shruti Sharma Air- 01',
    youtubeUrl: 'https://www.youtube.com/embed/Kb5r2kHeLOM',
  },
  {
    id: 2,
    title: 'Gamini Singla, CSE 2023, AIR 03',
    youtubeUrl: 'https://www.youtube.com/embed/az1ywMBYl3I',
  },
  {
    id: 3,
    title: 'Prince Kumar - Rank 89 | UPSC 2022',
    youtubeUrl: 'https://www.youtube.com/embed/jhtHC2h7tOw',
  },
  {
    id: 4,
    title: 'Madhav - Rank 148 | CSE 2022',
    youtubeUrl: 'https://www.youtube.com/embed/rcZuEQxVDlw',
  },
  {
    id: 5,
     title: 'Shruti Sharma Air- 01',
    youtubeUrl: 'https://www.youtube.com/embed/Kb5r2kHeLOM',
  },
  {
    id: 6,
   title: 'Gamini Singla, CSE 2023, AIR 03',
    youtubeUrl: 'https://www.youtube.com/embed/az1ywMBYl3I',
  },
];

export default function TopperReview() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 768) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

const maxIndex = Math.max(0, videos.length - itemsPerView);
  // Handle autoplay
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1 > maxIndex ? 0 : prev + 1));
  }, 3000); // Change slide every 5 seconds

  return () => clearInterval(interval);
}, [maxIndex]);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsPerView]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 > maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="py-10 px-4 bg-[#ecf4fc] mb-10">
      <div className="max-w-7xl mx-auto rounded-3xl">
        <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-12 text-center">
          Toppers Views About <span className="text-[#f43144]"> Dikshant IAS</span>
        </h2>

        <div className="relative">
          {/* Navigation Buttons */}
     
          {/* Slider */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
              }}
            >
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="flex-shrink-0 px-3 pb-6"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="bg-white border border-white rounded-xl shadow-lg overflow-hidden p-2">
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                        src={video.youtubeUrl}
                        title={video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full rounded-lg"
                      ></iframe>
                    </div>
                    <div className="p-3 text-gray-900 text-sm text-center font-bold bg-white">
                      {video.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Bullets */}
          {videos.length > itemsPerView && (
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-6 h-2 md:w-7 md:h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex ? 'bg-[#f43144]' : 'bg-[#ff7d8a]'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
