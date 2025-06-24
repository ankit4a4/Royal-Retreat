'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarDays } from 'lucide-react';


// ✅ Typewriter Hero Text Component
const texts = [
  'WElCOME',
  'Palm Bliss',
  'Luxury Stay',
  'Wellness Resort',
  'Nature Escapes',
  'Himalayan Hospitality',
];

const TypewriterHeroText = () => {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [typingLine, setTypingLine] = useState(0);

  useEffect(() => {
    const text = texts[lineIndex];
    if (charIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + text[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setCurrentText('');
        if (lineIndex === 0) {
          setLineIndex(1);
          setTypingLine(1);
        } else {
          setLineIndex((prev) => (prev + 1 < texts.length ? prev + 1 : 1));
        }
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, lineIndex]);

  return (
    <div className="text-center">
      {typingLine === 0 ? (
        <h1 className="text-white text-[6vw] md:text-[4vw] font-bold drop-shadow-lg">
          {currentText}
          <span className="animate-pulse">|</span>
        </h1>
      ) : (
        <>
          <h1 className="text-white text-[6vh] md:text-[5vw]  font-bold drop-shadow-lg">
            WELCOME
          </h1>
          <p className="text-white text-[2vh] md:text-[2vw] font-medium mt-2 drop-shadow-md">
            {currentText}
            <span className="animate-pulse">|</span>
          </p>
        </>
      )}
    </div>
  );
};

// ✅ Main HeroSection Component
const HeroSection = () => {
  const [showMobileForm, setShowMobileForm] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    arrival: '',
    departure: '',
    rooms: 1,
    adults: 1,
    children: 0,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  }
  return (
    <section className="relative md:min-h-screen min-h-[80vh] flex flex-col justify-end">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      >
        <source
          src="https://videos.pexels.com/video-files/2098989/2098989-uhd_2560_1440_30fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 z-0"></div>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
        <TypewriterHeroText />
      </div>

      {/* Mobile Toggle Button */}
      <div className="md:hidden z-10 px-[4vh] pb-[4vh]">
        <button
          onClick={() => setShowMobileForm(!showMobileForm)}
          className="w-full bg-[#c1a47a] text-black font-bold text-[2.2vh] py-[2.2vh] rounded-md tracking-wide"
        >
          {showMobileForm ? 'Close Form' : 'Enquire Now'}
        </button>
      </div>

      {/* Form */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`z-10 w-full max-w-[94vw] mx-auto px-[2vh] md:px-[2vw] pb-[4vh] md:pb-[4vh] ${showMobileForm ? 'block' : 'hidden'
          } md:block`}
      >
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 md:grid-cols-8 gap-px overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 rounded-[2vh] md:rounded-[1vw] shadow-[0_4px_30px_rgba(0,0,0,0.4)] text-white font-medium text-[1.6vh] md:text-[1vw]"
        >
          {/* Name + Phone */}
          {[
            { label: 'Name', name: 'name', type: 'text', placeholder: 'Your Name' },
            { label: 'Phone', name: 'phone', type: 'tel', placeholder: 'Phone Number' },
          ].map(({ label, name, type, placeholder }) => (
            <div key={name} className="bg-black/60 px-[2vh] py-[2vh] md:px-[2vw] md:py-[1vw] flex flex-col gap-[1vh] md:gap-[1vw]">
              <label className="text-white/80 tracking-wide text-[1.4vh] md:text-[1vw]">
                {label}
              </label>
              <input
                type={type}
                name={name}
                // value={formData[name] || ''}
                onChange={handleChange}
                placeholder={placeholder}
                className="bg-transparent border-b border-white/30 focus:border-[#c1a47a] placeholder:text-white/40 focus:outline-none transition-all text-[1.5vh] md:text-[1vw]"
              />
            </div>
          ))}

          {/* Arrival + Departure */}
          {[
            { label: 'Arrival', name: 'arrival' },
            { label: 'Departure', name: 'departure' },
          ].map(({ label, name }) => (
            <div key={name} className="bg-black/60 px-[2vh] py-[2vh] md:px-[2vw] md:py-[1vw] flex flex-col gap-[1vh] md:gap-[1vw]">
              <label className="text-white/80 tracking-wide text-[1.4vh] md:text-[1vw]">
                {label}
              </label>
              <div className="flex items-center border-b border-white/30">
                <input
                  type="date"
                  name={name}
                  // value={formData[name]}
                  onChange={handleChange}
                  className="bg-transparent w-full text-white placeholder:text-white/40 focus:outline-none text-[1.5vh] md:text-[1vw]"
                />
                <CalendarDays className="ml-2 w-[2vh] h-[2vh] md:w-[1.2vw] md:h-[1.2vw] text-white/60" />
              </div>
            </div>
          ))}

          {/* Rooms, Adults, Children */}
          {[
            { label: 'Rooms', name: 'rooms', options: [1, 2, 3, 4] },
            { label: 'Adults', name: 'adults', options: [1, 2, 3, 4] },
            { label: 'Children', name: 'children', options: [0, 1, 2, 3] },
          ].map(({ label, name, options }) => (
            <div key={name} className="bg-black/60 px-[2vh] py-[2vh] md:px-[2vw] md:py-[1vw] flex flex-col gap-[1vh] md:gap-[1vw]">
              <label className="text-white/80 tracking-wide text-[1.4vh] md:text-[1vw]">
                {label}
              </label>
              <select
                name={name}
                // value={formData[name]}
                onChange={handleChange}
                className="bg-transparent border-b border-white/30 text-white focus:outline-none appearance-none text-[1.5vh] md:text-[1vw]"
              >
                {options.map((opt) => (
                  <option key={opt} value={opt} className="text-black">
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          ))}

          {/* Submit Button */}
          <div className="bg-[#c1a47a] px-[2vh] py-[2vh] md:px-[2vw] md:py-[1vw] flex items-end justify-center text-black font-bold uppercase tracking-wider text-[1.4vh] md:text-[1vw] hover:bg-[#d9b98c] transition-all">
            <button type="submit" className="w-full h-full">
              Enquire Now
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default HeroSection;
