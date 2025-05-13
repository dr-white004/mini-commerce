// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import useImage from "../assets/imageurl.png"; // Your actual local image

// const slides = [
//   {
//     title: "Grow Your Brand",
//     description: "Expand your reach with our marketing solutions",
//     image: useImage
//   },
//   {
//     title: "Boost Visibility",
//     description: "Get noticed by your target audience",
//     image: useImage
//   },
//   {
//     title: "Drive Sales",
//     description: "Convert visitors into customers effectively",
//     image: useImage
//   },
// ];

// function Trying() {
//   const [current, setCurrent] = useState(0);

//   const prevSlide = () => {
//     setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   const nextSlide = () => {
//     setCurrent((prev) => (prev + 1) % slides.length);
//   };

//   return (
//     <div className="relative w-full bg-sky-50 h-[400px] md:h-[500px] overflow-hidden">
//       {/* Navigation Arrows */}
//       <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 sm:px-4 z-20">
//         <button
//           onClick={prevSlide}
//           className="p-1 sm:p-2 rounded-full bg-white/80 shadow-md hover:bg-white transition-colors"
//           aria-label="Previous slide"
//         >
//           <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="p-1 sm:p-2 rounded-full bg-white/80 shadow-md hover:bg-white transition-colors"
//           aria-label="Next slide"
//         >
//           <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
//         </button>
//       </div>

//       {/* Slides Container */}
//       <div
//         className="flex h-full transition-transform duration-500 ease-in-out"
//         style={{ transform: `translateX(-${current * 100}%)` }}
//       >
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className="w-full flex-shrink-0 flex items-center px-4 sm:px-8 md:px-16 h-full"
//           >
//             {/* Content - Stacked on mobile, side-by-side on larger screens */}
//             <div className="flex flex-col md:flex-row w-full items-center gap-6 md:gap-12">
//               {/* Text Content - Full width on mobile, half on desktop */}
//               <div className="w-full md:w-1/2 text-center md:text-left">
//                 <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
//                   {slide.title}
//                 </h2>
//                 <p className="text-gray-600 text-sm sm:text-base md:text-lg">
//                   {slide.description}
//                 </p>
//               </div>
              
//               {/* Image - Full width on mobile, half on desktop */}
//               <div className="w-full md:w-1/2 flex justify-center">
//                 <img
//                   src={slide.image}
//                   alt={slide.title}
//                   className="max-h-[180px] sm:max-h-[220px] md:max-h-[300px] w-auto object-contain"
//                 />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Mobile Indicators */}
//       <div className="md:hidden absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrent(index)}
//             className={`w-2 h-2 rounded-full transition-colors ${current === index ? 'bg-gray-800' : 'bg-gray-300'}`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Trying;



import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";
import useImage from "../assets/imageurl.png"; // Your actual local image

// Color scheme matching the navbar
const colors = {
  primary: '#2563eb', // Blue-600
  secondary: '#1e3a8a', // Blue-900
  accent: '#f97316', // Orange-500
  light: '#f0f9ff', // Sky-50
  dark: '#1e293b', // Slate-800
  muted: '#94a3b8' // Slate-400
};

const slides = [
  {
    title: "Grow Your Brand",
    description: "Expand your reach with our marketing solutions",
    image: useImage
  },
  {
    title: "Boost Visibility",
    description: "Get noticed by your target audience",
    image: useImage
  },
  {
    title: "Drive Sales",
    description: "Convert visitors into customers effectively",
    image: useImage
  },
];

function Slider() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slidesRef = useRef(null);
  const contentRefs = useRef([]);
  const imageRefs = useRef([]);
  
  // Set up refs for animation targets
  useEffect(() => {
    contentRefs.current = contentRefs.current.slice(0, slides.length);
    imageRefs.current = imageRefs.current.slice(0, slides.length);
  }, []);

  const prevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const newIndex = (current - 1 + slides.length) % slides.length;
    
    // Animate out current slide
    animateSlideTransition(current, newIndex);
    
    setCurrent(newIndex);
  };

  const nextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    const newIndex = (current + 1) % slides.length;
    
    // Animate out current slide
    animateSlideTransition(current, newIndex);
    
    setCurrent(newIndex);
  };
  
  const goToSlide = (index) => {
    if (isAnimating || current === index) return;
    
    setIsAnimating(true);
    animateSlideTransition(current, index);
    setCurrent(index);
  };
  
  // Handle slide transition animations
  const animateSlideTransition = (fromIndex, toIndex) => {
    // Fade out current content
    gsap.to(contentRefs.current[fromIndex], {
      opacity: 0,
      y: 20,
      duration: 0.3,
    });
    
    // Fade out current image
    gsap.to(imageRefs.current[fromIndex], {
      opacity: 0,
      scale: 0.9,
      duration: 0.3,
    });
    
    // After slide transition completes
    gsap.delayedCall(0.5, () => {
      // Fade in new content
      gsap.fromTo(contentRefs.current[toIndex], 
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
      );
      
      // Fade in new image with bounce effect
      gsap.fromTo(imageRefs.current[toIndex], 
        { opacity: 0, scale: 0.9 },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 0.5, 
          ease: "back.out(1.7)"
        }
      );
      
      setIsAnimating(false);
    });
  };
  
  // Initial animation on component mount
  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(contentRefs.current[current], 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
    
    tl.fromTo(imageRefs.current[current], 
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
      "-=0.5"
    );
    
    // Set up auto-rotation
    const autoplayInterval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 5000);
    
    return () => clearInterval(autoplayInterval);
  }, []);

  return (
    <div className="relative w-full p-10   bg-gradient-to-br from-blue-50 to-sky-100 h-[70vh] md:h-[100vh] overflow-hidden shadow-lg">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-orange-200 opacity-20 blur-3xl"></div>
      </div>
      
      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 sm:px-4 z-20">
        <button
          onClick={prevSlide}
          className={`p-1 sm:p-2 rounded-full bg-white/90 shadow-md hover:bg-${colors.primary} hover:text-white transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-${colors.primary}`}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className={`p-1 sm:p-2 rounded-full bg-white/90 shadow-md hover:bg-${colors.primary} hover:text-white transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-${colors.primary}`}
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Slides Container */}
      <div
        ref={slidesRef}
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 flex items-center px-4 sm:px-8 md:px-16 h-full"
          >
            {/* Content - Stacked on mobile, side-by-side on larger screens */}
            <div className="flex flex-col md:flex-row w-full items-center gap-6 md:gap-12">
              {/* Text Content - Full width on mobile, half on desktop */}
              <div 
                ref={el => contentRefs.current[index] = el} 
                className="w-full md:w-1/2 text-center md:text-left"
              >
                <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 text-${colors.secondary}`}>
                  {slide.title}
                </h2>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6">
                  {slide.description}
                </p>
                <button className={`px-6 py-2 bg-${colors.accent} text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:bg-${colors.primary} transform hover:scale-105`}>
                  Learn More
                </button>
              </div>
              
              {/* Image - Full width on mobile, half on desktop */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div 
                  ref={el => imageRefs.current[index] = el}
                  className="relative"
                >
                  <div className={`absolute -inset-1 rounded-full bg-${colors.primary}/10 blur-md`}></div>
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="max-h-[180px] sm:max-h-[220px] md:max-h-[300px] w-auto object-contain relative z-10"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators - Now visible on all screen sizes with enhanced styling */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${
              current === index 
                ? `w-8 h-2 bg-${colors.accent} rounded-full` 
                : `w-2 h-2 bg-gray-300 hover:bg-gray-400 rounded-full`
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;