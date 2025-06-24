'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const awards = [
  {
    year: '2024',
    award: 'World Luxury Hotel Awards',
    category: 'Best Luxury Resort'
  },
  {
    year: '2023',
    award: 'Travel + Leisure Awards',
    category: 'Top 10 Wellness Resorts'
  },
  {
    year: '2022',
    award: 'Conde Nast Traveler',
    category: 'Gold List Resort'
  }
];

const AwardsSection = () => (
  <section className="py-24 bg-[#F8F3E7] text-gray-800">
    <div className="container mx-auto px-4 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
          Awards & <span className="text-royal-gold">Recognition</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our commitment to excellence has been recognized by industry leaders worldwide
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {awards.map((award, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="text-center bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
          >
            <div className="bg-royal-gold w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-7 w-7 text-white" />
            </div>
            <div className="text-xl font-bold text-royal-gold mb-1">
              {award.year}
            </div>
            <div className="text-lg font-playfair font-semibold mb-1">
              {award.award}
            </div>
            <div className="text-sm text-gray-500">
              {award.category}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AwardsSection;
