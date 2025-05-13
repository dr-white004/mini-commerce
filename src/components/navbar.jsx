// import React, { useState } from 'react';
// import boy from '../assets/icons8-search-50.png';
// import user from '../assets/icons8-user-50.png';
// import cart from '../assets/icons8-cart-50.png';
// import { Menu, X } from 'lucide-react'; // Import hamburger and close icons

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className='flex flex-col bg-sky-50'>
//       {/* Top Bar - Hidden on mobile */}
//       <div className='hidden md:flex justify-between px-4 lg:px-16 py-2'>
//         <div className='flex gap-4 lg:gap-8 px-4 lg:px-8'>
//           <p className='text-xs lg:text-sm'>Open doors to a world</p>
//           <p className='font-bold text-xs lg:text-sm'>Discover more</p>
//         </div>
       
//         <div className='flex gap-4 lg:gap-8'>
//           <span className='text-xs lg:text-sm'>English</span>
//           <span className='text-xs lg:text-sm'>Usd</span>
//         </div>
//       </div>

//       <hr className='w-full hidden md:block'/>

//       {/* Main Navigation */}
//       <nav className='flex justify-between items-center px-4 lg:px-16 py-4'>
//         {/* Mobile Menu Button - Visible only on mobile */}
//         <button 
//           onClick={toggleMenu}
//           className='md:hidden p-2'
//           aria-label="Toggle menu"
//         >
//           {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>

//         {/* Logo - Centered on mobile */}
//         <p className='font-bold text-xl md:text-2xl mx-auto md:mx-0'>UNICOZ</p>

//         {/* Desktop Navigation - Hidden on mobile */}
//         <ul className='hidden md:flex gap-4 lg:gap-8 px-4 lg:px-8'>
//           <li className='hover:text-gray-600 transition-colors'>Home</li>
//           <li className='hover:text-gray-600 transition-colors'>Shop</li>
//           <li className='hover:text-gray-600 transition-colors'>Pages</li>
//           <li className='hover:text-gray-600 transition-colors'>Blog</li>
//           <li className='hover:text-gray-600 transition-colors'>Contact</li>
//         </ul>

//         {/* Icons - Position differs on mobile */}
//         <div className='flex gap-4 md:gap-6 lg:gap-8'>
//           <img src={cart} alt="cart" className='w-5 h-5 md:w-6 md:h-6' />
//           <img src={user} alt="user" className='w-5 h-5 md:w-6 md:h-6' />
//           <img src={boy} alt="search" className='w-5 h-5 md:w-6 md:h-6' />
//         </div>
//       </nav>

//       {/* Mobile Menu - Only appears when toggled */}
//       {isMenuOpen && (
//         <div className='md:hidden bg-sky-50 w-full px-4 py-2'>
//           <ul className='flex flex-col gap-4'>
//             <li className='py-2 border-b border-gray-200'>Home</li>
//             <li className='py-2 border-b border-gray-200'>Shop</li>
//             <li className='py-2 border-b border-gray-200'>Pages</li>
//             <li className='py-2 border-b border-gray-200'>Blog</li>
//             <li className='py-2'>Contact</li>
//           </ul>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;


import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Menu, X, ShoppingBag, Search, User, ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const iconsRef = useRef(null);
  const menuRef = useRef(null);
  
  // Color scheme
  const colors = {
    primary: '#2563eb', // Blue-600
    secondary: '#1e3a8a', // Blue-900
    accent: '#f97316', // Orange-500
    light: '#f0f9ff', // Sky-50
    dark: '#1e293b', // Slate-800
    muted: '#94a3b8' // Slate-400
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Initial animations
  useEffect(() => {
    gsap.from(logoRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.8,
      ease: "power3.out"
    });

    gsap.from(iconsRef.current.children, {
      opacity: 0,
      y: -15,
      stagger: 0.1,
      duration: 0.5,
      ease: "back.out(1.7)"
    });
  }, []);

  // Mobile menu animation
  useEffect(() => {
    if (isMenuOpen && menuRef.current) {
      gsap.fromTo(
        menuRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.3, ease: "power2.out" }
      );
      
      gsap.fromTo(
        menuRef.current.children[0].children,
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.05, delay: 0.1, ease: "power2.out" }
      );
    }
  }, [isMenuOpen]);

  return (
    <header 
      ref={navbarRef}
      className={`flex flex-col w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? `bg-white shadow-md` 
          : `bg-${colors.light}`
      }`}
    >
      {/* Top Bar - Hidden on mobile */}
      <div className={`hidden md:flex justify-between px-4 lg:px-16 py-2 ${isScrolled ? 'bg-gray-50' : `bg-${colors.primary}`}`}>
        <div className='flex gap-4 lg:gap-8 px-4 lg:px-8'>
          <p className={`text-xs lg:text-sm ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Open doors to a world</p>
          <p className={`font-bold text-xs lg:text-sm ${isScrolled ? 'text-gray-900' : 'text-white'}`}>Discover more</p>
        </div>
        
        <div className='flex gap-4 lg:gap-8'>
          <span className={`text-xs lg:text-sm ${isScrolled ? 'text-gray-700' : 'text-white'}`}>English</span>
          <span className={`text-xs lg:text-sm ${isScrolled ? 'text-gray-700' : 'text-white'}`}>Usd</span>
        </div>
      </div>
      
      <div className='hidden md:block h-px bg-gray-200 w-full'/>
      
      {/* Main Navigation */}
      <nav className={`flex justify-between items-center px-4 lg:px-16 py-4 transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-4'
      }`}>
        {/* Mobile Menu Button - Visible only on mobile */}
        <button
          onClick={toggleMenu}
          className={`md:hidden p-2 rounded-full transition-colors ${
            isMenuOpen ? `text-${colors.accent} bg-${colors.accent}/10` : 'text-gray-800'
          }`}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Logo - Centered on mobile */}
        <p 
          ref={logoRef}
          className={`font-bold text-xl md:text-2xl mx-auto md:mx-0 transition-colors ${
            isScrolled ? `text-${colors.primary}` : `text-${colors.dark}`
          }`}
          onMouseEnter={(e) => {
            gsap.to(e.target, {
              scale: 1.05,
              color: colors.accent,
              duration: 0.2,
              ease: "power1.out"
            });
          }}
          onMouseLeave={(e) => {
            gsap.to(e.target, {
              scale: 1,
              color: isScrolled ? colors.primary : colors.dark,
              duration: 0.2,
              ease: "power1.out"
            });
          }}
        >
          JOA FABRICS
        </p>
        
        {/* Desktop Navigation - Hidden on mobile */}
        <ul className='hidden md:flex gap-4 lg:gap-8 px-4 lg:px-8'>
          {['Home', 'Shop', 'Pages', 'Blog', 'Contact'].map((item, index) => (
            <li 
              key={index}
              className='relative font-medium cursor-pointer'
              onMouseEnter={(e) => {
                gsap.to(e.target, {
                  color: colors.accent,
                  duration: 0.2,
                  ease: "power1.out"
                });
                // Create line animation from left to right
                const line = document.createElement('div');
                line.className = 'absolute bottom-0 left-0 h-0.5 bg-current w-0';
                e.target.appendChild(line);
                gsap.to(line, {
                  width: '100%',
                  duration: 0.3,
                  ease: "power1.out"
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.target, {
                  color: 'inherit',
                  duration: 0.2,
                  ease: "power1.out"
                });
                // Remove the line
                const line = e.target.querySelector('div');
                if (line) {
                  gsap.to(line, {
                    width: 0,
                    duration: 0.2,
                    ease: "power1.in",
                    onComplete: () => line.remove()
                  });
                }
              }}
            >
              {item}
            </li>
          ))}
        </ul>
        
        {/* Icons - Position differs on mobile */}
        <div ref={iconsRef} className='flex gap-4 md:gap-6 lg:gap-8'>
          <div 
            className={`relative cursor-pointer transition-transform hover:scale-110`}
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, {
                y: -3,
                duration: 0.2,
                ease: "back.out(1.7)"
              });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget, {
                y: 0,
                duration: 0.2,
                ease: "power2.out"
              });
            }}
          >
            <ShoppingCart size={22} className="text-gray-800" />
            <span className={`absolute -top-2 -right-2 bg-${colors.accent} text-white text-xs rounded-full h-4 w-4 flex items-center justify-center`}>
              2
            </span>
          </div>
          
          <div 
            className='cursor-pointer transition-transform hover:scale-110'
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, {
                y: -3,
                duration: 0.2,
                ease: "back.out(1.7)"
              });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget, {
                y: 0,
                duration: 0.2,
                ease: "power2.out"
              });
            }}
          >
            <User size={22} className="text-gray-800" />
          </div>
          
          <div 
            className='cursor-pointer transition-transform hover:scale-110'
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, {
                y: -3,
                duration: 0.2,
                ease: "back.out(1.7)"
              });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget, {
                y: 0,
                duration: 0.2,
                ease: "power2.out"
              });
            }}
          >
            <Search size={22} className="text-gray-800" />
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu - Only appears when toggled */}
      {isMenuOpen && (
        <div 
          ref={menuRef}
          className={`md:hidden w-full overflow-hidden bg-white border-t border-gray-200 shadow-lg`}
        >
          <ul className='flex flex-col gap-1 p-4'>
            {['Home', 'Shop', 'Pages', 'Blog', 'Contact'].map((item, index) => (
              <li 
                key={index} 
                className={`py-3 px-2 border-b border-gray-100 text-gray-800 font-medium hover:bg-${colors.primary}/10 rounded transition-colors`}
                onClick={(e) => {
                  gsap.to(e.currentTarget, {
                    backgroundColor: `${colors.primary}20`,
                    color: colors.primary,
                    paddingLeft: '10px',
                    duration: 0.2,
                    onComplete: () => {
                      // Reset for demonstration, in real app would navigate
                      setTimeout(() => {
                        gsap.to(e.currentTarget, {
                          backgroundColor: 'transparent',
                          color: 'inherit',
                          paddingLeft: '8px',
                          duration: 0.2
                        });
                      }, 500);
                    }
                  });
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;