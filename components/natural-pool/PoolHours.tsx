import React from 'react';
import { motion } from 'framer-motion';

const PoolHours = () => {
    return (
        <section className="py-20 bg-black text-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-playfair font-bold mb-6">
                            Pool Hours & <span className="text-royal-gold">Information</span>
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-gray-900 p-6 rounded-lg">
                                <h3 className="text-xl font-playfair font-bold text-royal-gold mb-4">
                                    Operating Hours
                                </h3>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span>Daily Swimming</span>
                                        <span>6:00 AM - 10:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Aqua Fitness Classes</span>
                                        <span>8:00 AM & 5:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Private Pool Sessions</span>
                                        <span>By Appointment</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-900 p-6 rounded-lg">
                                <h3 className="text-xl font-playfair font-bold text-royal-gold mb-4">
                                    Pool Services
                                </h3>
                                <ul className="space-y-2">
                                    {[
                                        "Complimentary towel service",
                                        "Poolside food and beverage service",
                                        "Cabana reservations available",
                                        "Swimming equipment rental",
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-royal-gold rounded-full"></div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <div className="bg-gray-900 p-8 rounded-2xl">
                            <h3 className="text-2xl font-playfair font-bold text-royal-gold mb-4">
                                Reserve Your Pool Experience
                            </h3>
                            <p className="text-gray-300">
                                Book a private cabana or schedule aqua fitness classes for the ultimate pool experience.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PoolHours;
