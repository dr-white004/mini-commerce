import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import bag1 from '../assets/bag1.jpg'
import bag2 from '../assets/bag2.jpg'
import jacket from '../assets/jacket.jpg'
import pant from '../assets/pant.jpg'
import shoe2 from '../assets/shoe2.jpg'

const images = [bag1, bag2, jacket, pant, shoe2, bag1, bag2, pant];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const scrollToIndex = (index) => {
    const container = containerRef.current;
    const scrollAmount = container.offsetWidth / 4; // width per image
    container.scrollTo({
      left: index * scrollAmount,
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      scrollToIndex(newIndex - 3);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      scrollToIndex(newIndex - 3);
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Controls */}
      <div className="flex justify-end gap-2 p-2">
        <button
          onClick={handlePrev}
          className="p-1 bg-gray-200 rounded-full hover:bg-gray-300"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={handleNext}
          className="p-1 bg-gray-200 rounded-full hover:bg-gray-300"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Image Scroll Container */}
      <div
        ref={containerRef}
        className="flex overflow-hidden transition-all"
      >
        {images.map((src, index) => (
          <div
            key={index}
            className={`flex-none w-1/4 p-1 transition-all ${
              index === currentIndex ? "bg-blue-200" : "bg-white"
            }`}
          >
            <img
              src={src}
              alt={`Image ${index}`}
              className="w-full h-40 object-cover rounded shadow"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
