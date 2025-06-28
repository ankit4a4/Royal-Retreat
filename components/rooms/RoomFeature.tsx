'use client';
import React from 'react';
import { motion } from 'framer-motion';

const RoomFeature = () => {
    const features = [
        {
            title: '24/7 Concierge',
            description: 'Personal concierge service available around the clock',
            icon: '🏨',
        },
        {
            title: 'Premium Linens',
            description: 'Egyptian cotton sheets and luxury bedding',
            icon: '🛏️',
        },
        {
            title: 'Spa Amenities',
            description: 'Luxury bath products and wellness amenities',
            icon: '🧴',
        },
        {
            title: 'Smart Technology',
            description: 'Integrated smart home controls and entertainment',
            icon: '📱',
        },
        {
            title: 'Private Dining',
            description: 'In-room dining with gourmet menu options',
            icon: '🍽️',
        },
        {
            title: 'Laundry Service',
            description: 'Same-day laundry and dry cleaning service',
            icon: '👔',
        },
    ];

    return (
        <section className=" py-8 md:py-20 bg-royal-gold ">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
                        Room <span className="text-black">Features</span>
                    </h2>
                    <p className="text-lg text-white/90 max-w-2xl mx-auto">
                        Every room comes with luxury amenities and services designed for your comfort
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="bg-white rounded-2xl shadow-lg p-8 text-center hover:scale-105 transition-transform duration-300"
                        >
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-playfair font-bold text-black mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RoomFeature;
