// import React from 'react'
// import bag2 from '../assets/bag2.jpg'
// import use from "../assets/icons8-cart-50.png";


// const Muneem = () => {
//   return (
//     <section className='grid grid-cols-3 p-4'>
//         <section> 
//             <img src={bag2} alt="" className='w-[300px] h-[340px]'/>
//         </section>
             
//         <section>
//         <h3>Get the ultimate desktop setup for productivity</h3>
//                <p>explore our latest and greatest electronics and assesories</p>
//                <hr />
//                <h6>Download app on mobile </h6>
//                <p>15% discount on your first purshase</p>
//                <div>
//                 <img src="" alt="" />
//                 <img src="" alt="" />
//                </div>
//         </section>

//         <section className='flex'>
//             <div>
//                 <div className='flex'>
//                     <img src={use} alt="" />           
//                     <div className='flex flex-col'>
//                     <p>  <strong> Free Shipping </strong>  </p>
//                     <p> Free Shipping on orders over $65.</p>
//                     </div>
//                 </div>          
//                 <div className='flex'>
//                     <img src={use} alt="" />           
//                     <div className='flex flex-col'>
//                     <p>  <strong> Free Shipping </strong>  </p>
//                     <p> Free Shipping on orders over $65.</p>
//                     </div>
//                 </div>          
//                 <div className='flex'>
//                     <img src={use} alt="" />           
//                     <div className='flex flex-col'>
//                     <p>  <strong> Free Shipping </strong>  </p>
//                     <p> Free Shipping on orders over $65.</p>
//                     </div>
//                 </div>   
//             </div>       
//             <div>
//                 <div className='flex'>
//                     <img src={use} alt="" />           
//                     <div className='flex flex-col'>
//                     <p>  <strong> Free Shipping </strong>  </p>
//                     <p> Free Shipping on orders over $65.</p>
//                     </div>
//                 </div>          
//                 <div className='flex'>
//                     <img src={use} alt="" />           
//                     <div className='flex flex-col'>
//                     <p>  <strong> Free Shipping </strong>  </p>
//                     <p> Free Shipping on orders over $65.</p>
//                     </div>
//                 </div>          
//                 <div className='flex'>
//                     <img src={use} alt="" />           
//                     <div className='flex flex-col'>
//                     <p>  <strong> Free Shipping </strong>  </p>
//                     <p> Free Shipping on orders over $65.</p>
//                     </div>
//                 </div>   
//             </div>       



                    
//         </section>
//     </section>
//   )
// }

// export default Muneem


import React from 'react';
import { Truck, ShieldCheck, BadgePercent, Clock, RefreshCw, Headphones } from 'lucide-react';
import bag2 from '../assets/bag2.jpg';

const Muneem = () => {
  const benefits = [
    [
      {
        icon: <Truck size={24} className="text-blue-600" />,
        title: "Fast & Free Shipping",
        description: "Free delivery on all orders over $65 with 2-3 day delivery"
      },
      {
        icon: <ShieldCheck size={24} className="text-green-600" />,
        title: "Secure Payments",
        description: "100% protected payments with SSL encryption"
      },
      {
        icon: <BadgePercent size={24} className="text-purple-600" />,
        title: "Exclusive Discounts",
        description: "Special member-only deals and first-order benefits"
      }
    ],
    [
      {
        icon: <Clock size={24} className="text-amber-600" />,
        title: "24/7 Support",
        description: "Round-the-clock customer service team"
      },
      {
        icon: <RefreshCw size={24} className="text-teal-600" />,
        title: "Easy Returns",
        description: "30-day hassle-free return policy"
      },
      {
        icon: <Headphones size={24} className="text-red-600" />,
        title: "Product Experts",
        description: "Personalized recommendations from our specialists"
      }
    ]
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Product Image Section */}
        <div className="lg:col-span-1 flex justify-center">
          <img 
            src={bag2} 
            alt="Premium product showcase" 
            className="w-full max-w-md h-auto object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
          />
        </div>
        
        {/* Main Offer Section */}
        <div className="lg:col-span-1 flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Get the Ultimate Desktop Setup for Productivity
          </h3>
          <p className="text-gray-600 mb-4">
            Explore our latest and greatest electronics and accessories curated for maximum efficiency.
          </p>
          <hr className="my-4 border-gray-200" />
          <h6 className="text-lg font-semibold mb-2">Download Our Mobile App</h6>
          <p className="text-blue-600 font-medium mb-4">
            Enjoy 15% discount on your first purchase through the app!
          </p>
          <div className="flex gap-4">
            <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M3 18v-12a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-14a2 2 0 0 1-2-2z" fill="currentColor"></path>
                <path d="M16 16l-4-4-4 4m8-6l-4-4-4 4" stroke="currentColor" strokeWidth="2" fill="none"></path>
              </svg>
              App Store
            </button>
            <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-14a2 2 0 0 1-2-2v-14z" fill="currentColor"></path>
                <path d="M8 12l4 4 4-4m-8-4l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none"></path>
              </svg>
              Play Store
            </button>
          </div>
        </div>
        
        {/* Benefits Section */}
        <div className="lg:col-span-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((column, colIndex) => (
            <div key={colIndex} className="space-y-6">
              {column.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{benefit.title}</h4>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Muneem;