'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Flower, HeartPulse, Smile, Leaf } from 'lucide-react';

const values = [
  {
    icon: Flower,
    title: 'Holistic Wellness',
    description:
      'We embrace a mind-body-spirit approach, offering therapies and practices that restore balance and harmony.',
  },
  {
    icon: HeartPulse,
    title: 'Stress-Free Living',
    description:
      'Palm Bliss is a sanctuary designed to release tension, reduce anxiety, and promote inner peace through nature and Ayurvedic care.',
  },
  {
    icon: Smile,
    title: 'Calm & Comfort',
    description:
      'Every experience is crafted to make you feel cared for, calm, and completely at ease — your well-being is our priority.',
  },
  {
    icon: Leaf,
    title: 'Nature-Aligned Healing',
    description:
      'We practice sustainability and healing through natural remedies, eco-living, and earth-conscious choices.',
  },
];

const ValuesSection = () => (
  <section className="relative py-24 bg-royal-gold">
    <div className="container mx-auto px-4 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
          Our <span className="text-white/80 drop-shadow-md">Core Values</span>
        </h2>
        <p className="text-lg text-white/90 max-w-2xl mx-auto">
          Rooted in wellness, nature, and inner balance — the essence of Palm Bliss.
        </p>
      </motion.div>

      <div className="space-y-16 relative">
        {values.map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            className={`relative z-10 ${index % 2 === 0 ? 'md:pl-32 md:pr-4' : 'md:pr-32 md:pl-4'}`}
          >
            <Card className="bg-white/80 backdrop-blur-md border-none shadow-xl hover:shadow-2xl transition duration-300 rounded-2xl">
              <CardContent className="p-8 relative">
                <div className="absolute -left-6 top-6 w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center ring-4 ring-white z-20">
                  <value.icon className="h-7 w-7 text-royal-gold" />
                </div>
                <div className="pl-12">
                  <h3 className="text-2xl font-semibold font-playfair text-gray-800 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}

        {/* Vertical Line for Timeline Effect */}
        <div className="absolute top-0 left-8 w-1 h-full bg-white/60 hidden md:block" />
      </div>
    </div>
  </section>
);

export default ValuesSection;
