import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const contentVariants = {
  enter: { opacity: 0, x: 50 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 }
};

const DisplayComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef();

const contentData = [
  {
    header: 'Our Statement',
    text: 'To empower businesses and individuals with cutting-edge technology solutions that drive progress, foster innovation, and redefine the boundaries of what’s possible.',
  },
  {
    header: 'Our Vision',
    text: 'At LogaXP, our vision is to cultivate a legacy of innovation, harnessing the collective expertise in technology and human resources to architect a tomorrow that’s smarter, safer, and more connected, ensuring that every client engagement is an avenue for groundbreaking advancements and sustainable growth.',
  },
  {
    header: 'We Stand For',
    text: 'We stand for integrity, excellence, and the relentless pursuit of innovation. We are committed to upholding the highest standards of service, fostering a culture of collaboration, and delivering transformative solutions that empower our clients and the wider community.',
  },
];
const handleAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contentData.length);
    }, 20000);
  };

  useEffect(() => {
    handleAutoPlay();
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    clearInterval(intervalRef.current);
    handleAutoPlay();
  };

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex - 1 < 0 ? contentData.length - 1 : currentIndex - 1);
    clearInterval(intervalRef.current);
    handleAutoPlay();
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % contentData.length);
    clearInterval(intervalRef.current);
    handleAutoPlay();
  };


  return (
    <div className="flex items-center justify-center max-w-6xl mx-auto min-h-screen mb-20 mt-20 bg-slate-200 relative">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          variants={contentVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1 }}
          className="max-w-2xl p-10 rounded-xl bg-white bg-opacity-90 shadow-2xl flex flex-col items-center"
        >
          <span className="text-6xl text-gray-300">“</span>
          <p className="text-center text-xl font-medium text-gray-800 px-8">
            {contentData[currentIndex].text}
          </p>
          <span className="text-6xl text-gray-300">”</span>
          <p className="text-sm font-bold text-gray-800 mt-4">
            — {contentData[currentIndex].header}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-10 left-0 right-0 p-4 flex justify-center">
        {contentData.map((_, index) => (
          <button
            key={index}
            className={`h-4 w-4 rounded-full mx-2 cursor-pointer ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-400'}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
        onClick={handlePrevClick}
        aria-label="Previous slide"
      >
        <FontAwesomeIcon icon={faChevronLeft} size="lg" />
      </button>

      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
        onClick={handleNextClick}
        aria-label="Next slide"
      >
        <FontAwesomeIcon icon={faChevronRight} size="lg" />
      </button>
    </div>
  );
};

export default DisplayComponent;