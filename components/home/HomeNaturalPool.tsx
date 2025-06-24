'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Droplets, Leaf, Moon, Waves } from 'lucide-react';

export default function HomeNaturalPool() {
  const sections = [
    {
      title: 'Infinity Edge Design',
      desc: 'Our pool seamlessly blends with the horizon, creating a breathtaking visual experience that brings tranquility and luxury together.',
      img: 'https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      icon: Waves,
    },
    {
      title: 'Natural Filtration & Eco-Friendly System',
      desc: 'State-of-the-art natural filtration system using aquatic plants and minerals. Our eco-conscious pool design respects and blends into nature, avoiding harsh chemicals.',
      img: 'https://images.pexels.com/photos/1309766/pexels-photo-1309766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      icon: Droplets,
    },
    {
      title: 'Solar Heated & Night Ready',
      desc: 'Our solar-powered heating ensures the perfect water temperature any time of day, while romantic underwater lights and a stargazing platform complete the evening vibe.',
      img: 'https://images.pexels.com/photos/3768999/pexels-photo-3768999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      icon: Moon,
    },
  ];

  return (
    <section className="py-10 md:py-[10vh] bg-[#FBF7F0]">
      <div className="mx-auto px-[4vw]">
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-[5vh]"
        >
          <h2 className="text-[6vw] md:text-[3vw] font-playfair font-bold text-black mb-[1.5vh]">
            Natural <span className="text-royal-gold">Pool</span>
          </h2>
          <p className="text-[3.5vw] md:text-[1.3vw] text-gray-700 max-w-[90vw] md:max-w-[60vw] mx-auto">
            A calming experience where water meets design in perfect harmony.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[4vw]">
          {sections.map((sec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
