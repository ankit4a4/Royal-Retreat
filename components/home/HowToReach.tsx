'use client';

import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Plane, Train, MapPin, Clock, Navigation } from 'lucide-react';

const HowToReach = () => {
  return (
    <section className="py-[8vh] bg-[#fdf9f4]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-[6vh]"
        >
          <h2 className="text-[6vw] md:text-[3vw] font-playfair font-semibold text-[#4B3F2F] mb-[2vh] leading-tight">
            How to <span className="text-[#C9A062]">Reach Us</span>
          </h2>
          <p className="text-[2.7vh] md:text-[1.3vw] text-[#5c5344] max-w-2xl mx-auto leading-relaxed">
            Your journey to paradise begins with convenient access from multiple transportation options
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Tabs defaultValue="airplane" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8 px-2 sm:px-0">
                <TabsTrigger value="airplane" className="flex items-center gap-2 text-[2.4vh] md:text-[1.3vw]">
                  <Plane className="h-4 w-4" />
                  By Airplane
                </TabsTrigger>
                <TabsTrigger value="train" className="flex items-center gap-2 text-[2.4vh] md:text-[1.3vw]">
                  <Train className="h-4 w-4" />
                  By Train
                </TabsTrigger>
              </TabsList>

              <TabsContent value="airplane">
                <Card className="bg-[#fffdf9] border border-[#eae4d7] shadow-md rounded-xl">
                  <CardContent className="pt-8 px-4 md:px-6">
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-[#C9A062]/20 p-3 rounded-full">
                          <Plane className="h-6 w-6 text-[#C9A062]" />
                        </div>
                        <div>
                          <h3 className="text-[2.6vh] md:text-[1.3vw] font-playfair font-semibold mb-2">
                            Paradise International Airport
                          </h3>
                          <p className="text-[#5c5344] text-[2.2vh] md:text-[1.15vw] mb-4 leading-relaxed">
                            The nearest major airport with direct flights from major cities worldwide
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-[2vh] md:text-[1.05vw] text-[#5c5344]">
                              <Navigation className="h-4 w-4 text-[#C9A062]" />
                              Distance: 25 km from resort
                            </div>
                            <div className="flex items-center gap-2 text-[2vh] md:text-[1.05vw] text-[#5c5344]">
                              <Clock className="h-4 w-4 text-[#C9A062]" />
                              Travel Time: 30 minutes by car
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#C9A062]/10 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-[2.2vh] md:text-[1.1vw] text-[#4B3F2F]">
                          Complimentary Airport Transfer
                        </h4>
                        <p className="text-[2vh] md:text-[1.05vw] text-[#5c5344]">
                          We provide luxury airport transfers for all our guests.
                          Please contact us 24 hours before your arrival to arrange pickup.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="train">
                <Card className="bg-[#fffdf9] border border-[#eae4d7] shadow-md rounded-xl">
                  <CardContent className="pt-8 px-4 md:px-6">
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-[#C9A062]/20 p-3 rounded-full">
                          <Train className="h-6 w-6 text-[#C9A062]" />
                        </div>
                        <div>
                          <h3 className="text-[2.6vh] md:text-[1.3vw] font-playfair font-semibold mb-2">
                            Palm bliss Railway Station
                          </h3>
                          <p className="text-[#5c5344] text-[2.2vh] md:text-[1.15vw] mb-4 leading-relaxed">
                            Modern railway station with connections to major cities and scenic routes
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-[2vh] md:text-[1.05vw] text-[#5c5344]">
                              <Navigation className="h-4 w-4 text-[#C9A062]" />
                              Distance: 15 km from resort
                            </div>
                            <div className="flex items-center gap-2 text-[2vh] md:text-[1.05vw] text-[#5c5344]">
                              <Clock className="h-4 w-4 text-[#C9A062]" />
                              Travel Time: 20 minutes by car
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#C9A062]/10 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-[2.2vh] md:text-[1.1vw] text-[#4B3F2F]">
                          Station Pickup Service
                        </h4>
                        <p className="text-[2vh] md:text-[1.05vw] text-[#5c5344]">
                          Our dedicated pickup service is available from the railway station.
                          Book your transfer when making your reservation.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="h-[50vh] lg:h-[500px]"
          >
            <Card className="h-full bg-[#fffdf9] border border-[#eae4d7] shadow-md rounded-xl">
              <CardContent className="p-0 h-full">
                <div className="h-full rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459418!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1635959471659!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Palm Bliss Resort Location"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Resort Address */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-[8vh] text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="h-5 w-5 text-[#C9A062]" />
            <span className="text-[2.6vh] md:text-[1.3vw] font-semibold text-[#4B3F2F]">Resort Address</span>
          </div>
          <p className="text-[#5c5344] text-[2.2vh] md:text-[1.15vw] max-w-md mx-auto leading-relaxed">
            Palm bliss, Luxury Resort District, Paradise Valley,
            Nestled in the heart of natural beauty
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToReach;
