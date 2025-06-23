'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Utensils, Star, Clock } from 'lucide-react';

const CuisineSection = () => {
  const cuisines = [
    {
      title: 'Authentic Indian Cuisine',
      description: 'Savor the rich flavors and aromatic spices of traditional Indian cuisine, prepared by our master chefs using time-honored recipes and the finest ingredients.',
      image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      specialties: ['Tandoori Specialties', 'Regional Curries', 'Fresh Naan & Breads', 'Vegetarian Delights'],
      rating: '4.9',
      servingTime: '6:00 PM - 11:00 PM'
    },
    {
      title: 'Continental Cuisine',
      description: 'Experience sophisticated European flavors and international dishes crafted with modern techniques and premium ingredients from around the world.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      specialties: ['Grilled Steaks', 'Fresh Seafood', 'Artisan Pasta', 'Gourmet Desserts'],
      rating: '4.8',
      servingTime: '7:00 AM - 10:00 PM'
    }
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            Culinary <span className="text-royal-gold">Excellence</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Embark on a gastronomic journey with our world-class dining experiences, 
            featuring both traditional and contemporary cuisines
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {cuisines.map((cuisine, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="bg-gray-900 border-gray-800 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-64">
                  <Image
                    src={cuisine.image}
                    fill
                    alt={cuisine.title}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Badge className="bg-royal-gold text-black">
                      <Star className="h-3 w-3 mr-1" />
                      {cuisine.rating}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Utensils className="h-5 w-5 text-royal-gold" />
                    <h3 className="text-2xl font-playfair font-bold text-white">
                      {cuisine.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {cuisine.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-royal-gold mb-2">
                      Signature Specialties
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cuisine.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="outline" className="border-royal-gold text-royal-gold">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span>{cuisine.servingTime}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-900 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-playfair font-bold text-royal-gold mb-4">
              Private Dining & Special Events
            </h3>
            <p className="text-gray-300 mb-6">
              Celebrate special occasions with our exclusive private dining experiences. 
              Our culinary team can create custom menus for intimate gatherings, 
              romantic dinners, or special celebrations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-royal-gold mb-2">24/7</div>
                <div className="text-sm text-gray-400">Room Service</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-royal-gold mb-2">5★</div>
                <div className="text-sm text-gray-400">Michelin Rated</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-royal-gold mb-2">50+</div>
                <div className="text-sm text-gray-400">Signature Dishes</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CuisineSection;