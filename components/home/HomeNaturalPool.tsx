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
      icon: Waves
    },
    {
      title: 'Natural Filtration & Eco-Friendly System',
      desc: 'State-of-the-art natural filtration system using aquatic plants and minerals. Our eco-conscious pool design respects and blends into nature, avoiding harsh chemicals.',
      img: 'https://images.pexels.com/photos/1309766/pexels-photo-1309766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      icon: Droplets
    },
    {
      title: 'Solar Heated & Night Ready',
      desc: 'Our solar-powered heating ensures the perfect water temperature any time of day, while romantic underwater lights and a stargazing platform complete the evening vibe.',
      img: 'https://images.pexels.com/photos/3768999/pexels-photo-3768999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      icon: Moon
    }
  ];

  return (
    <section className="py-24 bg-[#FBF7F0]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black mb-4">
            Natural <span className="text-royal-gold">Pool</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            A calming experience where water meets design in perfect harmony.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {sections.map((sec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-60 w-full">
                <Image
                  src={sec.img}
                  alt={sec.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="mb-4 flex items-center gap-4">
                    <div className="w-12 h-12 bg-royal-gold/20 rounded-full flex items-center justify-center">
                      <sec.icon className="w-6 h-6 text-royal-gold" />
                    </div>
                    <h3 className="text-2xl font-playfair font-bold text-black">
                      {sec.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {sec.desc}
                  </p>
                </div>
                <div className="mt-6">
                  <Button variant="ghost" className="text-royal-gold hover:text-white hover:bg-royal-gold border border-royal-gold w-full">
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
