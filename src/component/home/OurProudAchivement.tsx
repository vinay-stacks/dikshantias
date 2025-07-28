"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Topper {
  id: number
  name: string
  service: string
  year: string
  rank: number
  image: string
}

const toppers: Topper[] = [
  {
    id: 1,
    name: "Gamini Singla",
    service: "CSE Result",
    year: "2021",
    rank: 3,
    image: "/img/result/gamini-result.jpg",
  },
  {
    id: 2,
    name: "Aishwarya Verma",
    service: "CSE Result",
    year: "2021",
    rank: 4,
   image: "/img/result/aishwarya-result.jpg",
  },
  {
    id: 3,
    name: "Yaksh Chaudhary",
    service: "CSE Result",
    year: "2021",
    rank: 6,
   image: "/img/result/gamini-result.jpg",
  },
  {
    id: 4,
    name: "Preetam Verma",
    service: "CSE Result",
    year: "2021",
    rank: 9,
    image: "/img/result/pritum-result.jpg",
  },
  {
    id: 5,
    name: "Shruti Sharma",
    service: "CSE Result",
    year: "2021",
    rank: 1,
    image: "/img/result/shruti-sharma-result.jpg",
  },
  {
    id: 6,
    name: "Arjun Reddy",
    service: "IFS",
    year: "2023",
    rank: 34,
     image: "/img/result/gamini-result.jpg",
  },
]

export default function OurProudAchivement() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(4)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1)
      } else if (window.innerWidth < 768) {
        setItemsPerView(2)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3)
      } else {
        setItemsPerView(4)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Reset current index when items per view changes to prevent going out of bounds
  useEffect(() => {
    const maxIndex = Math.max(0, toppers.length - itemsPerView)
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex)
    }
  }, [itemsPerView, currentIndex])

  const maxIndex = Math.max(0, toppers.length - itemsPerView)

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const next = prev + 1
      return next > maxIndex ? 0 : next // Loop back to start
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const next = prev - 1
      return next < 0 ? maxIndex : next // Loop to end
    })
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex))
  }

  return (
    <div className="py-5 px-2 md:px-4" style={{ backgroundColor: "#fff" }}>
      <div className="max-w-7xl md:mx-auto">

        {/* Toppers Section */}
        <div className="bg-slate-900 backdrop-blur-sm rounded-3xl p-6 md:p-8 lg:p-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-12">
            Recent UPSC Toppers 2023
          </h2>

          {/* Slider Container */}
          <div className="relative">
            {/* Navigation Buttons */}
            {toppers.length > itemsPerView && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all duration-200"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all duration-200"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </>
            )}

            {/* Slider */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
                  
                }}
              >
                {toppers.map((topper) => (
                  <div 
                    key={topper.id} 
                    className="flex-shrink-0 px-3" 
                    style={{ width: `${100 / itemsPerView}%` }}
                  >
                    <div className="text-center bg-white/6 border border-gray-100/20 py-8 rounded-2xl">
                      {/* Profile Image with Rank Badge */}
                      <div className="relative inline-block mb-4">
                        <div className="w-25 h-25 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-2 md:border-3 border-orange-400">
                          <Image
                            src={topper.image || "/placeholder.svg"}
                            alt={topper.name}
                            width={112}
                            height={112}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* AIR Badge */}
                        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                          AIR {topper.rank}
                        </div>
                      </div>

                      {/* Topper Info */}
                      <h3 className="text-lg md:text-xl font-bold text-white mb-1">{topper.name}</h3>
                      <p className="text-white/80 font-medium mb-1">{topper.service}</p>
                      <p className="text-orange-300 text-sm">{topper.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* View All Results Button */}
          <div className="text-center mt-12">
           
          </div>

          {/* Dots Indicator */}
          {toppers.length > itemsPerView && (
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-6 h-2 md:w-7 md:h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex ? "bg-white" : "bg-white/30"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}