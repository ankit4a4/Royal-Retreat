'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';


export default function HomeGallery() {
    const images = [
        'https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg',
        'https://images.pexels.com/photos/1309766/pexels-photo-1309766.jpeg',
        'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg',
        'https://images.pexels.com/photos/3768997/pexels-photo-3768997.jpeg',
        'https://images.pexels.com/photos/3768999/pexels-photo-3768999.jpeg',
        'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg'
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black mb-4">
                        Our <span className="text-royal-gold">Gallery</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-xl mx-auto">
                        Discover the serene ambiance and natural elegance of our spaces through this visual journey.
                    </p>
                </motion.div>

                <Slider {...settings}>
                    {images.map((img, index) => (
                        <div key={index} className="px-3">
                            <div className="relative h-72 rounded-xl overflow-hidden shadow-lg group cursor-pointer">
                                <Image
                                    src={`${img}?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
                                    alt={`Gallery Image ${index + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Overlay effect */}
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                {/* Optional title or icon */}
                                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-lg font-semibold">View Image</p>
                                </div>
                            </div>
                        </div>
                    ))}

                </Slider>
            </div>
        </section>
    );
}
