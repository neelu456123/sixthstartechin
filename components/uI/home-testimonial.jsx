import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "MANOHAR",
    role: "IT Head - Vijay TV",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    text: "This platform has revolutionized how we approach web design. The 3D elements and animations are simply stunning!"
  },
  {
    id: 2,
    name: "BHUVANSEWARI",
    role: "Vice President / Makkal TV",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    text: "The first impression of the sixth star is great. They provide the best cloud hosting service at a reasonable price. And helped my servers run 24/7, and the technical team is supportive and skilled to handle critical issues."
  },
  {
    id: 3,
    name: "SETHUMURUGAN",
    role: "IT Head / Hinduja Leyland",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    text: "The RAM space and connectivity are top-notch. A reputation and reliable customer service, making cloud hosting with Sixth Star a breeze. Thank you for your great service!"
  }
];



const Banner3D = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900">
      {/* 3D Animated Elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Floating 3D Shapes */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="absolute -top-20 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-2xl"
            style={{ transform: "rotateX(45deg) rotateY(-15deg)", transformStyle: "preserve-3d" }}
          />
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute top-40 right-1/4 w-24 h-24 bg-gradient-to-r from-pink-400 to-purple-300 rounded-full"
            style={{ transform: "rotateX(60deg) rotateY(45deg)", transformStyle: "preserve-3d" }}
          />
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4 }}
            className="absolute bottom-20 left-1/3 w-40 h-40 bg-gradient-to-r from-yellow-400 to-orange-300 rounded-3xl"
            style={{ transform: "rotateX(30deg) rotateY(60deg)", transformStyle: "preserve-3d" }}
          />

          {/* Testimonial Slider */}
          <div className="relative z-10 text-center mt-20">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-12"
            >
              What People Say
            </motion.h1>

            <div className="relative max-w-4xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12"
                >
                  <FaQuoteLeft className="text-4xl text-cyan-400 mb-6 mx-auto" />
                  <p className="text-xl md:text-2xl text-gray-200 mb-8">
                    {testimonials[currentIndex].text}
                  </p>
                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="text-left">
                      <h3 className="text-xl font-semibold text-white">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-cyan-400">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white transition-all"
              >
                <FaChevronLeft className="text-xl" />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white/20 hover:bg-white/30 rounded-full p-3 text-white transition-all"
              >
                <FaChevronRight className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')] bg-cover bg-center animate-pulse"></div>
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/50 to-bg-sky-900"></div>
    </div>
  );
};

export default Banner3D;
