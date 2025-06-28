import React from 'react'
import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/card'
import { Button } from '../ui/button'

const Packages = () => {
  return (
    <>
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              Wellness <span className="text-royal-gold">Packages</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Comprehensive wellness packages for the ultimate rejuvenation experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Half Day Retreat',
                duration: '4 hours',
                price: '₹37,350',
                includes: ['60-min massage', 'Facial treatment', 'Thermal pool access', 'Healthy lunch']
              },
              {
                title: 'Full Day Wellness',
                duration: '8 hours',
                price: '₹62,250',
                includes: ['90-min signature massage', 'Body wrap', 'Facial', 'Meditation session', 'Spa lunch', 'All facilities']
              },
              {
                title: 'Weekend Escape',
                duration: '2 days',
                price: '₹99,600',
                includes: ['Multiple treatments', 'Yoga classes', 'Meditation', 'Healthy meals', 'Accommodation upgrade']
              }
            ]
              .map((package_item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="group"
                >
                  <Card className="h-full bg-gray-900 border-gray-800 hover:shadow-2xl transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      <h3 className="text-2xl font-playfair font-bold text-white mb-2">
                        {package_item.title}
                      </h3>
                      <div className="text-3xl font-bold text-royal-gold mb-2">
                        {package_item.price}
                      </div>
                      <div className="text-gray-400 mb-6">
                        {package_item.duration}
                      </div>
                      <ul className="text-left space-y-2 mb-8">
                        {package_item.includes.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-royal-gold rounded-full"></div>
                            <span className="text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full bg-royal-gold hover:bg-royal-gold-dark text-black font-semibold">
                        Book Package
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Packages
