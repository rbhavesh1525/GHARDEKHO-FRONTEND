import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import add1 from "../assets/Images/add1.png";
import add2 from "../assets/Images/add2.png";
import add3 from "../assets/Images/add3.png";


export default function LandingPageAdd() {
  const ads = [
    {
      img: add1, 
      link: "https://google.com",
    },
    {
      img: add2,
      link: "https://facebook.com",
    },
    {
      img: add3,
      link: "https://twitter.com",
    },
  ];

  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  // Auto change every 3 seconds
  const startRotation = () => {
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % ads.length);
    }, 3000);
  };

  // Start timer on mount
  useEffect(() => {
    startRotation();
    return () => clearInterval(timerRef.current);
  }, []);

  // Stop rotation on hover
  const stopRotation = () => clearInterval(timerRef.current);

  return (
    <div
      className="rounded-3xl overflow-hidden shadow-lg border border-gray-200 h-[220px] w-full relative cursor-pointer"
      onMouseEnter={stopRotation}
      onMouseLeave={startRotation}
    >
      <AnimatePresence mode="wait">
        <motion.a
          key={index}
          href={ads[index].link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.4 }}
        >
          <img
            src={ads[index].img}
            alt="Advertisement"
            className="w-full h-full object-cover"
          />
        </motion.a>
      </AnimatePresence>
    </div>
  );
}
