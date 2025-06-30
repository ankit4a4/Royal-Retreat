import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Car, Plane } from 'lucide-react';
const Directions = () => {
    const directions = [
        {
            icon: Plane,
            title: 'From Airport',
            description: 'Paradise International Airport is 25km away. Take Highway 101 North for 20km, then exit at Palm bliss Road. Follow signs for 5km to reach the resort.',
            duration: '30 minutes'
        },
        {
            icon: Car,
            title: 'By Car',
            description: 'From the city center, take Mountain Highway for 35km. Turn right at Paradise Valley Junction and continue for 8km. The resort entrance will be on your left.',
            duration: '45 minutes'
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
                            Directions to <span className="text-royal-gold">Paradise</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Find your way to Palm Bliss Resort with our detailed directions
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {directions.map((direction, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                            >
                                <Card className="h-full bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300">
                                    <CardContent className="p-8">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="w-12 h-12 bg-royal-gold rounded-full flex items-center justify-center">
                                                <direction.icon className="h-6 w-6 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-playfair font-bold text-black">
                                                    {direction.title}
                                                </h3>
                                                <p className="text-royal-gold font-semibold">
                                                    {direction.duration}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed">
                                            {direction.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="h-96 rounded-2xl overflow-hidden shadow-lg"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459418!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1635959471659!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Palm Bliss Resort Location"
                        ></iframe>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default Directions
