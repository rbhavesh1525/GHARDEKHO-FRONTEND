import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ImageGallery({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const displayImages = images?.length > 0 
    ? images 
    : ["https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&q=80"];

  const handlePrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? displayImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === displayImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-4 h-[500px]">
        {/* Main Image */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="col-span-4 md:col-span-3 h-full rounded-2xl overflow-hidden cursor-pointer shadow-lg"
          onClick={() => setShowModal(true)}
        >
          <img
            src={displayImages[selectedIndex]}
            alt="Property"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Thumbnail Grid */}
        <div className="hidden md:flex flex-col gap-4">
          {displayImages.slice(0, 3).map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedIndex(index)}
              className={`h-full rounded-xl overflow-hidden cursor-pointer shadow-md ${
                selectedIndex === index ? "ring-4 ring-blue-900" : ""
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            onClick={() => setShowModal(false)}
          >
            <Button
              size="icon"
              variant="ghost"
              className="absolute top-4 right-4 text-white hover:bg-white/10"
              onClick={() => setShowModal(false)}
            >
              <X className="w-6 h-6" />
            </Button>

            <Button
              size="icon"
              variant="ghost"
              className="absolute left-4 text-white hover:bg-white/10"
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>

            <motion.img
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={displayImages[selectedIndex]}
              alt="Property"
              className="max-h-[90vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <Button
              size="icon"
              variant="ghost"
              className="absolute right-4 text-white hover:bg-white/10"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
            >
              <ChevronRight className="w-8 h-8" />
            </Button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
              {selectedIndex + 1} / {displayImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}