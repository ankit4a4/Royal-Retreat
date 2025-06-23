'use client';

import Slider from 'react-slick';
import { motion } from 'framer-motion';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
    {
        name: 'Aarav Mehta',
        title: 'Yoga Enthusiast',
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
        message: 'The natural pool was a breathtaking experience. The environment is peaceful and rejuvenating. Highly recommended!'
    },
    {
        name: 'Neha Sharma',
        title: 'Wellness Blogger',
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
        message: 'Their wellness treatments are top-notch. From the aroma to the staff, everything is premium and relaxing.'
    },
    {
        name: 'Rohan Singh',
        title: 'Corporate Trainer',
        image: 'https://randomuser.me/api/portraits/men/51.jpg',
        message: 'I attended an aqua yoga session and it was phenomenal. The instructors were skilled and the ambiance was refreshing.'
    },
    {
        name: 'Ishita Verma',
        title: 'Travel Influencer',
        image: 'https://randomuser.me/api/portraits/women/22.jpg',
        message: 'Staying at the retreat was one of the best decisions. Loved the serenity, nature, and beautiful design.'
    }
];

export default function Testimonials() {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 600,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <section className="py-24 bg-[#f8f9fa]">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black mb-4">
                        What People <span className="text-royal-gold">Say</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Hear from our valued guests who have experienced peace, beauty, and rejuvenation
                    </p>
                </motion.div>

                <Slider {...settings}>
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="px-4"
                        >
                            <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-14 h-14 rounded-full overflow-hidden">
                                        <Image
                                            src={t.image}
                                            alt={t.name}
                                            width={56}
                                            height={56}
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-black">{t.name}</h4>
                                        <p className="text-sm text-gray-500">{t.title}</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-base leading-relaxed">
                                    {t.message}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}


// sdsd