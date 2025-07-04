"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Crown, ChevronRight, Quote, Calendar, MapPin } from "lucide-react";

const StorySection = () => (
  <section className="relative py-32 bg-[#FBF6E9] overflow-hidden">
    {/* === Subtle Texture Background === */}
    <div className="absolute inset-0 overflow-hidden z-0 opacity-20">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]" />
    </div>

    <div className="container mx-auto px-5 md:px-10 lg:px-16 relative z-10">
      {/* === Section Header === */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <div className="inline-flex items-center gap-3 mb-4 px-6 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[#E8D5B5]">
          <Crown className="w-5 h-5 text-[#C0A46B]" />
          <span className="text-sm font-medium text-[#8A6D3B] tracking-wider">LEGACY OF ELEGANCE</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-playfair font-bold text-[#333333]">
          Our <span className="text-[#C0A46B]">Story</span>
        </h2>
      </motion.div>

      {/* === Main Content Grid === */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* === Left Column (Text) === */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2"
        >
          <div className="bg-white/80 backdrop-blur-md border border-[#E8D5B5] p-8 rounded-xl shadow-lg h-full">
            <h3 className="text-xl font-semibold text-[#333333] mb-6 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#C0A46B]" />
              Reconnect, Rejuvenate, Realign.
            </h3>
            <p className="text-[#555555] leading-relaxed mb-6">
              Step into a sanctuary where profound healing begins from within. Our retreat is a soulful journey blending mindfulness, movement, nourishing nutrition, and deep emotional well-being. 
            </p>
            <p className="text-[#8A6D3B] font-medium mb-6">
              Through expertly guided sessions, immersive experiences in nature, and the power of community, we invite you to explore the full spectrum of what it truly means to feel whole—not just healthy.
            </p>
            <div className="relative pl-8">
              <Quote className="absolute left-0 top-0 w-6 h-6 text-[#333333]" />
              <blockquote className="text-[#8A6D3B] italic font-serif text-lg">
                "You don’t just stay here — you return to yourself. Every space reconnects you with nature, healing, and peace."
              </blockquote>
              <div className="flex gap-2 items-center mt-4">
                <div className="w-1 h-8 bg-[#8A6D3B] rounded-full"></div>
                <span className="text-[#8A6D3B] font-medium">The Palm Bliss</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* === Right Column (Image) === */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-3 relative group"
        >
          <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src="https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg"
              fill
              alt="Himalayan Retreat"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-md">
              <MapPin className="w-4 h-4 text-[#8A6D3B]" />
              <span className="text-sm font-medium text-gray-800">Himalayan Foothills</span>
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  </section>
);

export default StorySection;
