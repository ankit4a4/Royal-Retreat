'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function HomeWellness() {
    const router = useRouter();
    return (
        <section className="md:py-[10vh] py-10 bg-[#A67A35]">
            <div className=" mx-auto px-6 md:px-[8vw]">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-[10vh]"
                >
                    <h2 className="text-[6vw] md:text-[2.8vw] font-playfair font-bold text-[#fff] leading-tight">
                        Discover the <span className="text-white">Healing Power </span>  of Wellness
                    </h2>
                    <p className="text-[2.3vh] md:text-[1.1vw] text-gray-200 mx-auto mt-4">
                        Immerse yourself in an oasis of serenity. Our wellness offerings combine ancient healing techniques with modern comfort to deliver a truly revitalizing experience.
                    </p>
                </motion.div>

                <div className="space-y-[6vh]">
                    {[1, 2, 3].map((row, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: index * 0.1 }}
                            className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center gap-10 bg-white shadow-xl rounded-3xl overflow-hidden p-6 md:p-12`}
                        >
                            <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-md">
                                <Image
                                    src={
                                        index === 0
                                            ? 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                                            : index === 1
                                                ? 'https://images.pexels.com/photos/3985263/pexels-photo-3985263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                                                : 'https://images.pexels.com/photos/3985254/pexels-photo-3985254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                                    }
                                    alt="Wellness Treatment"
                                    width={800}
                                    height={500}
                                    className=" object-cover bg-center bg-[100% 100%] w-full h-[25vh] md:h-[45vh] rounded-xl"
                                />
                            </div>

                            <div className="w-full md:w-1/2">
                                <h3 className="text-[4.8vw] md:text-[2vw] font-playfair font-bold text-[#3c2f23] mb-4">
                                    {index === 0
                                        ? 'Signature Royal Treatments'
                                        : index === 1
                                            ? 'Natural Healing Therapies'
                                            : 'Holistic Body & Soul Revival'}
                                </h3>
                                <p className="text-[2.2vh] md:text-[1.05vw] text-[#5c5344] leading-relaxed mb-4">
                                    {index === 0
                                        ? 'Indulge in our exclusive full-body therapies that blend essential oils, ancient massage techniques, and personalized attention to awaken your senses and restore inner peace.'
                                        : index === 1
                                            ? 'Let go of tension with heated stone rituals and herbal detoxifying wraps. Each treatment is a gateway to tranquility and rejuvenation inspired by nature.'
                                            : 'Our sanctuary offers immersive experiences for body and soul — from meditation in serene gardens to revitalizing salt room therapies, all designed to help you reconnect and recharge.'}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-center mt-[8vh]"
                >
                    <Button
                        onClick={() => router.push("/wellness")}
                        className="bg-[#3c2f23] hover:bg-[#2c241b] text-white text-[2.1vh] md:text-[1.2vw] font-medium px-8 py-3 md:px-[3vw] md:py-[1.2vw] rounded-full transition duration-200">
                        Explore Wellness
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}