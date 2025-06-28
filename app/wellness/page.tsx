'use client';
import Treatments from '@/components/wellness/Treatments';
import HeroSection from '@/components/home/HeroSection';
import Facilities from '@/components/wellness/Facilities';
import Packages from '@/components/wellness/Packages';

export default function Wellness() {
  return (
    <div>
      <HeroSection
        texts={[
          'WELLNESS',
          'Palm Bliss',
        ]}
        welcomeHeading="WELLNESS"
      />
      <Treatments />
      <Packages />
      <Facilities />
    </div>
  );
}