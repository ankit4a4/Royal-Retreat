'use client';

import { motion } from 'framer-motion';
import RoomsGrid from '@/components/rooms/RoomsGrid';
import RoomFeature from '@/components/rooms/RoomFeature';
import HeroSection from '@/components/home/HeroSection';

export default function Rooms() {


  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        texts={[
          'ROOMS',
          'Palm Bliss',
        ]}
        welcomeHeading="ROOMS"
      />

      {/* Rooms Grid */}
      <RoomsGrid />

      {/* Features Section */}
      <RoomFeature />
    </div>
  );
}