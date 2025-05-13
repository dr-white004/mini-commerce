import { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bag1 from '../assets/bag1.jpg';
import bag2 from '../assets/bag2.jpg';
import jacket from '../assets/jacket.jpg';
import pant from '../assets/pant.jpg';
import shoe2 from '../assets/shoe2.jpg';

gsap.registerPlugin(ScrollTrigger);

const products = [
  { id: 1, name: "Premium Leather Bag", price: "$249", image: bag1 },
  { id: 2, name: "Urban Denim Jacket", price: "$189", image: jacket },
  { id: 3, name: "Signature Sneakers", price: "$159", image: shoe2 },
  { id: 4, name: "Tailored Chinos", price: "$129", image: pant },
  { id: 5, name: "Weekend Duffle", price: "$199", image: bag2 },
];

export default function PremiumCarousel() {
  const carouselRef = useRef(null);
  const productRefs = useRef([]);

  useEffect(() => {
    // GSAP animations
    gsap.from(productRefs.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: carouselRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    // Parallax effect on hover
    productRefs.current.forEach((product, index) => {
      product.addEventListener('mousemove', (e) => {
        const rect = product.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        gsap.to(product.querySelector('img'), {
          x: (x - centerX) / 20,
          y: (y - centerY) / 20,
          duration: 0.5,
          ease: "power2.out"
        });
      });

      product.addEventListener('mouseleave', () => {
        gsap.to(product.querySelector('img'), {
          x: 0,
          y: 0,
          duration: 0.8,
          ease: "elastic.out(1, 0.5)"
        });
      });
    });

    return () => {
      productRefs.current.forEach(product => {
        if (product) {
          product.removeEventListener('mousemove');
          product.removeEventListener('mouseleave');
        }
      });
    };
  }, []);

  const scrollToProduct = (direction) => {
    const container = carouselRef.current;
    const scrollAmount = direction === 'next' ? container.offsetWidth : -container.offsetWidth;
    
    gsap.to(container, {
      scrollLeft: container.scrollLeft + scrollAmount,
      duration: 1.2,
      ease: "power3.inOut"
    });
  };

  return (
    <section className="relative bg-neutral-950 py-16 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-light text-white">
            <span className="block text-neutral-400 text-lg mb-2">Featured Collection</span>
            Crafted for Excellence
          </h2>
          <div className="flex gap-3">
            <button 
              onClick={() => scrollToProduct('prev')}
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 group"
              aria-label="Previous"
            >
              <ChevronLeft 
                size={24} 
                className="text-white group-hover:-translate-x-1 transition-transform" 
              />
            </button>
            <button 
              onClick={() => scrollToProduct('next')}
              className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 group"
              aria-label="Next"
            >
              <ChevronRight 
                size={24} 
                className="text-white group-hover:translate-x-1 transition-transform" 
              />
            </button>
          </div>
        </div>
      </div>

      <div 
        ref={carouselRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-16 hide-scrollbar"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        <div className="flex w-max px-6">
          {products.map((product, index) => (
            <div 
              key={product.id}
              ref={el => productRefs.current[index] = el}
              className="relative w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw] flex-shrink-0 mx-4 snap-start group"
            >
              <div className="aspect-[3/4] bg-neutral-900 rounded-2xl overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-neutral-300 text-sm">{product.price}</span>
                    <h3 className="text-2xl font-light text-white mb-4">{product.name}</h3>
                    <button className="text-white border border-white/30 hover:border-white px-6 py-2 rounded-full text-sm transition-all duration-300 hover:bg-white/10">
                      Discover
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}