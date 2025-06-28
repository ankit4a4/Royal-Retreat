import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'
import { Heart, Sparkles, Flower, Leaf } from 'lucide-react';


const Treatments = () => {
    const treatments = [
        {
            title: 'Royal Signature Massage',
            description: 'Our signature full-body massage using premium oils and ancient techniques to restore balance and harmony.',
            duration: '90 minutes',
            price: '₹23,240',
            image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            icon: Heart
        },
        {
            title: 'Aromatherapy Bliss',
            description: 'Indulge in the healing power of essential oils with our customized aromatherapy treatment.',
            duration: '75 minutes',
            price: '₹18,260',
            image: 'https://images.pexels.com/photos/3985263/pexels-photo-3985263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            icon: Flower
        },
        {
            title: 'Hot Stone Therapy',
            description: 'Relax with heated volcanic stones that melt away tension and promote deep relaxation.',
            duration: '80 minutes',
            price: '₹20,750',
            image: 'https://images.pexels.com/photos/3188637/pexels-photo-3188637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            icon: Sparkles
        },
        {
            title: 'Herbal Detox Wrap',
            description: 'Purify your body with our organic herbal wrap treatment that detoxifies and rejuvenates.',
            duration: '60 minutes',
            price: '₹14,940',
            image: 'https://images.pexels.com/photos/3985254/pexels-photo-3985254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            icon: Leaf
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
        </>
    )
}

export default Treatments
