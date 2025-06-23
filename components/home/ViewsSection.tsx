'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const ViewsSection = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    {
      src: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Mountain Sunrise',
      description: 'Wake up to breathtaking sunrise views over the majestic mountain ranges'
    },
    {
      src: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Forest Canopy',
      description: 'Immerse yourself in the lush greenery of our private forest sanctuary'
    },
    {
      src: 'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Sunset Terrace',
      description: 'Romantic sunset views from our exclusive terrace dining areas'
    },
    {
      src: 'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Valley Views',
      description: 'Panoramic views of the pristine valley stretching to the horizon'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-black mb-4">
            Views from Our <span className="text-royal-gold">Resort</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the natural beauty that surrounds our resort, from mountain peaks to lush valleys
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={images[selectedImage].src}
                fill
                alt={images[selectedImage].title}
                className="object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-playfair font-bold mb-2">
                  {images[selectedImage].title}
                </h3>
                <p className="text-lg text-gray-200">
                  {images[selectedImage].description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Thumbnail Gallery */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative h-24 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                  selectedImage === index 
                    ? 'ring-4 ring-royal-gold shadow-lg' 
                    : 'hover:shadow-md'
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image.src}
                  fill
                  alt={image.title}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {image.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 text-center max-w-4xl mx-auto"
        >
          <p className="text-lg text-gray-600 leading-relaxed">
            Every window in our resort frames a masterpiece of nature. From the moment you wake up 
            to the time you retire for the evening, you'll be surrounded by stunning vistas that 
            change with the light and seasons. Our elevated position offers unparalleled views of 
            the surrounding landscape, making every moment a photo opportunity and every meal a 
            visual feast.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ViewsSection;