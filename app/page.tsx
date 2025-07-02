'use client';

import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection ';
import HomeRooms from '@/components/home/HomeRooms';
import HomeYoga from '@/components/home/HomeYoga';
import HomeWellness from '@/components/home/HomeWellness';
import HomeNaturalPool from '@/components/home/HomeNaturalPool';
import HomeGallery from '@/components/home/HomeGallery';
import Testimonials from '@/components/home/testimonials';
import FacilitiesGrid from '@/components/home/FacilitiesGrid';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection
        texts={[
          'WELCOME',
          'Palm Bliss',
          'Luxury Stay',
          'Wellness Resort',
          'Nature Escapes',
          'Himalayan Hospitality',
        ]}
        welcomeHeading="WELCOME"
      />
      <AboutSection />
      <HomeWellness />
      <HomeRooms />
      {/* <HomeYoga /> */}
      <FacilitiesGrid/>
      <HomeNaturalPool />
      <HomeGallery />
      <Testimonials />
      {/* <ViewsSection /> */}
      {/* <CuisineSection /> */}
      {/* <FacilitiesSection /> */}
    </div>
  );
}