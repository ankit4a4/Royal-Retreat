import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '../ui/card';

const Facilities = () => {
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
    <>
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
    </>
  )
}

export default Facilities
