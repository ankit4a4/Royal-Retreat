"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// import ayurveda from '@/public/Images/Wellness/ayurveda.jpg';
// import yoga from '@/public/Images/Wellness/yoga.jpg';
// import homeopathy from '@/public/Images/Wellness/homeopathy.jpg';
// import naturopathy from '@/public/Images/Wellness/naturopathy.jpg';

const systems = [
  {
    title: "Ayurveda",
    image:
      "https://images.unsplash.com/photo-1495461199391-8c39ab674295?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXl1cnZlZGF8ZW58MHx8MHx8fDA%3D",
    description:
      "Explore the wisdom of Ayurveda — a 5,000-year-old science of life focused on balancing the body’s energies through diet, herbs, and traditional therapies. Ideal for rejuvenation, detoxification, and long-term wellness.",
  },
  {
    title: "Yoga & Naturopathy",
    image:
      "https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHlvZ2F8ZW58MHx8MHx8fDA%3D",
    description:
      "Unite breath, posture, and awareness through guided yoga and naturopathic techniques. These natural, non-invasive methods aim to strengthen the body’s innate healing mechanisms.",
  },
  // {
  //   title: "Homeopathy",
  //   image:
  //     "https://images.unsplash.com/photo-1648455321715-e8ed86188c0e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9tZW9wYXRoeXxlbnwwfHwwfHx8MA%3D%3D",
  //   description:
  //     "Discover gentle healing through highly individualized remedies. Homeopathy addresses the root cause of illness, promoting emotional and physical harmony.",
  // },
  {
    title: "Herbal Detox",
    image:
      "https://images.unsplash.com/photo-1691670352361-a330ac6990ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fEhlcmJhbCUyMERldG94fGVufDB8fDB8fHww",
    description:
      "Cleanse your body naturally with time-tested herbal therapies designed to eliminate toxins, improve digestion, and restore energy. Our detox programs use medicinal plants and Ayurvedic formulations to rejuvenate from within.",
  },
];

const AyushWellnessSection = () => {
  return (
    <section className="py-20 bg-[#FBF7F0]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-gray-800 mb-4">
            Holistic{" "}
            <span className="text-royal-gold">Wellness Programmes</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Reimagine wellness through the lens of time-honored AYUSH
            disciplines — seamlessly blending traditional knowledge with modern
            lifestyle needs.
          </p>
        </motion.div>

        {/* Wellness Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {systems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-sm overflow-hidden  hover:shadow-xl transition duration-300"
            >
              <div className="relative h-[450px] w-full ">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                <div className="py-5 absolute bottom-0 left-5 right-2 bg-transparent backdrop-blur-sm">
                  <div className="relative ">
                    <h3 className="absolute -top-10 left-0 text-2xl font-playfair font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-200 text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 rounded-sm py-10 border text-center bg-white"
        >
          <p className="text-lg md:text-xl text-gray-700 max-w-xl mx-auto mb-6">
            Begin your journey toward holistic harmony with therapies that
            restore, rejuvenate, and reconnect you with nature's healing wisdom.
          </p>
          <Link
            href="/contact"
            className="text-xl flex items-center gap-2 md:text-2xl font-sans font-medium mb-2 border rounded-sm my-2 px-4 border-yellow-700 py-2 hover:bg-yellow-700 hover:text-white transition-all duration-300 mx-auto w-fit"
          >Book Now
          <ExternalLink />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AyushWellnessSection;
