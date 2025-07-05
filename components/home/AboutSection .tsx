"use client";

import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="bg-[#fbf7f0] md:py-[14vh] py-10 px-6 md:px-[10vw]">
      <div className=" mx-auto text-center space-y-[6vh]">
        <div>
          <h1 className="font-bold font-inter text-gray-600 text-lg"><span className="text-xl font-bold text-black">THE PALM 🌴 BLISS RESORT</span> adventure in jungle</h1>
          <h1 className="font-inter text-3xl font-bold mt-1 text-gray-900 capitalize">ATHARVA AYURVEDIC WELLNESS RETREAT</h1>
        </div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[6.3vw] md:text-[3vw] font-playfair font-bold text-[#3c2f23] leading-tight"
        >
          Experience the soul of shivalik ranges & Lesser HIMALAYAN <br />
          <span className="text-[#C9A062]">
            Ayurveda, Nature & Wellness in Harmony
          </span>
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[2vh] md:text-[1.2vw] text-[#5c5344] leading-relaxed mx-auto"
        >
          Nestled in the sacred foothills of the Himalayas, our retreat is more
          than a place — it’s an experience. Discover inner balance through the
          timeless wisdom of Ayurveda, pristine nature and soulful living.
          Whether you're seeking physical rejuvenation, mental clarity or
          spiritual awakening, every element here is aligned to support your
          transformation.
        </motion.p>

        {/* Quote */}
        {/* <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="border-l-[0.3vw] border-[#C9A062] bg-[#fff8ec] text-[#4a3b2a] p-6 md:p-8 rounded-md shadow-sm text-[2vh] md:text-[1.1vw] italic mx-auto"
        >
          “You don’t just stay here —{" "}
          <span className="text-[#C9A062] font-semibold not-italic">
            you return to yourself
          </span>
          . Every space is crafted to reconnect you with nature, with healing,
          and with peace.”
        </motion.blockquote> */}

 <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[2vh] md:text-[1.15vw] text-[#4a3b2a] leading-relaxed mx-auto"
        >
          Founder <strong>Ms. Shivani Agarwal</strong>, along with co-founder{" "}
          <strong>Mr. Path Garg</strong> and with strategic insights from{" "}
          <strong>Mr. Kamlesh Singh</strong>, leads Atharva Ayurvedic Wellness Retreat, which is built on the
          foundations of holistic healing, conscious design, and a deep
          reverence for ancient Ayurvedic wisdom. Our vision is to create a
          sacred space where guests not only unwind but also awaken to a higher
          state of being.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
