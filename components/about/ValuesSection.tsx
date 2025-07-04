'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Flower, HeartPulse, Smile, Leaf } from 'lucide-react';

const values = [
  // {
  //   icon: Flower,
  //   title: 'Holistic Wellness',
  //   description:
  //     'We embrace a mind-body-spirit approach, offering therapies and practices that restore balance and harmony.',
  // },
{
  icon: HeartPulse, 
  title: 'Stress-Free Living',
  description:
    'Step into a world where time slows down and serenity takes over. At a wellness retreat, stress-free living means waking up to the sounds of nature, moving gently through yoga or meditation, and nourishing your body with wholesome meals prepared with care. There\'s no rush, no pressure—just space to breathe, reflect, and heal.Here, your mind unwinds, your body restores, and your soul reconnects. Digital distractions fade, replaced by deep rest, mindful practices, and heart-centered community. Every moment invites you to live lightly, joyfully, and with intention.It’s not just a break—it’s a gentle reset to help you return to your life more centered, more grounded, and more you.',
},
  {
    icon: Smile,
    title: 'Calm & Comfort: A Mud-House Escape',
    description:
      'Tucked away from the rush of the world, there’s a quiet kind of magic in mud houses. Earthy, grounding, and deeply peaceful — they hold the soul of wellness retreats.Step inside, and the walls breathe coolness. The air feels soft, the silence kind. No harsh edges, no loud colors — just the gentle hum of nature. Mud homes aren’t just structures; they’re sanctuaries built from the earth itself.Here, calm isn’t an idea — it’s a feeling. You wake up to birdsong, stretch under open skies, and let time slow down. The comfort isn’t from luxury, but from simplicity. Natural materials, soft lighting, and cozy corners make you feel held — like home, but lighter.In a world that runs fast, the mud house reminds you how to pause. How to listen to your breath. How to just be.And that’s the gift of this wellness retreat — calm and comfort, one breath at a time.',
  },
  {
    icon: Leaf,
    title: 'Nature-Aligned Healing',
    description:
      'Where the rhythm of nature meets the stillness within — discover healing, grounded in earth and soul, at our wellness retreat."',
  },
];

const ValuesSection = () => (
  <section className="relative py-24 bg-royal-gold">
    <div className="container mx-auto px-4 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
          Our <span className="text-white/80 drop-shadow-md">Core Values</span>
        </h2>
        <p className="text-lg text-white/90 max-w-2xl mx-auto">
          Rooted in wellness, nature, and inner balance — the essence of Palm Bliss.
        </p>
      </motion.div>

      <div className="space-y-16 relative">
        {values.map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            className={`relative z-10 ${index % 2 === 0 ? 'md:pl-32 md:pr-4' : 'md:pr-32 md:pl-4'}`}
          >
            <Card className="bg-white/80 backdrop-blur-md border-none shadow-xl hover:shadow-2xl transition duration-300 rounded-2xl">
              <CardContent className="p-8 relative">
                <div className="absolute -left-6 top-6 w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center ring-4 ring-white z-20">
                  <value.icon className="h-7 w-7 text-royal-gold" />
                </div>
                <div className="pl-12">
                  <h3 className="text-2xl font-semibold font-playfair text-gray-800 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}

        {/* Vertical Line for Timeline Effect */}
        <div className="absolute top-0 left-8 w-1 h-full bg-white/60 hidden md:block" />
      </div>
    </div>
  </section>
);

export default ValuesSection;
