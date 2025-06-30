'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, Wifi, Car, Coffee, Tv, Wind, Users } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

const contactInfo = [
  { icon: MapPin, title: 'Address', details: ['Palm bliss, Luxury Resort District', 'Paradise Valley, Mountain Region', 'Postal Code: 12345'] },
  { icon: Phone, title: 'Phone', details: ['+1 (555) 123-4567', '+1 (555) 123-4568 (Reservations)', '+1 (555) 123-4569 (Concierge)'] },
  { icon: Mail, title: 'Email', details: ['info@Palmbliss.com', 'reservations@Palmbliss.com', 'concierge@Palmbliss.com'] },
  { icon: Clock, title: 'Hours', details: ['Reception: 24/7', 'Reservations: 8:00 AM - 10:00 PM', 'Concierge: 6:00 AM - 11:00 PM'] }
];

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

const ContactForm = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const roomId = parseInt(id || '', 10);
  const selectedRoom = rooms.find((room) => room.id === roomId);

  const [formData, setFormData] = useState({
    roomId: '',
    roomTitle: '',
    roomPrice: '',
    roomCapacity: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    if (selectedRoom) {
      setFormData((prev: any) => ({
        ...prev,
        roomId: selectedRoom.id,
        roomTitle: selectedRoom.title,
        roomPrice: selectedRoom.price,
        roomCapacity: selectedRoom.capacity,
        subject: `Booking: ${selectedRoom.title}`
      }));
    }
  }, [selectedRoom]);

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-3xl font-playfair font-bold text-black mb-6">
                  {selectedRoom ? <>Book <span className="text-royal-gold">{selectedRoom.title}</span></> : <>Send us a <span className="text-royal-gold">Message</span></>}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {selectedRoom && (
                    <>
                      <div className="space-y-2">
                        <Label>Room Name</Label>
                        <Input disabled value={selectedRoom.title} />
                      </div>
                      <div className="space-y-2">
                        <Label>Price</Label>
                        <Input disabled value={selectedRoom.price} />
                      </div>
                      <div className="space-y-2">
                        <Label>Capacity</Label>
                        <Input disabled value={selectedRoom.capacity} />
                      </div>
                    </>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" value={formData.lastName} onChange={handleChange} placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter your email address" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" value={formData.subject} onChange={handleChange} placeholder="What is this regarding?" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" value={formData.message} onChange={handleChange} placeholder="Tell us how we can help you..." rows={5} />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-royal-gold text-black font-semibold">
                    {selectedRoom ? 'Book Now' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-8">
            <div>
              <h2 className="text-3xl font-playfair font-bold text-black mb-6">
                Get in <span className="text-royal-gold">Touch</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our dedicated team is available to assist you with reservations, special requests, and any questions about your stay.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }}>
                  <Card className="h-full bg-gray-50 border-gray-200">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-royal-gold rounded-full flex items-center justify-center">
                          <info.icon className="h-5 w-5 text-white" />
                        </div>
                        <h3 className="text-lg font-playfair font-bold text-black">{info.title}</h3>
                      </div>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
