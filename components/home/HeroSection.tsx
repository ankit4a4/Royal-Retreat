"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import BlurText from "../ui/BlurText";
import RotatingText from "../ui/RotatingText";

type HeroSectionProps = {
  welcomeHeading: string;
  subtitle?: string;
};

const HeroSection = ({
  welcomeHeading,
  subtitle = "The Palm Bliss",
}: HeroSectionProps) => {
  const [showMobileForm, setShowMobileForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    arrival: "",
    departure: "",
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
    console.log("Form submitted:", formData);
  };
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
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
        <source src="/Images/Home/herosection.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Heading & Subtitle */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-[8vh] md:text-[8vw] font-bold drop-shadow-lg"
        >
          {welcomeHeading}
        </motion.h1>

        {/* <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-white text-[1.2vh] md:text-[1vw] font-medium drop-shadow-md"
        >
          To
        </motion.p> */}
        <div className="flex justify-center items-center">
          <BlurText
            text="The Palm Bliss"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-3xl mb-2  text-white font-playfair tracking-widest"
          />
        </div>
        <RotatingText
          texts={[
            "Atharva Ayurvedic",
            "Boutique Wellness Retreat",
            "Where Healing Begins Within",
          ]}
          mainClassName="px-2 sm:px-2 md:px-3 bg-yellow-600/20 text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.035}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 60, stiffness: 400 }}
          rotationInterval={3000}
        />
      </div>

      {/* Mobile Toggle */}
      <div className="md:hidden z-10 px-[4vh] pb-[4vh]">
        <button
          onClick={() => setShowMobileForm(!showMobileForm)}
          className="w-full bg-[#c1a47a] text-black font-bold text-[2.2vh] py-[2.2vh] rounded-md tracking-wide"
        >
          {showMobileForm ? "Close Form" : "Enquire Now"}
        </button>
      </div>

      {/* Enquiry Form */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`z-10 w-full max-w-[94vw] mx-auto px-[2vh] md:px-[2vw] pb-[4vh] md:pb-[4vh] ${
          showMobileForm ? "block" : "hidden"
        } md:block`}
      >
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 md:grid-cols-8 gap-px overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 rounded-[2vh] md:rounded-[1vw] shadow-[0_4px_30px_rgba(0,0,0,0.4)] text-white font-medium text-[1.6vh] md:text-[1vw]"
        >
          {/* Name & Phone */}
          {[
            {
              label: "Name",
              name: "name",
              type: "text",
              placeholder: "Your Name",
            },
            {
              label: "Phone",
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
            },
          ].map(({ label, name, type, placeholder }) => (
            <div
              key={name}
              className="bg-black/60 px-[2vh] py-[2vh] md:px-[2vw] md:py-[1vw] flex flex-col gap-[1vh] md:gap-[1vw]"
            >
              <label className="text-white/80 text-[1.4vh] md:text-[1vw]">
                {label}
              </label>
              <input
                type={type}
                name={name}
                onChange={handleChange}
                placeholder={placeholder}
                className="bg-transparent border-b border-white/30 focus:border-[#c1a47a] placeholder:text-white/40 focus:outline-none transition-all text-[1.5vh] md:text-[1vw]"
              />
            </div>
          ))}

          {/* Arrival & Departure */}
          {[
            { label: "Arrival", name: "arrival" },
            { label: "Departure", name: "departure" },
          ].map(({ label, name }) => (
            <div
              key={name}
              className="bg-black/60 px-[2vh] py-[2vh] md:px-[2vw] md:py-[1vw] flex flex-col gap-[1vh] md:gap-[1vw]"
            >
              <label className="text-white/80 text-[1.4vh] md:text-[1vw]">
                {label}
              </label>
              <div className="flex items-center border-b border-white/30">
                <input
                  type="date"
                  name={name}
                  onChange={handleChange}
                  className="bg-transparent w-full text-white placeholder:text-white/40 focus:outline-none text-[1.5vh] md:text-[1vw]"
                />
                <CalendarDays className="ml-2 w-[2vh] h-[2vh] md:w-[1.2vw] md:h-[1.2vw] text-white/60" />
              </div>
            </div>
          ))}

          {/* Dropdowns */}
          {[
            { label: "Rooms", name: "rooms", options: [1, 2, 3, 4] },
            { label: "Adults", name: "adults", options: [1, 2, 3, 4] },
            { label: "Children", name: "children", options: [0, 1, 2, 3] },
          ].map(({ label, name, options }) => (
            <div
              key={name}
              className="bg-black/60 px-[2vh] py-[2vh] md:px-[2vw] md:py-[1vw] flex flex-col gap-[1vh] md:gap-[1vw]"
            >
              <label className="text-white/80 text-[1.4vh] md:text-[1vw]">
                {label}
              </label>
              <select
                name={name}
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
