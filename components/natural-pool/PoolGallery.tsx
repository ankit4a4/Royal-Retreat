import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
const PoolGallery = () => {
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
        </>
    )
}

export default PoolGallery
