'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Crown, Award, Users, Sparkles } from 'lucide-react';
import StorySection from '@/components/about/StorySection';
import ValuesSection from '@/components/about/ValuesSection';
import AwardsSection from '@/components/about/AwardsSection';
import HeroSection from '@/components/home/HeroSection';

export default function About() {

  return (
    <>
      <HeroSection
        texts={[
          'ABOUT US',
          'Palm Bliss',
        ]}
        welcomeHeading="ABOUT US"
      />
      <StorySection />
      <ValuesSection />
      <AwardsSection />
    </>
  );
}