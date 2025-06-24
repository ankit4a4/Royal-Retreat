'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import bgImage from "../../public/bgImage.jpg"

const yogaData = [
    {
        title: 'Sunrise Vinyasa Flow',
        description: `Begin your day with mindful movement and breath. Our Sunrise Vinyasa session is designed to awaken your body and mind in harmony with nature. As the first light hits the Himalayan peaks, move through energizing sequences that promote flexibility, focus, and inner calm.`,
        img: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
        title: 'Meditation & Mindfulness',
        description: `Discover serenity through guided meditation and focused mindfulness. Ideal for beginners and seasoned practitioners alike, this session offers tools to reduce stress, increase awareness, and develop a deeper connection to the self. Conducted in tranquil surroundings with calming Himalayan energies.`,
        img: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg',
    },
    {
        title: 'Private Yoga Sessions',
        description: `Tailored to your individual needs, our private yoga sessions offer focused attention, alignment guidance, and healing techniques. Perfect for those looking to deepen their practice, manage injuries, or explore therapeutic aspects of yoga. Conducted by certified experts in both indoor and open-air spaces.`,
        img: 'https://images.pexels.com/photos/3822695/pexels-photo-3822695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
];

const YogaHomeSection = () => {
    return (
        <section
            className="bg-[#A67A35] py-10 md:py-[12vh] px-6 md:px-[8vw]">
            {/* Heading */}
            <div className="text-center space-y-6 mb-[10vh]">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-[6vw] md:text-[2.8vw] font-playfair font-bold text-[#fff]"
                >
                    Discover <span className="text-[#fff]">Our Yoga Offerings</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-[2.4vh] md:text-[1.15vw] text-[#fff] mx-auto leading-relaxed"
                >
                    Explore our carefully curated yoga experiences crafted for healing, energy, and inner transformation.
                </motion.p>
            </div>

            {/* Rows */}
            <div

                className="md:space-y-[10vh] space-y-10 ">
                {yogaData.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
                            } bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.1)] transition duration-300 overflow-hidden p-5`}
                    >
                        <div className="relative md:w-1/2 h-[30vh] md:h-[50vh]">
                            <Image
                                src={item.img}
                                alt={item.title}
                                fill
                                className="object-cover w-full h-full rounded-lg"
                            />
                        </div>
                        <div className="md:w-1/2 p-6 md:p-10 flex items-center">
                            <div className="space-y-4">
                                <h3 className="text-[2.5vh] md:text-[1.4vw] font-playfair font-bold text-[#3c2f23]">
                                    {item.title}
                                </h3>
                                <p className="text-[2.2vh] md:text-[1.1vw] text-[#5c5344] leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* CTA Button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center md:mt-[10vh] mt-10"
            >
                <Button className="bg-[#C9A062] hover:bg-[#b88d4f] text-white text-[2vh] md:text-[1.2vw] font-medium px-8 py-3 md:px-[3vw] md:py-[1vw] rounded-full transition duration-200">
                    Explore All Yoga Offerings
                </Button>
            </motion.div>
        </section>
    );
};

export default YogaHomeSection;
