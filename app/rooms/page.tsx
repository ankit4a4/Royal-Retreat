'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Wifi, Car, Coffee, Tv, Wind, Users } from 'lucide-react';

export default function Rooms() {
  const rooms = [
    {
      title: 'Royal Suite',
      description: 'The pinnacle of luxury with panoramic mountain views, private balcony, and exclusive amenities.',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: '$1,200',
      capacity: '2 Adults',
      amenities: ['Private Balcony', 'King Size Bed', 'Jacuzzi', 'Butler Service', 'Mountain View', 'Mini Bar'],
      features: [Wifi, Car, Coffee, Tv, Wind, Users]
    },
    {
      title: 'Deluxe Villa',
      description: 'Spacious villa with separate living area, perfect for families or extended stays.',
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: '$800',
      capacity: '4 Adults',
      amenities: ['Living Room', 'Kitchen', 'Garden View', 'Private Pool', 'Terrace', 'Dining Area'],
      features: [Wifi, Car, Coffee, Tv, Wind, Users]
    },
    {
      title: 'Garden Room',
      description: 'Elegant room overlooking our beautiful gardens, perfect for a romantic getaway.',
      image: 'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: '$450',
      capacity: '2 Adults',
      amenities: ['Garden View', 'Queen Bed', 'Marble Bathroom', 'Balcony', 'Work Desk', 'Safe'],
      features: [Wifi, Car, Coffee, Tv, Wind, Users]
    },
    {
      title: 'Wellness Suite',
      description: 'Specially designed for wellness enthusiasts with yoga space and spa amenities.',
      image: 'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: '$650',
      capacity: '2 Adults',
      amenities: ['Yoga Mat', 'Meditation Corner', 'Aromatherapy', 'Spa Products', 'Sound System', 'Healthy Minibar'],
      features: [Wifi, Car, Coffee, Tv, Wind, Users]
    },
    {
      title: 'Mountain View Room',
      description: 'Breathtaking mountain views from your private balcony with modern amenities.',
      image: 'https://images.pexels.com/photos/1834395/pexels-photo-1834395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: '$500',
      capacity: '2 Adults',
      amenities: ['Mountain View', 'Balcony', 'King Bed', 'Sitting Area', 'Premium Linens', 'Room Service'],
      features: [Wifi, Car, Coffee, Tv, Wind, Users]
    },
    {
      title: 'Family Suite',
      description: 'Perfect for families with connecting rooms and child-friendly amenities.',
      image: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      price: '$750',
      capacity: '4 Adults + 2 Children',
      amenities: ['Connecting Rooms', 'Play Area', 'Child Safety', 'Family Dining', 'Entertainment', 'Babysitting'],
      features: [Wifi, Car, Coffee, Tv, Wind, Users]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-96 bg-black">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            fill
            alt="Luxury Rooms"
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
              Luxury <span className="text-royal-gold">Accommodations</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Experience unparalleled comfort in our meticulously designed rooms and suites
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
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
                      src={room.image}
                      fill
                      alt={room.title}
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-royal-gold text-black font-semibold">
                        {room.price}/night
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-playfair font-bold text-black mb-2">
                      {room.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {room.description}
                    </p>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <Users className="h-4 w-4 text-royal-gold" />
                      <span className="text-sm text-gray-600">{room.capacity}</span>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-black mb-2">Amenities</h4>
                      <div className="flex flex-wrap gap-1">
                        {room.amenities.slice(0, 4).map((amenity, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {amenity}
                          </Badge>
                        ))}
                        {room.amenities.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{room.amenities.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        {room.features.slice(0, 4).map((Feature, idx) => (
                          <Feature key={idx} className="h-4 w-4 text-royal-gold" />
                        ))}
                      </div>
                      <Button className="bg-royal-gold hover:bg-royal-gold-dark text-black font-semibold">
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black mb-4">
              Room <span className="text-royal-gold">Features</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every room comes with luxury amenities and services designed for your comfort
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '24/7 Concierge',
                description: 'Personal concierge service available around the clock',
                icon: '🏨'
              },
              {
                title: 'Premium Linens',
                description: 'Egyptian cotton sheets and luxury bedding',
                icon: '🛏️'
              },
              {
                title: 'Spa Amenities',
                description: 'Luxury bath products and wellness amenities',
                icon: '🧴'
              },
              {
                title: 'Smart Technology',
                description: 'Integrated smart home controls and entertainment',
                icon: '📱'
              },
              {
                title: 'Private Dining',
                description: 'In-room dining with gourmet menu options',
                icon: '🍽️'
              },
              {
                title: 'Laundry Service',
                description: 'Same-day laundry and dry cleaning service',
                icon: '👔'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-playfair font-bold text-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}