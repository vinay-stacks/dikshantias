'use client';
import BestIasCoaching from '@/component/home/BestIasCoaching';
import BookFreeDemo from '@/component/home/BookFreeDemo';
import FeatureUpsc from '@/component/home/FeatureUpsc';
import HeroSlider from '@/component/home/HeroSlider';
import NewsUpdatesSection from '@/component/home/NewsUpdatesSection';
import OurProudAchivement from '@/component/home/OurProudAchivement';
import SuccessStart from '@/component/home/SuccessStart';
import Testimonials from '@/component/home/Testimonials';
import React from 'react'


function HomePage() {
  return (
    <>
      <HeroSlider />
      <SuccessStart />
      <FeatureUpsc />
      <OurProudAchivement />
      <BookFreeDemo />
      <BestIasCoaching />
      <Testimonials />
      <NewsUpdatesSection />
    </>
  )
}

export default HomePage