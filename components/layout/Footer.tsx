"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

import {
  Crown,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-[10vh]">
      <div className="w-[90vw] max-w-[120vw] mx-auto px-[2vw]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[4vw]">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 2 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-[2vh]"
          >
            <Link href="/" className="flex items-center space-x-[1vw]">
              <Image
                src={logo}
                alt="Logo"
                className=" object-contain h-[100px] "
              />
            </Link>
            <p className="text-gray-400 text-[3.5vw] md:text-[1.1vw] leading-relaxed">
              Experience luxury and tranquility in our world-class resort, where
              every moment is crafted to perfection.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 2 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-[2vh]"
          >
            <h3 className="text-[4.5vw] md:text-[1.5vw] font-playfair font-semibold text-royal-gold">
              Quick Links
            </h3>
            <ul className="space-y-[1vh]">
              {[
                { name: "About Us", href: "/about" },
                { name: "Rooms & Suites", href: "/rooms" },
                { name: "Wellness Center", href: "/" },
                { name: "Yoga Sessions", href: "/" },
                { name: "Contact", href: "/" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-royal-gold transition-colors duration-300 text-[3.5vw] md:text-[1.1vw]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 2 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-[2vh]"
          >
            <h3 className="text-[4.5vw] md:text-[1.5vw] font-playfair font-semibold text-royal-gold">
              Contact Info
            </h3>
            <div className="space-y-[1.5vh]">
              <div className="flex items-center space-x-[1vw]">
                <MapPin className="h-[4vw] w-[4vw] md:h-[1.2vw] md:w-[1.2vw] text-royal-gold" />
                <span className="text-gray-400 text-[3.5vw] md:text-[1.1vw]">
                  Khasra No 20, Siron, Road Village Mauja, Chauki, Thano,
                  Uttarakhand 248143
                </span>
              </div>
              <div className="flex items-center space-x-[1vw]">
                <Phone className="h-[4vw] w-[4vw] md:h-[1.2vw] md:w-[1.2vw] text-royal-gold" />
                <span className="text-gray-400 text-[3.5vw] md:text-[1.1vw]">
                  +91 906 888 5323
                </span>
              </div>
              <div className="flex items-center space-x-[1vw]">
                <Mail className="h-[4vw] w-[4vw] md:h-[1.2vw] md:w-[1.2vw] text-royal-gold" />
                <span className="text-gray-400 text-[3.5vw] md:text-[1.1vw]">
                  thepalmblissresort@gmail.com
                </span>
              </div>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 2 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-[2vh]"
          >
            <h3 className="text-[4.5vw] md:text-[1.5vw] font-playfair font-semibold text-royal-gold">
              Follow Us
            </h3>
            <div className="flex space-x-[2vw]">
              {[
                { icon: Instagram, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-[10vw] h-[10vw] md:w-[3vw] md:h-[3vw] bg-gray-800 rounded-full flex items-center justify-center hover:bg-royal-gold transition-colors duration-300"
                >
                  <social.icon className="h-[4vw] w-[4vw] md:h-[1.3vw] md:w-[1.3vw]" />
                </Link>
              ))}
            </div>
            <p className="text-gray-400 text-[3vw] md:text-[1vw]">
              Stay connected for exclusive offers and updates from Palm Bliss
              Resort.
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="border-t border-gray-800 mt-[6vh] pt-[3vh] text-center"
        >
          <p className="text-white font-[600] text-[3.5vw] md:text-[1vw] pb-5 md:pb-[1vw]">
            © 2025 Palm Bliss Resort. All rights reserved. Powered by{" "}
            <span
              style={{
                color: "#DD2C2B",
              }}
            >
              Rank
            </span>
            mantra
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
export default Footer;
