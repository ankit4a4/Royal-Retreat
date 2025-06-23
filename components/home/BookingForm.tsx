'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Users, Phone, User } from 'lucide-react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    fullName: '',
    phoneNumber: '',
    rooms: '1',
    adults: '2',
    arrivalType: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking form submitted:', formData);
    // Handle form submission here
  };

  return (
    <Card className="bg-black/80 backdrop-blur-sm border-royal-gold/30 text-white">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-playfair text-royal-gold">
          Reserve Your Royal Experience
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Check-in Date */}
            <div className="space-y-2">
              <Label htmlFor="checkIn" className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-royal-gold" />
                Check-in Date
              </Label>
              <Input
                id="checkIn"
                type="date"
                value={formData.checkIn}
                onChange={(e) => handleInputChange('checkIn', e.target.value)}
                className="bg-white/10 border-royal-gold/30 text-white"
                required
              />
            </div>

            {/* Check-out Date */}
            <div className="space-y-2">
              <Label htmlFor="checkOut" className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-royal-gold" />
                Check-out Date
              </Label>
              <Input
                id="checkOut"
                type="date"
                value={formData.checkOut}
                onChange={(e) => handleInputChange('checkOut', e.target.value)}
                className="bg-white/10 border-royal-gold/30 text-white"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="fullName" className="flex items-center gap-2">
                <User className="h-4 w-4 text-royal-gold" />
                Full Name
              </Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className="bg-white/10 border-royal-gold/30 text-white placeholder:text-gray-400"
                required
              />
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <Label htmlFor="phoneNumber" className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-royal-gold" />
                Phone Number
              </Label>
              <Input
                id="phoneNumber"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                className="bg-white/10 border-royal-gold/30 text-white placeholder:text-gray-400"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Number of Rooms */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Users className="h-4 w-4 text-royal-gold" />
                Rooms
              </Label>
              <Select value={formData.rooms} onValueChange={(value) => handleInputChange('rooms', value)}>
                <SelectTrigger className="bg-white/10 border-royal-gold/30 text-white">
                  <SelectValue placeholder="Select rooms" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} Room{num > 1 ? 's' : ''}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Number of Adults */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Users className="h-4 w-4 text-royal-gold" />
                Adults
              </Label>
              <Select value={formData.adults} onValueChange={(value) => handleInputChange('adults', value)}>
                <SelectTrigger className="bg-white/10 border-royal-gold/30 text-white">
                  <SelectValue placeholder="Select adults" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num} Adult{num > 1 ? 's' : ''}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Arrival Type */}
            <div className="space-y-2">
              <Label>Arrival Type</Label>
              <Select value={formData.arrivalType} onValueChange={(value) => handleInputChange('arrivalType', value)}>
                <SelectTrigger className="bg-white/10 border-royal-gold/30 text-white">
                  <SelectValue placeholder="Select arrival type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="flight">By Flight</SelectItem>
                  <SelectItem value="train">By Train</SelectItem>
                  <SelectItem value="car">By Car</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex justify-center"
          >
            <Button
              type="submit"
              size="lg"
              className="bg-royal-gold hover:bg-royal-gold-dark text-black font-semibold px-12 py-3 text-lg"
            >
              Reserve Now
            </Button>
          </motion.div>
        </form>
      </CardContent>
    </Card>
  );
};

export default BookingForm;