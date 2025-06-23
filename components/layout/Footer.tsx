'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Crown, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <Link href="/" className="flex items-center space-x-2">
              <Crown className="h-8 w-8 text-royal-gold" />
              <span className="text-2xl font-playfair font-bold">
                Royal Retreat
              </span>
            </Link>
            <p className="text-gray-400">
              Experience luxury and tranquility in our world-class resort, where every moment is crafted to perfection.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-playfair font-semibold text-royal-gold">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { name: 'About Us', href: '/' },
                { name: 'Rooms & Suites', href: '/' },
                { name: 'Wellness Center', href: '/' },
                { name: 'Yoga Sessions', href: '/' },
                { name: 'Contact', href: '/' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-royal-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-playfair font-semibold text-royal-gold">
              Contact Info
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-royal-gold" />
                <span className="text-gray-400">
                  Royal Hills, Luxury Resort District, Paradise Valley
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-royal-gold" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-royal-gold" />
                <span className="text-gray-400">info@royalretreat.com</span>
              </div>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-playfair font-semibold text-royal-gold">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              {[
                { icon: Instagram, href: '#' },
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-royal-gold transition-colors duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              Stay connected for exclusive offers and updates from Royal Retreat Resort.
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2024 Royal Retreat Resort. All rights reserved. Designed with luxury and elegance in mind.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;