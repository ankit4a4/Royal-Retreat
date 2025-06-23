'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Crown, Award, Users, Sparkles } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Crown,
      title: 'Luxury Redefined',
      description: 'We believe luxury is not just about opulence, but about creating meaningful experiences that touch the soul.'
    },
    {
      icon: Award,
      title: 'Excellence in Service',
      description: 'Our commitment to exceptional service ensures every guest feels like royalty from arrival to departure.'
    },
    {
      icon: Users,
      title: 'Personalized Experience',
      description: 'Every stay is tailored to your preferences, creating memories that last a lifetime.'
    },
    {
      icon: Sparkles,
      title: 'Sustainable Luxury',
      description: 'We harmonize luxury with environmental responsibility, preserving nature for future generations.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-96 bg-black">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            fill
            alt="About Royal Retreat"
            className="object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-4">
              About <span className="text-royal-gold">Royal Retreat</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              A legacy of luxury, wellness, and exceptional hospitality
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-playfair font-bold text-black mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded with a vision to create an oasis of tranquility and luxury, Royal Retreat Resort 
                has been welcoming discerning guests for over two decades. Nestled in the heart of Paradise Valley, 
                our resort combines timeless elegance with modern sophistication.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What began as a dream to create the perfect escape has evolved into a world-renowned destination 
                that seamlessly blends luxury accommodation with wellness, natural beauty, and exceptional service. 
                Every detail has been carefully crafted to ensure your stay is nothing short of extraordinary.
              </p>
              <p className="text-lg text-gray-600">
                Our commitment to excellence has earned us recognition from leading travel publications and 
                the unwavering loyalty of guests who return year after year to experience the magic of Royal Retreat.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-96 rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                fill
                alt="Resort History"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black mb-4">
              Our <span className="text-royal-gold">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Royal Retreat Resort
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-royal-gold rounded-full flex items-center justify-center">
                        <value.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-playfair font-bold text-black">
                        {value.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              Awards & <span className="text-royal-gold">Recognition</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
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
            ].map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="bg-royal-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-black" />
                </div>
                <div className="text-2xl font-bold text-royal-gold mb-2">
                  {award.year}
                </div>
                <div className="text-xl font-playfair font-semibold mb-2">
                  {award.award}
                </div>
                <div className="text-gray-400">
                  {award.category}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}