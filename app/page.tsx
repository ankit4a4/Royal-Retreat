'use client';

import HeroSection from '@/components/home/HeroSection';
import HowToReach from '@/components/home/HowToReach';
import ViewsSection from '@/components/home/ViewsSection';
import CuisineSection from '@/components/home/CuisineSection';
import FacilitiesSection from '@/components/home/FacilitiesSection';
import AboutSection from '@/components/home/AboutSection ';
import HomeRooms from '@/components/home/HomeRooms';
import HomeYoga from '@/components/home/HomeYoga';
import HomeWellness from '@/components/home/HomeWellness';
import HomeNaturalPool from '@/components/home/HomeNaturalPool';
import HomeGallery from '@/components/home/HomeGallery';
import Testimonials from '@/components/home/testimonials';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <HomeWellness />
      <HomeRooms />
      <HomeYoga />
      <HomeNaturalPool />
      <HomeGallery />
      <Testimonials />
      {/* <ViewsSection /> */}
      {/* <CuisineSection /> */}
      {/* <FacilitiesSection /> */}
    </div>
  );
}