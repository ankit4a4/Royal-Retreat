'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ConciergeBell,
  Bath,
  Utensils,
  Shirt,
  Leaf,
  BedDouble,
} from 'lucide-react';

const features = [
  {
    title: '24/7 Concierge',
    description: 'Personal concierge service available around the clock.',
    icon: ConciergeBell,
  },
  {
    title: 'Luxury Bedding',
    description: 'Comfortable double beds with premium comfort.',
    icon: BedDouble,
  },
  {
    title: 'Wellness Essentials',
    description: 'Soothing bath products and Ayurvedic amenities.',
    icon: Leaf,
  },
  {
    title: 'Private Dining',
    description: 'In-room gourmet meals, served fresh on request.',
    icon: Utensils,
  },
  {
    title: 'Bath Comforts',
    description: 'Modern bath spaces with all essentials provided.',
    icon: Bath,
  },
  {
    title: 'Laundry Service',
    description: 'Same-day laundry and dry-cleaning facilities.',
    icon: Shirt,
  },
];

const RoomFeature = () => {
  return (
    <section className="py-12 md:py-20 bg-royal-gold">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
            Room <span className="text-black">Features</span>
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Thoughtfully curated amenities designed to enhance your stay at Palm Bliss.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl hover:scale-[1.03] transition duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 mx-auto mb-4 bg-royal-gold/10 rounded-full">
                <feature.icon className="h-6 w-6 text-royal-gold" />
              </div>
              <h3 className="text-xl font-playfair font-bold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomFeature;
