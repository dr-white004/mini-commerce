// import React from 'react'

// const Footer = () => {
//   return (
//     <section className='grid grid-cols-3 px-8 gap-5 bg-amber-170 shadow-xl'>
//         <div>
//         <h3><span className='font-bold underline'>About Us</span></h3>
//         <p>Elegant Pink Origami Design three dimensional view and decoration co-exists</p>
//         <p>Great for adding a decorative touch to any room's decor</p>
//         </div>
//           <div>
//           <h3 className='font-bold underline'>Information</h3>  
//           <ul>
//             <li>Custom Service</li>
//               <li>FAQs</li>
//                 <li>Ordering Tracking</li>
//                   <li>Contacts</li>
//                     <li>Events</li>
//           </ul>
//         </div> 
//          <div>
//             <h3 className='font-bold underline'>My Account</h3>
//             <ul>
//                 <li>Delivery Information</li>
//                 <li>Privacy Policy</li>
//                     <li>Discount</li>
//                     <li>Custom service</li>
//                         <li>Terms and Conditions</li>
//                 </ul>  
//         </div>
    
//     </section>
//   )
// }

// export default Footer


import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, CreditCard, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* About Company */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Origami Elegance</h3>
            <p className="text-sm">
              Bringing artistry to your space with handcrafted origami designs that blend beauty and sophistication.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shop</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Collections</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>123 Origami Street, Paper City, PC 10001</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} />
                <a href="mailto:info@origamielegancy.com" className="hover:text-white transition-colors">
                  info@origamielegancy.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} />
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  (123) 456-7890
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Payment & Security */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2">
              <Shield size={18} className="text-green-400" />
              <span className="text-sm">Secure Payment Guarantee</span>
            </div>
            
            <div className="flex space-x-4">
              <CreditCard size={20} />
              <span className="text-sm">Visa</span>
              <CreditCard size={20} />
              <span className="text-sm">Mastercard</span>
              <CreditCard size={20} />
              <span className="text-sm">PayPal</span>
            </div>
            
            <div className="text-sm">
              © {new Date().getFullYear()} Origami Elegance. All rights reserved.
            </div>
          </div>
        </div>

        {/* Policies */}
        <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Shipping Policy</a>
          <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;