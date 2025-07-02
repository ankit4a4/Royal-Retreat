"use client";
import { motion } from 'framer-motion';
import React from 'react'
import { Card, CardContent } from '@/components/ui/card';
import { Wifi, Car, Coffee, Tv, Wind, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import mudimage from "../../public/Images/AllPhotos/mud-house.webp";
import gardenView from "../../public/Images/AllPhotos/gardenView.webp";
import mountainView from "../../public/Images/AllPhotos/mountainView.webp"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
const RoomsGrid = () => {

  const router = useRouter();

  const rooms = [
    {
      id: 2,
      title: "Mud Houses",
      description:
        "Experience rustic charm in our traditional mud house, featuring a separate living area and ample space.",
      image: mudimage,
      price: "₹6,999",
      capacity: "2 Adults",
      amenities: ["Living Room", "Garden View", "Dining Area"],
      features: [Wifi, Car, Coffee, Tv, Wind, Users],
    },
    {
      id: 3,
      title: "Garden Room",
      description:
        "Elegant room overlooking our beautiful gardens, perfect for a peaceful getaway.",
      image: gardenView,
      price: "₹3,999",
      capacity: "2 Adults",
      amenities: [
        "Garden View",
        "Queen Bed",
        "Marble Bathroom",

        "Work Desk",
        "Safe",
      ],
      features: [Wifi, Car, Coffee, Tv, Wind, Users],
    },
    {
      id: 4,
      title: "Wellness Suite",
      description:
        "Specially designed for wellness enthusiasts with yoga space and spa amenities.",
      image:
        "https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: "₹5,999",
      capacity: "2 Adults",
      amenities: ["Yoga Mat", "Meditation Corner", "Tv", "Sound System"],
      features: [Wifi, Car, Coffee, Tv, Wind, Users],
    },
    {
      id: 5,
      title: "Mountain View Room",
      description:
        "Breathtaking mountain views from your private balcony with modern amenities.",
      image:
       mountainView,
      price: "₹4,999",
      capacity: "2 Adults",
      amenities: [
        "Mountain View",
        "Balcony",
        "King Bed",
        "Sitting Area",
        "Premium Linens",
        "Room Service",
      ],
      features: [Wifi, Car, Coffee, Tv, Wind, Users],
    },
    // {
    //   id: 6,
    //   title: "Family Suite",
    //   description:
    //     "Perfect for families with connecting rooms and child-friendly amenities.",
    //   image:
    //     "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //   price: "₹6,999",
    //   capacity: "2 Adults + 2 Children",
    //   amenities: [
    //     "Connecting Rooms",
    //     "Play Area",
    //     "Child Safety",
    //     "Family Dining",
    //     "Entertainment",
    //     "Babysitting",
    //   ],
    //   features: [Wifi, Car, Coffee, Tv, Wind, Users],
    // },
  ];

  return (
    <div>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
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
                      <Badge className="bg-royal-gold text-black font-semibold">
                        {room.price}/night
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-2xl font-playfair font-bold text-black mb-2">
                      {room.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {room.description}
                    </p>

                    <div className="flex items-center gap-2 mb-4">
                      <Users className="h-4 w-4 text-royal-gold" />
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
                          <Feature key={idx} className="h-4 w-4 text-royal-gold" />
                        ))}
                      </div>
                      <Button
                        onClick={() => router.push(`/contact?id=${room.id}`)}
                        className="bg-royal-gold hover:bg-royal-gold-dark text-black font-semibold">
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section >
    </div >
  )
}

export default RoomsGrid
