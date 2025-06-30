'use client';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRouter } from 'next/navigation';
import image1 from "@/public/Images/AllPhotos/DSC06396.webp";
import image2 from "@/public/Images/AllPhotos/DSC06521.webp";
import image3 from "@/public/Images/AllPhotos/DSC06399.webp";
import { Card, CardContent } from '@/components/ui/card';
import { Wifi, Car, Coffee, Tv, Wind, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
const Slider = dynamic(() => import('react-slick'), { ssr: false });






const RoomsSection = () => {
    const router = useRouter();

    const rooms = [
        {
            id: 1,
            title: 'Royal Suite',
            description: 'The pinnacle of luxury with panoramic mountain views, private balcony, and exclusive amenities.',
            image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            price: '₹99,999',
            capacity: '2 Adults',
            amenities: ['Private Balcony', 'King Size Bed', 'Jacuzzi', 'Butler Service', 'Mountain View', 'Mini Bar'],
            features: [Wifi, Car, Coffee, Tv, Wind, Users]
        },
        {
            id: 2,
            title: 'Deluxe Villa',
            description: 'Spacious villa with separate living area, perfect for families or extended stays.',
            image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            price: '₹66,999',
            capacity: '4 Adults',
            amenities: ['Living Room', 'Kitchen', 'Garden View', 'Private Pool', 'Terrace', 'Dining Area'],
            features: [Wifi, Car, Coffee, Tv, Wind, Users]
        },
        {
            id: 3,
            title: 'Garden Room',
            description: 'Elegant room overlooking our beautiful gardens, perfect for a romantic getaway.',
            image: 'https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            price: '₹37,999',
            capacity: '2 Adults',
            amenities: ['Garden View', 'Queen Bed', 'Marble Bathroom', 'Balcony', 'Work Desk', 'Safe'],
            features: [Wifi, Car, Coffee, Tv, Wind, Users]
        },
        {
            id: 4,
            title: 'Wellness Suite',
            description: 'Specially designed for wellness enthusiasts with yoga space and spa amenities.',
            image: 'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            price: '₹53,999',
            capacity: '2 Adults',
            amenities: ['Yoga Mat', 'Meditation Corner', 'Aromatherapy', 'Spa Products', 'Sound System', 'Healthy Minibar'],
            features: [Wifi, Car, Coffee, Tv, Wind, Users]
        },
        {
            id: 5,
            title: 'Mountain View Room',
            description: 'Breathtaking mountain views from your private balcony with modern amenities.',
            image: 'https://images.pexels.com/photos/1834395/pexels-photo-1834395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            price: '₹41,999',
            capacity: '2 Adults',
            amenities: ['Mountain View', 'Balcony', 'King Bed', 'Sitting Area', 'Premium Linens', 'Room Service'],
            features: [Wifi, Car, Coffee, Tv, Wind, Users]
        },
        {
            id: 6,
            title: 'Family Suite',
            description: 'Perfect for families with connecting rooms and child-friendly amenities.',
            image: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            price: '₹62,999',
            capacity: '4 Adults + 2 Children',
            amenities: ['Connecting Rooms', 'Play Area', 'Child Safety', 'Family Dining', 'Entertainment', 'Babysitting'],
            features: [Wifi, Car, Coffee, Tv, Wind, Users]
        }
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
                    {rooms.map((room, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group px-3"
                        >
                            <Card className="h-full bg-white border-gray-200 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                                <div className="relative h-64">
                                    <Image
                                        src={room.image}
                                        fill
                                        alt={room.title}
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute top-4 right-4">
                                        <Badge className="bg-[#A67A35] text-black font-semibold">
                                            {room.price}/night
                                        </Badge>
                                    </div>
                                </div>

                                <CardContent className="p-6">
                                    <h3 className="text-xl md:text-2xl font-playfair font-bold text-black mb-2">
                                        {room.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm md:text-base mb-4">
                                        {room.description}
                                    </p>

                                    <div className="flex items-center gap-2 mb-4">
                                        <Users className="h-4 w-4 text-[#A67A35]" />
                                        <span className="text-sm text-gray-600">{room.capacity}</span>
                                    </div>

                                    <div className="mb-4">
                                        <h4 className="font-semibold text-black mb-2">Amenities</h4>
                                        <div className="flex flex-wrap gap-1">
                                            {room.amenities.slice(0, 4).map((amenity, idx) => (
                                                <Badge key={idx} variant="outline" className="text-xs">
                                                    {amenity}
                                                </Badge>
                                            ))}
                                            {room.amenities.length > 4 && (
                                                <Badge variant="outline" className="text-xs">
                                                    +{room.amenities.length - 4} more
                                                </Badge>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex gap-2">
                                            {room.features.slice(0, 4).map((Feature, idx) => (
                                                <Feature key={idx} className="h-4 w-4 text-[#A67A35]" />
                                            ))}
                                        </div>
                                        <Button
                                            onClick={() => router.push(`/contact?id=${room.id}`)}
                                            className="bg-[#A67A35] hover:bg-[#8c672d] text-black font-semibold">
                                            Book Now
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
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
