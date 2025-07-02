import React from "react";
import Image from "next/image"; // Import Next.js Image component for optimization
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const items = [
  {
    title: "Mud House Stay",
    image: "/Images/AllPhotos/mud-house.webp",
    description:
      "Experience traditional living in eco-friendly mud houses, blending comfort with nature's embrace.",
    size: "col-span-2 row-span-2",
    delay: "0s", // Animation delay
  },
  {
    title: "Wellness Retreat & Yoga",
    image:
      "https://plus.unsplash.com/premium_photo-1683141079053-917e36624b28?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fGluZGlhJTIweW9nYXxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Rejuvenate your mind and body with daily yoga sessions and personalized Ayurvedic therapies.",
    size: "col-span-2 row-span-3",
    delay: "0.1s",
  },
  {
    title: "Ayush Dining",
    image: "/Images/AllPhotos/ayushDining.webp",
    description:
      "Savor wholesome, healthy meals crafted with Ayurvedic principles, nourishing your well-being.",
    size: "col-span-2 row-span-4",
    delay: "0.2s",
  },
  {
    title: "Trekking & Jungle Safari",
    image: "/Images/AllPhotos/about-us-1.jpg",
    description:
      "Explore the pristine nature trails and embark on thrilling jungle safaris (available upon request).",
    size: "col-span-2 row-span-2",
    delay: "0.3s",
  },
  {
    title: "Indoor & Outdoor Games",
    image: "/Images/AllPhotos/indoorGame1.webp",
    description: "Fun activities for all ages — indoor and outdoor!", // Added description
    size: "col-span-1 row-span-2",
    delay: "0.4s",
  },
  {
    title: "Garden Dining",
    image: "/Images/AllPhotos/outdoorDining.webp",
    description: "Enjoy meals under the open sky, surrounded by lush greenery.", // Added description
    size: "col-span-1 row-span-2",
    delay: "0.5s",
  },
];

const FacilitiesGrid = () => {
  return (
    <section
      className="p-4 md:p-8 bg-gradient-to-br from-green-50 to-white overflow-hidden"
      id="facilities"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-gray-800 tracking-tight leading-tight">
          Discover the Unique Experiences at <br className="md:hidden" />
          <span className="text-green-700">Palm Bliss</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-4 auto-rows-fr">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`
                relative rounded-2xl overflow-hidden shadow-xl
                flex items-end p-3 md:p-6
                transition-all duration-500 ease-in-out
                transform hover:scale-[1.02] hover:shadow-2xl
                group
                ${item.size}
                animate-fade-in
              `}
              style={{
                animationDelay: item.delay,
              }}
            >
              {/* Using Next.js Image component for optimized images */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
                className="absolute inset-0 z-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              {/* Overlay for text readability */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

              <div className="relative z-20 text-white md:p-2 ">
                <h3 className="text-xl md:text-2xl font-sans font-bold mb-2 drop-shadow-md">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-200 leading-relaxed drop-shadow-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
          <div
            className={`
                relative rounded-2xl overflow-hidden 
                flex items-end p-3 md:p-6
                border border-gray-500
                transition-all duration-500 ease-in-out
                
                group
               col-span-2 row-span-1
                animate-fade-in
              `}
          >
        
            <div className="relative z-20 text-black md:p-1 ">
              <Link href="/contact" className="text-xl flex items-center gap-2 md:text-2xl font-sans font-bold mb-2 border rounded-sm my-2 px-4 border-yellow-700 py-2 hover:bg-yellow-700 hover:text-white transition-all duration-300">
                Book Now
                <ExternalLink />
              </Link>
              <p className="text-sm text-gray-800 leading-relaxed drop-shadow-sm">
                Get the best deals and offers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesGrid;
