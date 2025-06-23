'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Waves, Heart, Users, Sparkles } from 'lucide-react';

const FacilitiesSection = () => {
  const facilities = [
    {
      icon: Heart,
      title: 'Wellness Center',
      description: 'Rejuvenate your mind, body, and soul with our comprehensive wellness programs featuring spa treatments, meditation sessions, and holistic healing therapies.',
      features: ['Full-Service Spa', 'Meditation Gardens', 'Aromatherapy', 'Massage Therapy'],
      href: '/wellness',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Users,
      title: 'Yoga Sanctuary',
      description: 'Find your inner peace in our serene yoga pavilion, offering classes for all levels from sunrise sessions to evening meditation practices.',
      features: ['Daily Classes', 'Private Sessions', 'Outdoor Pavilion', 'Expert Instructors'],
      href: '/yoga',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Waves,
      title: 'Natural Pool',
      description: 'Immerse yourself in our stunning natural pool, designed to blend seamlessly with the surrounding landscape for a truly unique swimming experience.',
      features: ['Infinity Edge', 'Natural Filtration', 'Poolside Service', 'Underwater Lighting'],
      href: '/natural-pool',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Sparkles,
      title: 'Premium Amenities',
      description: 'Enjoy world-class amenities including fitness center, library, game room, and exclusive access to our private trails and gardens.',
      features: ['Fitness Center', 'Library Lounge', 'Game Room', 'Private Trails'],
      href: '/amenities',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black mb-4">
            World-Class <span className="text-royal-gold">Facilities</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our premium amenities designed to enhance your stay and create unforgettable experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full bg-white border-gray-200 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${facility.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <facility.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-playfair font-bold text-black">
                      {facility.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {facility.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-black mb-3">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {facility.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-royal-gold rounded-full"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href={facility.href}>
                    <Button
                      className="w-full bg-royal-gold hover:bg-royal-gold-dark text-black font-semibold group-hover:scale-105 transition-transform duration-300"
                    >
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 bg-black rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-royal-gold mb-2">
                50+
              </div>
              <div className="text-white text-sm md:text-base">
                Premium Amenities
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-royal-gold mb-2">
                24/7
              </div>
              <div className="text-white text-sm md:text-base">
                Concierge Service
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-royal-gold mb-2">
                5★
              </div>
              <div className="text-white text-sm md:text-base">
                Luxury Rating
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-royal-gold mb-2">
                100%
              </div>
              <div className="text-white text-sm md:text-base">
                Guest Satisfaction
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FacilitiesSection;