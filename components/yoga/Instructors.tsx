import React from 'react'
import { Card, CardContent } from '../ui/card'
import { motion } from 'framer-motion';
import Image from 'next/image';
const Instructors = () => {

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
        <>
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
        </>
    )
}

export default Instructors
