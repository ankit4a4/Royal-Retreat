'use client';

import Image from 'next/image';
import poolImage from "@/public/Images/AllPhotos/pool.webp";
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function HomeNaturalPool() {
  const router = useRouter();

  return (
    <section className="py-12 md:py-20 bg-[#FBF7F0]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-gray-900 mb-6">
            Refresh by the <span className="text-royal-gold">Pool</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Dive into our serene poolside experience — a perfect spot to unwind, soak up the sun, or simply enjoy peaceful moments surrounded by nature. Whether you're relaxing alone or sharing time with loved ones, the pool at Palm Bliss is a space to feel refreshed and recharged.
          </p>
          <Button
            onClick={() => router.push('/natural-pool')}
            className="bg-royal-gold text-white hover:bg-yellow-600 px-6 py-3 text-base md:text-lg"
          >
            Book Now
          </Button>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[300px] md:h-[450px] rounded-xl overflow-hidden shadow-lg">
          <Image
            src={poolImage}
            alt="Palm Bliss Pool"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}
