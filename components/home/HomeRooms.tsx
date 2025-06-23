'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Slider from 'react-slick';

const rooms = [
    {
        name: 'Deluxe Himalayan Cottage',
        img: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=900&q=80',
        description:
            'A peaceful, mountain-facing cottage made of mud and stone, featuring hand-carved wooden interiors and Ayurvedic ambiance.',
        price: '₹5,499 / night',
    },
    {
        name: 'Luxury Wellness Suite',
        img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
        description:
            'Spacious suite with private garden, open shower, and natural ventilation. Ideal for long stays & healing therapies.',
        price: '₹7,999 / night',
    },
    {
        name: 'Eco Forest View Room',
        img: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?cs=srgb&dl=pexels-jvdm-1457842.jpg&fm=jpg',
        description:
            'Overlooking lush forest, this serene retreat room is perfect for mindfulness & meditation.',
        price: '₹4,299 / night',
    },
    {
        name: 'Deluxe Himalayan Cottage',
        img: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=900&q=80',
        description:
            'A peaceful, mountain-facing cottage made of mud and stone, featuring hand-carved wooden interiors and Ayurvedic ambiance.',
        price: '₹5,499 / night',
    },
    {
        name: 'Luxury Wellness Suite',
        img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
        description:
            'Spacious suite with private garden, open shower, and natural ventilation. Ideal for long stays & healing therapies.',
        price: '₹7,999 / night',
    },
    {
        name: 'Eco Forest View Room',
        img: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?cs=srgb&dl=pexels-jvdm-1457842.jpg&fm=jpg',
        description:
            'Overlooking lush forest, this serene retreat room is perfect for mindfulness & meditation.',
        price: '₹4,299 / night',
    },
];

const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
            },
        },
    ],
};

const RoomsSection = () => {
    return (
        <section className="bg-[#FBF7F0]   py-[3vh] md:py-[12vh] px-6 md:px-[8vw]">
            <div className="text-center space-y-[5vh] mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-[6vw] md:text-[2.8vw] font-playfair font-bold text-[#000] leading-tight"
                >
                    Stay in <span className="text-[#A67A35]">Harmony & Comfort</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-[2.5vh] md:text-[1.2vw] text-gray-700 leading-relaxed mx-auto"
                >
                    Our rooms are more than a place to rest — they're sanctuaries for deep sleep,
                    holistic healing, and spiritual calm.
                </motion.p>
            </div>

            {/* Room Cards Slider */}
            <div className="mt-[8vh] mx-auto ">
                <Slider {...sliderSettings}>
                    {rooms.map((room, idx) => (
                        <div key={idx} className="px-3">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: idx * 0.2 }}
                                className="bg-white rounded-xl overflow-hidden shadow-md border border-[#e4d8c5] hover:shadow-lg transition duration-300 flex flex-col h-full"
                            >
                                <div className="relative w-full h-56 md:h-[35vh]">
                                    <Image
                                        src={room.img}
                                        alt={room.name}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        quality={85}
                                    />
                                </div>
                                <div className="p-6 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-[2.3vh] md:text-[1.2vw] font-playfair font-semibold text-[#3c2f23] mb-2">
                                            {room.name}
                                        </h3>
                                        <p className="text-[2.2vh] md:text-[1.05vw] text-[#5c5344] mb-4 leading-relaxed line-clamp-2">
                                            {room.description}
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between mt-auto">
                                        <span className="text-[#C9A062] font-semibold text-[2.3vh] md:text-[1.15vw]">
                                            {room.price}
                                        </span>
                                        <button className="bg-[#C9A062] hover:bg-[#b88d4f] text-white text-[2vh] md:text-[1vw] font-medium px-4 py-2 rounded-full transition duration-200">
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* View All Button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center mt-[10vh]"
            >
                <button className="bg-[#3c2f23] hover:bg-[#2c241b] text-white text-[2.1vh] md:text-[1vw] font-medium px-8 py-3 rounded-full transition duration-200">
                    View All Rooms
                </button>
            </motion.div>
        </section>
    );
};

export default RoomsSection;
