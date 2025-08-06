'use client'
import Image from 'next/image'
import React from 'react'

const AshutoshDixit = () => {
  return (
    <div className="min-h-screen bg-white p-4 md:p-8 flex items-center justify-center">
      <div className="w-full max-w-7xl bg-white shadow-md rounded-lg overflow-hidden">
        {/* Cover Banner */}
        <div className="relative h-48 w-full">
          <Image
            src="/images/profile-banner.jpg" // Replace with your banner image path
            alt="Banner"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Profile Info */}
        <div className="p-6">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            {/* Profile Image */}
            <div className="relative -mt-20 w-24 h-24 md:w-28 md:h-28 border-4 border-white rounded-full overflow-hidden">
              <Image
                src="/images/adrian.jpg" // Replace with your profile image
                alt="Adrian Brewer"
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* Name + Info */}
            <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
              <h1 className="text-xl font-semibold text-gray-900">Adrian Brewer</h1>
              <p className="text-sm text-gray-600">Engineer at BB Agency • Industry</p>
              <p className="text-sm text-gray-500">New York, United States</p>
            </div>

            {/* Send Message Button */}
            <div className="mt-4 md:mt-0 md:ml-auto">
              <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition">
                Send Message
              </button>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded">UX Research</span>
            <span className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded">CX Strategy</span>
            <span className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded">Project Management</span>
          </div>

          {/* About Me Section */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">About Me</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Hi, my name is Adrian Brewer, I&apos;m the Co-founder and Head of Design at BB agency. Designer at heart.
              <br />
              <br />
              Head of Design might be an overstatement, but as with many 20 people agencies I need to wear many different hats. I manage creative teams and set up processes that allow our collaborators and clients to achieve growth, scalability, and progress.
              <br />
              <br />
              My design journey started in 2012, sitting across my brother in our home office on the island of Krk, Croatia. We designed our way across 99designs and later on to the Dribbble Top 20 teams in the world.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AshutoshDixit
