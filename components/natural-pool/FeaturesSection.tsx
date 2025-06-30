import { motion } from 'framer-motion';
import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Waves, Droplets, Sun, Moon, Leaf, Star } from 'lucide-react';

const FeaturesSection = () => {

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
        </>
    )
}

export default FeaturesSection
