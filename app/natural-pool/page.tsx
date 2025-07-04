'use client';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/natural-pool/FeaturesSection';
import PoolGallery from '@/components/natural-pool/PoolGallery';
import Amenities from '@/components/natural-pool/Amenities';
import PoolHours from '@/components/natural-pool/PoolHours';

export default function NaturalPool() {



  return (
    <>
      {/* Hero Section */}
      <HeroSection
        
        welcomeHeading="NATURAL POOL"
      />

      {/*  */}
      <FeaturesSection />

      <PoolGallery />
      <Amenities />
      <PoolHours />

      {/* Pool Hours & Booking */}

    </>
  );
}