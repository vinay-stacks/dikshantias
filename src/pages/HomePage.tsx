'use client';
import BestIasCoaching from '@/component/home/BestIasCoaching';
import BookFreeDemo from '@/component/home/BookFreeDemo';
import DirectorMessage from '@/component/home/DirectorMessage';
import FeatureUpsc from '@/component/home/FeatureUpsc';
import HeroSlider from '@/component/home/HeroSlider';
import NewsUpdatesSection from '@/component/home/NewsUpdatesSection';
import OurProudAchivement from '@/component/home/OurProudAchivement';
import SuccessStart from '@/component/home/SuccessStart';
import TabBestIasCoachingCenter from '@/component/home/TabBestIasCoachingCenter';
import Testimonials from '@/component/home/Testimonials';
import TopperReview from '@/component/home/TopperReview';
import React from 'react'


function HomePage() {
  return (
    <>
      <HeroSlider />
      <TopperReview />
      <OurProudAchivement />
      <SuccessStart />
      <DirectorMessage />
      <FeatureUpsc />
      <BookFreeDemo />
      <BestIasCoaching />
      <TabBestIasCoachingCenter />
      <Testimonials />
      <NewsUpdatesSection />
    </>
  )
}

export default HomePage