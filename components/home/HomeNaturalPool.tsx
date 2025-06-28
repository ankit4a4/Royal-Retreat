'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Droplets, Moon, Waves } from 'lucide-react';
import image from "@/public/Images/AllPhotos/DSC06389.webp";
import image2 from "@/public/Images/AllPhotos/DSC06396.webp";
import image3 from "@/public/Images/AllPhotos/DSC06434.webp";

export default function HomeNaturalPool() {
  const sections = [
    {
      title: 'Infinity Edge Design',
      desc: 'Our pool seamlessly blends with the horizon, creating a breathtaking visual experience that brings tranquility and luxury together.',
      img: image.src,
      icon: Waves,
    },
    {
      title: 'Natural Filtration & Eco-Friendly System',
      desc: 'State-of-the-art natural filtration system using aquatic plants and minerals. Our eco-conscious pool design respects and blends into nature, avoiding harsh chemicals.',
      img: image2.src,
      icon: Droplets,
    },
    {
      title: 'Solar Heated & Night Ready',
      desc: 'Our solar-powered heating ensures the perfect water temperature any time of day, while romantic underwater lights and a stargazing platform complete the evening vibe.',
      img: image3.src,
      icon: Moon,
    },
  ];

  return (
    <section className="py-10 md:py-[10vh] bg-[#FBF7F0]">
      <div className="mx-auto px-[4vw]">
        <div className="text-center mb-[5vh]">
          <h2 className="text-[6vw] md:text-[3vw] font-playfair font-bold text-black mb-[1.5vh]">
            Natural <span className="text-royal-gold">Pool</span>
          </h2>
          <p className="text-[3.5vw] md:text-[1.3vw] text-gray-700 max-w-[90vw] md:max-w-[60vw] mx-auto">
            A calming experience where water meets design in perfect harmony.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[4vw]">
          {sections.map((sec, i) => (
            <div
              key={i}
              className="bg-white rounded-[2vw] shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-[35vh] w-full">
                <Image
                  src={sec.img}
                  alt={sec.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-[3vw] flex-1 flex flex-col justify-between">
                <div>
                  <div className="mb-[2vh] flex items-center gap-[2vw]">
                    <div className="w-[8vw] h-[8vw] md:w-[3vw] md:h-[3vw] bg-royal-gold/20 rounded-full flex items-center justify-center">
                      <sec.icon className="w-[5vw] h-[5vw] md:w-[1.5vw] md:h-[1.5vw] text-royal-gold" />
                    </div>
                    <h3 className="text-[5vw] md:text-[1.7vw] font-playfair font-bold text-black">
                      {sec.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-[3.5vw] md:text-[1.1vw] leading-relaxed">
                    {sec.desc}
                  </p>
                </div>
                <div className="mt-[3vh]">
                  <Button
                    variant="ghost"
                    className="text-royal-gold hover:text-white hover:bg-royal-gold border border-royal-gold w-full text-[4vw] md:text-[1vw] py-[1vw] px-[2vw]"
                  >
                    Discover More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
