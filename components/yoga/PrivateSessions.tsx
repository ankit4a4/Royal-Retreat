import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const PrivateSessions = () => {
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
                        Private <span className="text-royal-gold">Sessions</span>
                    </h2>
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                        Personalized yoga instruction tailored to your individual needs and goals
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-3xl font-playfair font-bold mb-6">
                            Personalized Yoga Experience
                        </h3>
                        <div className="space-y-4 mb-8">
                            {[
                                "One-on-one instruction with certified masters",
                                "Customized practice based on your goals",
                                "Flexible scheduling to fit your stay",
                                "Choice of indoor pavilion or outdoor garden"
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-royal-gold rounded-full mt-2"></div>
                                    <p className="text-gray-300">{item}</p>
                                </div>
                            ))}
                        </div>
                        <div className="bg-gray-900 p-6 rounded-lg">
                            <h4 className="text-xl font-playfair font-bold text-royal-gold mb-2">
                                Session Pricing
                            </h4>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span>60 minutes</span>
                                    <span className="text-royal-gold">₹12,000</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>90 minutes</span>
                                    <span className="text-royal-gold">₹16,000</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Package of 5 sessions</span>
                                    <span className="text-royal-gold">₹53,000</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative h-96 rounded-2xl overflow-hidden"
                    >
                        <Image
                            src="https://images.pexels.com/photos/3822695/pexels-photo-3822695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            fill
                            alt="Private Yoga Session"
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PrivateSessions;
