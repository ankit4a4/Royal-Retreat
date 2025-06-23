'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Waves, Droplets, Sun, Moon, Leaf, Star } from 'lucide-react';

export default function NaturalPool() {
  const features = [
    {
      icon: Waves,
      title: 'Infinity Edge Design',
      description: 'Our pool seamlessly blends with the horizon, creating a breathtaking visual experience.'
    },
    {
      icon: Droplets,
      title: 'Natural Filtration',
      description: 'State-of-the-art natural filtration system using aquatic plants and minerals.'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Environmentally conscious design that harmonizes with the natural landscape.'
    },
    {
      icon: Sun,
      title: 'Solar Heating',
      description: 'Sustainably heated using solar energy to maintain perfect temperature year-round.'
    },
    {
      icon: Moon,
      title: 'Underwater Lighting',
      description: 'Romantic underwater LED lighting for enchanting evening swims.'
    },
    {
      icon: Star,
      title: 'Stargazing Platform',
      description: 'Dedicated floating platform for stargazing while relaxing in the water.'
    }
  ];

  const amenities = [
    {
      title: 'Poolside Cabanas',
      description: 'Private cabanas with luxury furnishings and personalized service.',
      image: 'https://images.pexels.com/photos/3768997/pexels-photo-3768997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'Swim-Up Bar',
      description: 'Enjoy refreshing drinks and light snacks without leaving the water.',
      image: 'https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'Aqua Fitness Classes',
      description: 'Low-impact water aerobics and aqua yoga sessions.',
      image: 'https://images.pexels.com/photos/3768999/pexels-photo-3768999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-screen bg-black">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            fill
            alt="Natural Pool"
            className="object-cover opacity-70"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6">
              Natural <span className="text-royal-gold">Pool Paradise</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Immerse yourself in our stunning infinity pool that merges seamlessly with nature's beauty
            </p>
            <Button
              size="lg"
              className="bg-royal-gold hover:bg-royal-gold-dark text-black font-semibold px-8 py-3 text-lg"
            >
              Reserve Pool Time
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration:  0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black mb-4">
              Pool <span className="text-royal-gold">Features</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the innovative features that make our natural pool a unique aquatic experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full bg-white border-gray-200 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-royal-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-8 w-8 text-royal-gold" />
                    </div>
                    <h3 className="text-xl font-playfair font-bold text-black mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pool Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black mb-4">
              Pool <span className="text-royal-gold">Gallery</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the beauty of our natural pool through different times of day
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                src: 'https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                title: 'Sunrise Serenity'
              },
              {
                src: 'https://images.pexels.com/photos/3768997/pexels-photo-3768997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                title: 'Midday Bliss'
              },
              {
                src: 'https://images.pexels.com/photos/1309766/pexels-photo-1309766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                title: 'Golden Hour'
              },
              {
                src: 'https://images.pexels.com/photos/3768999/pexels-photo-3768999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                title: 'Evening Glow'
              },
              {
                src: 'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                title: 'Starlit Waters'
              },
              {
                src: 'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                title: 'Mountain Reflection'
              }
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative h-64 rounded-2xl overflow-hidden cursor-pointer group"
              >
                <Image
                  src={image.src}
                  fill
                  alt={image.title}
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-playfair font-semibold">
                    {image.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black mb-4">
              Poolside <span className="text-royal-gold">Amenities</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Enhance your pool experience with our luxury amenities and services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <Card className="h-full bg-white border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={amenity.image}
                      fill
                      alt={amenity.title}
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-playfair font-bold text-black mb-3">
                      {amenity.title}
                    </h3>
                    <p className="text-gray-600">
                      {amenity.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pool Hours & Booking */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-playfair font-bold mb-6">
                Pool Hours & <span className="text-royal-gold">Information</span>
              </h2>
              
              <div className="space-y-6">
                <div className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-xl font-playfair font-bold text-royal-gold mb-4">
                    Operating Hours
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Daily Swimming</span>
                      <span>6:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Aqua Fitness Classes</span>
                      <span>8:00 AM & 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Private Pool Sessions</span>
                      <span>By Appointment</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-xl font-playfair font-bold text-royal-gold mb-4">
                    Pool Services
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-royal-gold rounded-full"></div>
                      <span>Complimentary towel service</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-royal-gold rounded-full"></div>
                      <span>Poolside food and beverage service</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-royal-gold rounded-full"></div>
                      <span>Cabana reservations available</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-royal-gold rounded-full"></div>
                      <span>Swimming equipment rental</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="bg-gray-900 p-8 rounded-2xl">
                <h3 className="text-2xl font-playfair font-bold text-royal-gold mb-6">
                  Reserve Your Pool Experience
                </h3>
                <p className="text-gray-300 mb-8">
                  Book a private cabana or schedule aqua fitness classes for the ultimate pool experience.
                </p>
                <div className="space-y-4">
                  <Button
                    size="lg"
                    className="w-full bg-royal-gold hover:bg-royal-gold-dark text-black font-semibold"
                  >
                    Reserve Cabana
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-royal-gold text-royal-gold hover:bg-royal-gold hover:text-black"
                  >
                    Book Aqua Classes
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}