'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { Menu, X, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  const navItemsLeft = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/' },
    { name: 'Rooms', href: '/' },
  ];

  const navItemsRight = [
    { name: 'Wellness', href: '/' },
    { name: 'Yoga', href: '/' },
    { name: 'Natural Pool', href: '/' },
    { name: 'Contact', href: '/' },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white backdrop-blur-sm shadow-lg'
        : 'bg-transparent'
        }`}
    >
      <div className="mx-auto px-4 md:px-[4vw] md:py-[1.5vw] py-3 ">
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-between relative">
          {/* Left Nav */}
          <div className="flex items-center space-x-6 md:space-x-[2vw]">
            {navItemsLeft.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${isScrolled ? 'text-black' : 'text-white'} font-medium hover:text-royal-gold transition-colors text-[1.3vw]`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Logo Center */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="flex items-center space-x-[1vw]">
              <Crown className="h-10 md:h-[5vh] md:w-[5vh] text-royal-gold" />
              <span
                className={`font-playfair font-extrabold tracking-wide ${isScrolled ? 'text-black' : 'text-white'} text-[2vh] md:text-[1.7vw]`}
              >
                Palm Bliss
              </span>
            </Link>
          </motion.div>

          {/* Right Nav */}
          <div className="flex items-center space-x-6 md:space-x-[2vw]">
            {navItemsRight.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${isScrolled ? 'text-black' : 'text-white'} font-medium hover:text-royal-gold transition-colors text-[1.3vw]`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Nav Header */}
        <div className="md:hidden flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1 ">
            <Crown className="h-8 text-royal-gold" />
            <span
              className={`font-playfair font-extrabold tracking-wide ${isScrolled ? 'text-black' : 'text-white'} text-[2vh]`}
            >
              Palm Bliss
            </span>
          </Link>

          <Button
            variant="ghost"
            size="icon"
            className={`${isScrolled ? 'text-black' : 'text-white'} hover:text-royal-gold`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Overlay */}
              <motion.div
                key="overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90]"
              />

              {/* Slide-in Menu */}
              <motion.div
                key="menu"
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="fixed top-0 left-0 z-[100] min-h-screen w-[80vw] max-w-sm bg-white shadow-xl p-6 flex flex-col gap-4"
              >
                <div className="flex justify-between items-center mb-4">
                  <Link href="/" className="flex items-center gap-1 ">
                    <Crown className="h-8 text-royal-gold" />
                    <span className="font-playfair font-extrabold tracking-wide text-black text-[2vh]">
                      Palm Bliss
                    </span>
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-black hover:text-royal-gold transition"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <div className="flex flex-col gap-2">
                  {[...navItemsLeft, ...navItemsRight].map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="py-2 px-3 rounded-md text-black text-[2.2vh] font-medium hover:bg-royal-gold/10 hover:text-royal-gold transition duration-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
