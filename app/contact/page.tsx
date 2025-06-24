'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Car, Plane } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['Royal Hills, Luxury Resort District', 'Paradise Valley, Mountain Region', 'Postal Code: 12345']
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 123-4568 (Reservations)', '+1 (555) 123-4569 (Concierge)']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@royalretreat.com', 'reservations@royalretreat.com', 'concierge@royalretreat.com']
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Reception: 24/7', 'Reservations: 8:00 AM - 10:00 PM', 'Concierge: 6:00 AM - 11:00 PM']
    }
  ];

  const directions = [
    {
      icon: Plane,
      title: 'From Airport',
      description: 'Paradise International Airport is 25km away. Take Highway 101 North for 20km, then exit at Royal Valley Road. Follow signs for 5km to reach the resort.',
      duration: '30 minutes'
    },
    {
      icon: Car,
      title: 'By Car',
      description: 'From the city center, take Mountain Highway for 35km. Turn right at Paradise Valley Junction and continue for 8km. The resort entrance will be on your left.',
      duration: '45 minutes'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-96 bg-black">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            fill
            alt="Contact Palm Bliss"
            className="object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-4">
              Contact <span className="text-royal-gold">Palm Bliss</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              We're here to help you plan your perfect luxury getaway
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-white border-gray-200 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-playfair font-bold text-black mb-6">
                    Send us a <span className="text-royal-gold">Message</span>
                  </h2>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          placeholder="Enter your first name"
                          className="border-gray-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          placeholder="Enter your last name"
                          className="border-gray-300"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        className="border-gray-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        className="border-gray-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="What is this regarding?"
                        className="border-gray-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us how we can help you..."
                        rows={5}
                        className="border-gray-300"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-royal-gold hover:bg-royal-gold-dark text-black font-semibold"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-playfair font-bold text-black mb-6">
                  Get in <span className="text-royal-gold">Touch</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our dedicated team is available to assist you with reservations, 
                  special requests, and any questions about your stay.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="h-full bg-gray-50 border-gray-200">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-royal-gold rounded-full flex items-center justify-center">
                            <info.icon className="h-5 w-5 text-white" />
                          </div>
                          <h3 className="text-lg font-playfair font-bold text-black">
                            {info.title}
                          </h3>
                        </div>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600 text-sm">
                              {detail}
                            </p>
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

      {/* Directions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black mb-4">
              Directions to <span className="text-royal-gold">Paradise</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find your way to Palm Bliss Resort with our detailed directions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {directions.map((direction, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="h-full bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-royal-gold rounded-full flex items-center justify-center">
                        <direction.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-playfair font-bold text-black">
                          {direction.title}
                        </h3>
                        <p className="text-royal-gold font-semibold">
                          {direction.duration}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {direction.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="h-96 rounded-2xl overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459418!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1635959471659!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Palm Bliss Resort Location"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-playfair font-bold mb-6">
              24/7 <span className="text-royal-gold">Emergency Support</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              For urgent matters or emergency assistance during your stay, 
              our dedicated support team is available around the clock.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-royal-gold hover:bg-royal-gold-dark text-black font-semibold"
              >
                Call Emergency Line
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black"
              >
                Live Chat Support
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}