import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sunrise, Moon, Users, Clock, Heart, Star } from 'lucide-react';

const ClassesSchedule = () => {

    const classes = [
        {
            title: 'Sunrise Vinyasa',
            description: 'Start your day with an energizing flow practice as the sun rises over the mountains.',
            time: '6:00 AM - 7:00 AM',
            level: 'All Levels',
            instructor: 'Maya Patel',
            image: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            icon: Sunrise,
            price: 'Complimentary'
        },
        {
            title: 'Sunset Restorative',
            description: 'Wind down with gentle poses and deep relaxation as the day comes to a peaceful close.',
            time: '6:30 PM - 7:30 PM',
            level: 'Beginner',
            instructor: 'Raj Sharma',
            image: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            icon: Moon,
            price: 'Complimentary'
        },
        {
            title: 'Power Yoga',
            description: 'Challenge yourself with this dynamic and strength-building yoga practice.',
            time: '8:00 AM - 9:00 AM',
            level: 'Intermediate',
            instructor: 'Priya Gupta',
            image: 'https://images.pexels.com/photos/3822583/pexels-photo-3822583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            icon: Heart,
            price: '₹2,900'
        },
        {
            title: 'Meditation & Mindfulness',
            description: 'Cultivate inner peace through guided meditation and mindfulness practices.',
            time: '4:00 PM - 5:00 PM',
            level: 'All Levels',
            instructor: 'Arun Krishnan',
            image: 'https://images.pexels.com/photos/3822901/pexels-photo-3822901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            icon: Star,
            price: 'Complimentary'
        }
    ];

    return (
        <>
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black mb-4">
                            Daily <span className="text-royal-gold">Classes</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Join our expert instructors for transformative yoga experiences throughout the day
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {classes.map((yogaClass, index) => (
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
                                            src={yogaClass.image}
                                            fill
                                            alt={yogaClass.title}
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                        <div className="absolute top-4 right-4">
                                            <Badge className="bg-royal-gold text-black font-semibold">
                                                {yogaClass.price}
                                            </Badge>
                                        </div>
                                        <div className="absolute top-4 left-4">
                                            <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                                                <yogaClass.icon className="h-5 w-5 text-royal-gold" />
                                            </div>
                                        </div>
                                    </div>

                                    <CardContent className="p-6">
                                        <h3 className="text-2xl font-playfair font-bold text-black mb-2">
                                            {yogaClass.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                            {yogaClass.description}
                                        </p>

                                        <div className="space-y-2 mb-4">
                                            <div className="flex items-center gap-2">
                                                <Clock className="h-4 w-4 text-royal-gold" />
                                                <span className="text-sm text-gray-600">{yogaClass.time}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Users className="h-4 w-4 text-royal-gold" />
                                                <span className="text-sm text-gray-600">{yogaClass.level}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Star className="h-4 w-4 text-royal-gold" />
                                                <span className="text-sm text-gray-600">Instructor: {yogaClass.instructor}</span>
                                            </div>
                                        </div>

                                        <Button className="w-full bg-royal-gold hover:bg-royal-gold-dark text-black font-semibold">
                                            Reserve Spot
                                        </Button>
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

export default ClassesSchedule
