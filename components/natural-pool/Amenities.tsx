import React from 'react'
import { Card, CardContent } from '../ui/card'
import { motion } from 'framer-motion';
import Image from 'next/image';
const Amenities = () => {

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
        <>
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
        </>
    )
}

export default Amenities
