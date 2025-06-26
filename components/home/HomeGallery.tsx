'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img from '@/public/Images/AllPhotos/DSC06389.jpg';
import img2 from '@/public/Images/AllPhotos/DSC06396.jpg';
import img3 from '@/public/Images/AllPhotos/DSC06399.jpg';
import img4 from '@/public/Images/AllPhotos/DSC06434.jpg';
import img5 from '@/public/Images/AllPhotos/DSC06460.jpg';
import img6 from '@/public/Images/AllPhotos/DSC06475.jpg';
import img7 from '@/public/Images/AllPhotos/DSC06521.jpg';

export default function HomeGallery() {
    const images = [
        img.src,
        img2.src,
        img3.src,
        img4.src,
        img5.src,
        img6.src,
        img7.src,
    ];

    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const modalRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                modalRef.current &&
                !modalRef.current.contains(e.target as Node)
            ) {
                setSelectedImage(null);
            }
        };

        if (selectedImage) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [selectedImage]);

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
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <section className="md:py-[10vh] py-10 bg-white">
            <div className="w-[90vw] max-w-[120vw] mx-auto px-[2vw]">
                <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-[5vh]"
                >
                    <h2 className="text-[6vw] md:text-[3vw] font-playfair font-bold text-black mb-[1.5vh]">
                        Our <span className="text-royal-gold">Gallery</span>
                    </h2>
                    <p className="text-[3.5vw] md:text-[1.3vw] text-gray-600 max-w-[80vw] md:max-w-[50vw] mx-auto">
                        Discover the serene ambiance and natural elegance of our spaces through this visual journey.
                    </p>
                </motion.div>

                <Slider {...settings}>
                    {images.map((img, index) => (
                        <div key={index} className="px-[1vw]">
                            <div
                                className="relative h-[30vh] md:h-[40vh] rounded-[2vw] overflow-hidden shadow-lg group cursor-pointer"
                                onClick={() => setSelectedImage(img)}
                            >
                                <Image
                                    src={`${img}?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
                                    alt={`Gallery Image ${index + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute bottom-[2vh] left-[2vw] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-[3.5vw] md:text-[1.2vw] font-semibold">View Image</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Popup Modal */}
            {selectedImage && (
                <div className="fixed  inset-0 z-50 bg-black/80 flex items-center justify-center p-[4vw]">
                    <div className="relative  w-full" ref={modalRef}>
                        {/* Close Button */}


                        {/* Image */}
                        <div className="relative w-[95%] md:w-[60%] h-[40vh] md:h-[80vh] mx-auto rounded-[1vw] ">
                            <Image
                                src={selectedImage}
                                alt="Popup Image"
                                fill
                                className="object-contain rounded-[3vw] md:rounded-[1vw]"
                            />
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute right-[-5vw] top-[-5vw] md:top-[-3vh] md:right-[-8vh] bg-red-600 text-white text-[4vw] md:text-[1.5vw] rounded-full w-[7vw] h-[7vw] md:w-[3vw] md:h-[3vw] flex items-center justify-center shadow-lg hover:bg-red-700 transition"
                            >
                                ×
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
