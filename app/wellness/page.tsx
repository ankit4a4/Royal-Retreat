'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Sparkles, Flower, Leaf } from 'lucide-react';

export default function Wellness() {
  const treatments = [
    {
      title: 'Royal Signature Massage',
      description: 'Our signature full-body massage using premium oils and ancient techniques to restore balance and harmony.',
      duration: '90 minutes',
      price: '$280',
      image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      icon: Heart
    },
    {
      title: 'Aromatherapy Bliss',
      description: 'Indulge in the healing power of essential oils with our customized aromatherapy treatment.',
      duration: '75 minutes',
      price: '$220',
      image: 'https://images.pexels.com/photos/3985263/pexels-photo-3985263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      icon: Flower
    },
    {
      title: 'Hot Stone Therapy',
      description: 'Relax with heated volcanic stones that melt away tension and promote deep relaxation.',
      duration: '80 minutes',
      price: '$250',
      image: 'https://images.pexels.com/photos/3188637/pexels-photo-3188637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      icon: Sparkles
    },
    {
      title: 'Herbal Detox Wrap',
      description: 'Purify your body with our organic herbal wrap treatment that detoxifies and rejuvenates.',
      duration: '60 minutes',
      price: '$180',
      image: 'https://images.pexels.com/photos/3985254/pexels-photo-3985254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      icon: Leaf
    }
  ];

  const facilities = [
    {
      title: 'Meditation Garden',
      description: 'Find inner peace in our serene meditation garden surrounded by nature.',
      image: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'Thermal Pools',
      description: 'Soak in our natural thermal pools with mineral-rich waters.',
      image: 'https://images.pexels.com/photos/1309766/pexels-photo-1309766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'Himalayan Salt Room',
      description: 'Experience the therapeutic benefits of our Himalayan salt therapy room.',
      image: 'https://images.pexels.com/photos/6941000/pexels-photo-6941000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-96 bg-black">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            fill
            alt="Wellness Center"
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
              Wellness <span className="text-royal-gold">Sanctuary</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Rejuvenate your mind, body, and soul in our world-class wellness center
            </p>
          </motion.div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black mb-4">
              Signature <span className="text-royal-gold">Treatments</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience our curated selection of luxury spa treatments designed to heal and restore
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {treatments.map((treatment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full bg-white border-gray-200 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src={treatment.image}
                      fill
                      alt={treatment.title}
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-royal-gold text-black px-3 py-1 rounded-full font-semibold">
                      {treatment.price}
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-royal-gold/20 rounded-full flex items-center justify-center">
                        <treatment.icon className="h-5 w-5 text-royal-gold" />
                      </div>
                      <h3 className="text-2xl font-playfair font-bold text-black">
                        {treatment.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                      {treatment.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-500">Duration: {treatment.duration}</span>
                    </div>

                    <Button className="w-full bg-royal-gold hover:bg-royal-gold-dark text-black font-semibold">
                      Book Treatment
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black mb-4">
              Wellness <span className="text-royal-gold">Facilities</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our state-of-the-art wellness facilities designed for ultimate relaxation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
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
                      src={facility.image}
                      fill
                      alt={facility.title}
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-playfair font-bold text-black mb-3">
                      {facility.title}
                    </h3>
                    <p className="text-gray-600">
                      {facility.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness Packages */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              Wellness <span className="text-royal-gold">Packages</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Comprehensive wellness packages for the ultimate rejuvenation experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Half Day Retreat',
                duration: '4 hours',
                price: '$450',
                includes: ['60-min massage', 'Facial treatment', 'Thermal pool access', 'Healthy lunch']
              },
              {
                title: 'Full Day Wellness',
                duration: '8 hours',
                price: '$750',
                includes: ['90-min signature massage', 'Body wrap', 'Facial', 'Meditation session', 'Spa lunch', 'All facilities']
              },
              {
                title: 'Weekend Escape',
                duration: '2 days',
                price: '$1,200',
                includes: ['Multiple treatments', 'Yoga classes', 'Meditation', 'Healthy meals', 'Accommodation upgrade']
              }
            ].map((package_item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <Card className="h-full bg-gray-900 border-gray-800 hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <h3 className="text-2xl font-playfair font-bold text-white mb-2">
                      {package_item.title}
                    </h3>
                    <div className="text-3xl font-bold text-royal-gold mb-2">
                      {package_item.price}
                    </div>
                    <div className="text-gray-400 mb-6">
                      {package_item.duration}
                    </div>
                    <ul className="text-left space-y-2 mb-8">
                      {package_item.includes.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-royal-gold rounded-full"></div>
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-royal-gold hover:bg-royal-gold-dark text-black font-semibold">
                      Book Package
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}