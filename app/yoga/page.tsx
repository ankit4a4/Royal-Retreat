'use client';
import ClassesSchedule from '@/components/yoga/ClassesSchedule';
import HeroSection from '@/components/home/HeroSection';
import Instructors from '@/components/yoga/Instructors';
import PrivateSessions from '@/components/yoga/PrivateSessions';

export default function Yoga() {


  return (

    <>
      <HeroSection
       
        welcomeHeading="YOGA"
      />
      <div className="min-h-screen pt-20">

        <ClassesSchedule />

        <Instructors />

        <PrivateSessions />

      </div>

    </>
  );
}