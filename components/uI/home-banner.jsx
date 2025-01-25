import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCloud } from "react-icons/fa";

const CloudBanner = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const clouds = [
    { id: 1, x: -20, y: 20, scale: 1.2, opacity: 0.9 },
    { id: 2, x: 30, y: 50, scale: 0.8, opacity: 0.7 },
    { id: 3, x: -40, y: 80, scale: 1.5, opacity: 0.5 },
    { id: 4, x: 50, y: 30, scale: 1.1, opacity: 0.6 },
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-400 to-blue-600">
      {/* Background Clouds */}
      <div className="absolute inset-0 overflow-hidden">
        {clouds.map((cloud) => (
          <motion.div
            key={cloud.id}
            className="absolute"
            initial={{ x: cloud.x, y: cloud.y }}
            animate={{
              x: cloud.x + Math.sin(scrollY * 0.01) * 10,
              y: cloud.y + Math.cos(scrollY * 0.01) * 10,
            }}
            transition={{ type: "spring", stiffness: 10 }}
          >
            <FaCloud
              className="text-white"
              style={{
                fontSize: `${cloud.scale * 100}px`,
                opacity: cloud.opacity,
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <motion.div
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <motion.h1
            className="mb-6 text-4xl font-bold text-white md:text-6xl lg:text-7xl"
            variants={textVariants}
          >
            Cloud Hosting
          </motion.h1>
          <motion.p
            className="mb-8 text-lg text-white opacity-90 md:text-xl"
            variants={textVariants}
          >
            Transform your business with our innovative cloud technology
          </motion.p>
          <motion.div
            className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
            variants={textVariants}
          >
            <button className="transform rounded-full bg-white px-8 py-3 font-semibold text-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Get Started
            </button>
            <button className="transform rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition-all duration-300 hover:scale-105  hover:text-blue-600">
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div
        className="absolute bottom-0 h-32 w-full"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.1))",
        }}
      ></div>
    </div>
  );
};

export default CloudBanner;