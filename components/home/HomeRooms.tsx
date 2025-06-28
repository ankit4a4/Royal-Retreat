'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRouter } from 'next/navigation';
import image1 from "@/public/Images/AllPhotos/DSC06396.webp";
import image2 from "@/public/Images/AllPhotos/DSC06521.webp";
import image3 from "@/public/Images/AllPhotos/DSC06399.webp";
const Slider = dynamic(() => import('react-slick'), { ssr: false });






const RoomsSection = () => {
    const router = useRouter();
    const rooms = [
        {
            name: 'Deluxe Himalayan Cottage',
            img: image1.src,
            description:
                'A peaceful, mountain-facing cottage made of mud and stone, featuring hand-carved wooden interiors and Ayurvedic ambiance.',
            price: '₹5,499 / night',
        },
        {
            name: 'Luxury Wellness Suite',
            img: image2.src,
            description:
                'Spacious suite with private garden, open shower, and natural ventilation. Ideal for long stays & healing therapies.',
            price: '₹7,999 / night',
        },
        {
            name: 'Eco Forest View Room',
            img: image3.src,
            description:
                'Overlooking lush forest, this serene retreat room is perfect for mindfulness & meditation.',
            price: '₹4,299 / night',
        },
    ];

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    arrows: false
                }
            }
        ]
    };
    return (
        <section className="bg-[#FBF7F0] py-[3vh] md:py-[12vh] px-6 md:px-[8vw]">
            <div className="text-center space-y-[5vh] mx-auto">
                <h2 className="text-[6vw] md:text-[2.8vw] font-playfair font-bold text-[#000] leading-tight">
                    Stay in <span className="text-[#A67A35]">Harmony & Comfort</span>
                </h2>
                <p className="text-[2.5vh] md:text-[1.2vw] text-gray-700 leading-relaxed mx-auto">
                    Our rooms are more than a place to rest — they're sanctuaries for deep sleep,
                    holistic healing, and spiritual calm.
                </p>
            </div>

            {/* Room Cards Slider */}
            <div className="mt-[8vh]">
                <Slider {...sliderSettings}>
                    {rooms.map((room, idx) => (
                        <div key={idx} className="px-4">
                            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-[#e4d8c5] hover:shadow-lg transition duration-300 flex flex-col h-full">
                                <div className="relative w-full h-56 md:h-[35vh]">
                                    <Image
                                        src={room.img}
                                        alt={room.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover"
                                        priority={idx === 0}
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

                                        <button className="bg-[#C9A062] text-white text-[2vh] md:text-[1vw] font-medium px-4 py-2 rounded-full">
                                            Book Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* View All Button */}
            <div className="text-center mt-[10vh]">
                <button
                    onClick={() => router.push('/rooms')}
                    className="bg-[#3c2f23] text-white text-[2.1vh] md:text-[1.2vw] font-medium px-8 py-3 md:px-[3vw] md:py-[1vw] rounded-full">
                    View All Rooms
                </button>
            </div>
        </section>
    );
};

export default RoomsSection;
