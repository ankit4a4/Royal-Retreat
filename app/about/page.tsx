'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Crown, Award, Users, Sparkles } from 'lucide-react';
import AboutHero from '@/components/about/AboutHero';
import StorySection from '@/components/about/StorySection';
import ValuesSection from '@/components/about/ValuesSection';
import AwardsSection from '@/components/about/AwardsSection';

export default function About() {

  return (
    <>
      <AboutHero />
      <StorySection />
      <ValuesSection />
      <AwardsSection />
    </>
  );
}