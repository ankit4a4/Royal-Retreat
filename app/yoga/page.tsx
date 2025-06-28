'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sunrise, Moon, Users, Clock, Heart, Star } from 'lucide-react';
import ClassesSchedule from '@/components/yoga/ClassesSchedule';

export default function Yoga() {
  

  const instructors = [
    {
      name: 'Maya Patel',
      specialty: 'Vinyasa & Hatha Yoga',
      experience: '15 years',
      image: 'https://images.pexels.com/photos/3822583/pexels-photo-3822583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Certified yoga instructor with expertise in traditional and modern yoga practices.'
    },
    {
      name: 'Raj Sharma',
      specialty: 'Restorative & Yin Yoga',
      experience: '12 years',
      image: 'https://images.pexels.com/photos/3822695/pexels-photo-3822695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Specializes in gentle yoga practices and deep relaxation techniques.'
    },
    {
      name: 'Priya Gupta',
      specialty: 'Power & Ashtanga Yoga',
      experience: '10 years',
      image: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Dynamic yoga instructor focused on building strength and flexibility.'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
    

      {/* Classes Schedule */}
    <ClassesSchedule />

      {/* Instructors Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black mb-4">
              Expert <span className="text-royal-gold">Instructors</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn from certified yoga masters dedicated to guiding your practice
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <Card className="h-full bg-white border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src={instructor.image}
                      fill
                      alt={instructor.name}
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-playfair font-bold text-black mb-2">
                      {instructor.name}
                    </h3>
                    <p className="text-royal-gold font-semibold mb-2">
                      {instructor.specialty}
                    </p>
                    <p className="text-sm text-gray-600 mb-3">
                      {instructor.experience} Experience
                    </p>
                    <p className="text-gray-600">
                      {instructor.bio}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Sessions */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              Private <span className="text-royal-gold">Sessions</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Personalized yoga instruction tailored to your individual needs and goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-playfair font-bold mb-6">
                Personalized Yoga Experience
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-royal-gold rounded-full mt-2"></div>
                  <p className="text-gray-300">One-on-one instruction with certified masters</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-royal-gold rounded-full mt-2"></div>
                  <p className="text-gray-300">Customized practice based on your goals</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-royal-gold rounded-full mt-2"></div>
                  <p className="text-gray-300">Flexible scheduling to fit your stay</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-royal-gold rounded-full mt-2"></div>
                  <p className="text-gray-300">Choice of indoor pavilion or outdoor garden</p>
                </div>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h4 className="text-xl font-playfair font-bold text-royal-gold mb-2">
                  Session Pricing
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>60 minutes</span>
                    <span className="text-royal-gold">$150</span>
                  </div>
                  <div className="flex justify-between">
                    <span>90 minutes</span>
                    <span className="text-royal-gold">$200</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Package of 5 sessions</span>
                    <span className="text-royal-gold">$650</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-96 rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.pexels.com/photos/3822695/pexels-photo-3822695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                fill
                alt="Private Yoga Session"
                className="object-cover"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              className="bg-royal-gold hover:bg-royal-gold-dark text-black font-semibold px-8 py-3"
            >
              Book Private Session
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}