'use client';


import RoomsGrid from '@/components/rooms/RoomsGrid';
import RoomFeature from '@/components/rooms/RoomFeature';
import HeroSection from '@/components/home/HeroSection';

export default function Rooms() {


  return (
    <div>
      {/* Hero Section */}
      <HeroSection
      
        welcomeHeading="ROOMS"
      />

      {/* Rooms Grid */}
      <RoomsGrid />

      {/* Features Section */}
      <RoomFeature />
    </div>
  );
}