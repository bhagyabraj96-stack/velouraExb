"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Heading } from "@/components";
import { useState, useEffect, useRef } from "react";
import { 
  exhi0, 
  exhi1, 
  exhi2, 
  exhi3, 
  exhi4, 
  exhi5,
  exhi6,
  exhi7,
  exhi8,
  exhi9,
  exhi10,
  exhi11,
  exhi12,
  exhi13,
  exhi14,
  exhi15,
  exhi16,
  exhi17,
  exhi18,
  exhi19,
  exhi20,
  exhi21,
  exhi22,
  exhi23,
  exhi30,
  exhi31,
  exhi32,
  exhi33,
  exhi34,
  exhi35,
  exhi36,
  exhi37
} from "@/public";


// Counter component for animated stats
const AnimatedCounter = ({ target, isVisible }: { target: string; isVisible: boolean }) => {
  const [count, setCount] = useState(0);
  
  // Extract numeric value from string like "500+" or "10+ Years"
  const getNumericValue = (str: string) => {
    const match = str.match(/\d+/);
    return match ? parseInt(match[0]) : 0;
  };
  
  const getSuffix = (str: string) => {
    const match = str.match(/\d+(.+)/);
    return match ? match[1] : '';
  };
  
  const numericTarget = getNumericValue(target);
  const suffix = getSuffix(target);
  
  useEffect(() => {
    if (!isVisible || numericTarget === 0) return;
    
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = numericTarget / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericTarget) {
        setCount(numericTarget);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [isVisible, numericTarget]);
  
  return (
    <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
      {count}{suffix}
    </span>
  );
};
const services = [
  {
    id: 1,
    title: "Exhibition Stand Design & Construction",
    description: "Transforming visions into stunning physical spaces that captivate and engage",
    image: exhi1,
    icon: "🏗️",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Event Design & Management",
    description: "Creating unforgettable experiences with meticulous planning and flawless execution",
    image: exhi0,
    icon: "🎯",
    color: "from-purple-500 to-pink-500"
  },
  
  {
    id: 3,
    title: "Interior Design & Fit Out",
    description: "Crafting environments that inspire, function, and reflect your brand essence",
    image: exhi2,
    icon: "🎨",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 4,
    title: "Mall Kiosks",
    description: "Compact, impactful retail solutions that maximize visibility and customer interaction",
    image: exhi3,
    icon: "🛍️",
    color: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    title: "Show Production & AV Management",
    description: "Comprehensive audiovisual solutions that bring your events to life",
    image: exhi4,
    icon: "🎬",
    color: "from-indigo-500 to-purple-500"
  }
];

const additionalServices = [
  {
    id: 6,
    title: "Custom Exhibition Solutions",
    description: "Tailored approaches for diverse industries with proven expertise",
    image: exhi5,
    stats: "500+ Projects"
  },
  {
    id: 7,
    title: "Beyond Events",
    description: "End-to-end event management from concept to completion",
    image: exhi6,
    stats: "10+ Years"
  },
  {
    id: 8,
    title: "Interior Concepts & Execution",
    description: "Professional team delivering exceptional customized solutions",
    image: exhi7,
    stats: "100% Satisfaction"
  }
];

export default function ServicesPageComponent() {
  const [visibleServices, setVisibleServices] = useState<Set<number>>(new Set());
  const serviceRefs = useRef<(HTMLElement | null)[]>([]);

  const phares1 = ["What We", "Offer"];
  const phares2 = [
    "Comprehensive solutions for exhibitions, events, and interior design projects.",
    "Delivering excellence across multiple service categories."
  ];

  useEffect(() => {
    const observers = serviceRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleServices(prev => new Set(prev).add(index));
            }
          });
        },
        { threshold: 0.3 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <div className="w-full padding-x py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header Section */}
      <div className="w-full flex flex-col gap-10 mb-20">
        <div className="w-full flex items-center flex-col gap-3">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              type: "spring",
            }}
            viewport={{ once: true }}
            className="w-fit py-2 px-3 rounded-full border border-[#2222221A] text-black dark:text-white font-dmSans text-sm font-medium leading-tight tracking-[-0.02188rem]"
          >
            Our Expertise
          </motion.div>
        </div>
        <div>
          <Heading
            classname="heading font-bold text-center"
            title={phares1}
          />
        </div>
        <div>
          <Heading
            classname="paragraph font-normal text-center"
            title={phares2}
          />
        </div>
      </div>

      {/* Main Services - Unique Card Design */}
      <div className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 100, rotateY: 180 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              className="group"
              style={{ perspective: "1000px" }}
            >
              <div className="relative h-80">
                {/* Back of card - Image */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                
                {/* Front of card - Content */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/95 to-gray-100/95 dark:from-gray-800/95 dark:to-gray-900/95 rounded-2xl shadow-xl p-6 flex flex-col justify-between"
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.6 }}
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div>
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl mb-4 shadow-lg`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {service.title}
                    </h3>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Additional Services - Timeline Style */}
      <div className="mb-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Extended Capabilities
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Beyond our core services, we offer specialized solutions that set us apart
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
          
          <div className="relative">
                    {/* Desktop Timeline Line */}
                    <div className="hidden mdd:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                    
                    {/* Mobile View */}
                    <div className="mdd:hidden space-y-12">
                      {additionalServices.map((service, index) => (
                        <div key={service.id} className="flex flex-col">
                          {/* Mobile Timeline Section */}
                          <div className="flex items-center gap-4 mb-4">
                            {/* Mobile Timeline Line */}
                            <div className="w-1 h-16 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                            {/* Mobile Number */}
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg"
                            >
                              {service.id}
                            </motion.div>
                          </div>
          
                          {/* Content and Image Container */}
                          <div className="w-full">
                            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 mb-6">
                              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                {service.title}
                              </h3>
                              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                                {service.description}
                              </p>
                              <div className="flex items-center gap-4">
                                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                  {service.stats}
                                </span>
                              </div>
                            </div>
                          </div>
          
                          {/* Image */}
                          <div className="w-full">
                            <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl">
                              <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
          
                    {/* Desktop View */}
                    <div className="hidden mdd:block space-y-12">
                      {additionalServices.map((service, index) => (
                        <motion.div
                          key={service.id}
                          ref={(el) => { serviceRefs.current[index] = el; }}
                          initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.8, 
                            delay: index * 0.3,
                            type: "spring"
                          }}
                          viewport={{ once: true }}
                          className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                        >
                          {/* Content */}
                          <div className="w-5/12">
                            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                {service.title}
                              </h3>
                              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                                {service.description}
                              </p>
                              <div className="flex items-center gap-4">
                                <AnimatedCounter 
                                  target={service.stats} 
                                  isVisible={visibleServices.has(index)}  
                                />
                              </div>
                            </div>
                          </div>
          
                          {/* Center Dot */}
                          <div className="w-2/12 flex justify-center">
                            <motion.div
                              whileHover={{ scale: 1.2 }}
                              className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
                            >
                              {service.id}
                            </motion.div>
                          </div>
          
                          {/* Image */}
                          <div className="w-5/12">
                            <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                              <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
        </div>
      </div>

      {/* Interactive CTA Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-1"
      >
        <div className="bg-gray-900 dark:bg-gray-800 rounded-3xl p-12">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-6"
            >
              Ready to Transform Your Vision?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 mb-8"
            >
              Let's create something extraordinary together
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'contact' } }));
                }}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
              >
                Chat With Us
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('navigate', { detail: { page: 'portfolio' } }));
                }}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-200"
              >
                View Portfolio
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
