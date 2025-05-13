// import React from 'react'
// import bag1 from '../assets/bag1.jpg'
// import bag2 from '../assets/bag2.jpg'
// import jacket from '../assets/jacket.jpg'
// import pant from '../assets/pant.jpg'
// import shoe2 from '../assets/shoe2.jpg'

// const Feature = () => {
//   return (
//     <section>
//         <section className='flex flex-col justify-center  w-full px-4'>
//             <div className='text-center py-8'>
//                 <h4 className='font-bold'> Recently Added</h4>
//                 <p>Must have pieces every month</p>
//             </div>
//             <div className='flex justify-around items-center w-full py-8'>
//                 <img src={shoe2} alt=""  className='h-30 w-30 rounded-full'/>
//                 <img src={jacket} alt="" className='h-30 w-30 rounded-full'/>
//                 <img src={bag1} alt="" className='h-30 w-30 rounded-full'/>
//                 <img src={bag2} alt="" className='h-30 w-30 rounded-full' />
//                 <img src={pant} alt="" className='h-30 w-30 rounded-full' />
//             </div>
//        </section>
//         <section className='flex flex-col justify-center  w-full px-4'>
//             <div className='text-center py-8'>
//                 <h4 className='font-bold'> Frequently Added</h4>
//                 <p>Must have pieces every month</p>
//             </div>
//             <div className='flex flex-col justify-around items-center w-full py-8'>
//               <div className='flex justify-around items-center w-full py-8'>
//                     <div>
//                     <img src={shoe2} alt=""  className='h-30 w-30 rounded-full'/>
//                     <span>shoes</span>
//                     </div>
//                     <div>
//                     <img src={jacket} alt="" className='h-30 w-30 rounded-full'/>
//                     <span>shoes</span>
//                     </div>
//                     <div>
//                     <img src={bag1} alt="" className='h-30 w-30 rounded-full'/>
//                     <span>shoes</span>
//                     </div>
//                 </div>
//               <div className='flex justify-around items-center w-full py-8'>
//                     <div>
//                     <img src={shoe2} alt=""  className='h-30 w-30 rounded-full'/>
//                     <span>shoes</span>
//                     </div>
//                     <div>
//                     <img src={jacket} alt="" className='h-30 w-30 rounded-full'/>
//                     <span>shoes</span>
//                     </div>
//                     <div>
//                     <img src={bag1} alt="" className='h-30 w-30 rounded-full'/>
//                     <span>shoes</span>
//                     </div>
//                 </div>
               
//             </div>
//        </section>
//        <div className='flex justify-around bg-green-200 mx-16 p-4'>
//         <p className=''>Winter Dress discount 20% use coupon <span className='text-red-100'>WINTER 007</span></p>
//         <p className='bg-green-50 p-2'>SHOP NOW</p>
//        </div>
//     </section>
//   )
// }

// export default Feature

// import React, { useState } from 'react';
// import { Star, Heart, ShoppingCart } from 'lucide-react';
// import bag1 from '../assets/bag1.jpg'
// import bag2 from '../assets/bag2.jpg'
// import jacket from '../assets/jacket.jpg'
// import pant from '../assets/pant.jpg'
// import shoe2 from '../assets/shoe2.jpg'
// import shoe1 from '../assets/shoe1.jpg'

// // Mock product data
// const products = [
//   {
//     id: 1,
//     name: "Premium Sneakers",
//     category: "Shoes",
//     price: 89.99,
//     stock: 15,
//     images: [
//       { color: "Black", image: shoe1 },
//       { color: "White", image: shoe2 }
//     ],
//     rating: 4.5,
//     isNew: true
//   },
//   {
//     id: 2,
//     name: "Denim Jacket",
//     category: "Jackets",
//     price: 59.99,
//     stock: 8,
//     images: [
//       { color: "Blue", image:jacket },
//       { color: "Black", image:jacket }
//     ],
//     rating: 4.2,
//     isNew: false
//   },
//   {
//     id: 3,
//     name: "Leather Handbag",
//     category: "Bags",
//     price: 129.99,
//     stock: 5,
//     images: [
//       { color: "Brown", image: bag1},
//       { color: "Black", image: bag2 }
//     ],
//     rating: 4.7,
//     isNew: true
//   },
//   {
//     id: 4,
//     name: "Chino Pants",
//     category: "Pants",
//     price: 39.99,
//     stock: 12,
//     images: [
//       { color: "Beige", image: pant },
//       { color: "Navy", image:pant }
//     ],
//     rating: 4.0,
//     isNew: false
//   }
// ];

// const FeaturedProducts = () => {
//   const [selectedVariants, setSelectedVariants] = useState({});
//   const [wishlist, setWishlist] = useState([]);

//   const toggleWishlist = (productId) => {
//     setWishlist(prev => 
//       prev.includes(productId) 
//         ? prev.filter(id => id !== productId)
//         : [...prev, productId]
//     );
//   };

//   const selectVariant = (productId, variantIndex) => {
//     setSelectedVariants(prev => ({
//       ...prev,
//       [productId]: variantIndex
//     }));
//   };

//   return (
//     <section className="container mx-auto px-4 py-12">
//       {/* Recently Added Section */}
//       <div className="mb-16">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold mb-2">Recently Added</h2>
//           <p className="text-gray-600">Discover our newest arrivals</p>
//         </div>

//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 place-items-center">
//           {products.map(product => (
//             <ProductCard 
//               key={product.id}
//               product={product}
//               selectedVariant={selectedVariants[product.id] || 0}
//               onSelectVariant={(idx) => selectVariant(product.id, idx)}
//               isWishlisted={wishlist.includes(product.id)}
//               onToggleWishlist={() => toggleWishlist(product.id)}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Discount Banner */}
//       <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-xl p-6 mb-16 flex flex-col md:flex-row justify-between items-center">
//         <div className="mb-4 md:mb-0 text-center md:text-left">
//           <h3 className="text-xl font-semibold mb-2">Seasonal Sale!</h3>
//           <p className="text-gray-700">
//             Enjoy 20% off on selected items. Use code: 
//             <span className="bg-white px-3 py-1 rounded-full ml-2 font-mono text-green-600">
//               SEASON20
//             </span>
//           </p>
//         </div>
//         <button className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-colors">
//           Shop the Sale
//         </button>
//       </div>

//       {/* Best Sellers Section */}
//       <div>
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold mb-2">Customer Favorites</h2>
//           <p className="text-gray-600">Most loved by our shoppers</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {products.slice(0, 3).map(product => (
//             <FeaturedProductCard 
//               key={`featured-${product.id}`}
//               product={product}
//               selectedVariant={selectedVariants[product.id] || 0}
//               onSelectVariant={(idx) => selectVariant(product.id, idx)}
//               isWishlisted={wishlist.includes(product.id)}
//               onToggleWishlist={() => toggleWishlist(product.id)}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // Standard Product Card Component
// const ProductCard = ({ product, selectedVariant, onSelectVariant, isWishlisted, onToggleWishlist }) => {
//   return (
//     <div className="group relative w-full max-w-[220px]">
//       <div className="aspect-square bg-gray-50 rounded-xl overflow-hidden relative">
//         <img
//           src={product.images[selectedVariant].image}
//           alt={product.name}
//           className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
//         />
        
//         {/* Wishlist button */}
//         <button 
//           onClick={onToggleWishlist}
//           className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
//         >
//           <Heart 
//             size={18}
//             className={isWishlisted ? "fill-red-500 text-red-500" : "text-gray-400"} 
//           />
//         </button>
        
//         {/* Stock indicator */}
//         {product.stock > 0 && (
//           <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded-full">
//             {product.stock} in stock
//           </div>
//         )}
        
//         {/* New badge */}
//         {product.isNew && (
//           <div className="absolute top-3 left-3 bg-black text-white text-xs font-bold px-2 py-1 rounded-full">
//             NEW
//           </div>
//         )}
//       </div>
      
//       <div className="mt-4 text-center">
//         <h3 className="font-medium mb-1">{product.name}</h3>
//         <p className="text-gray-700 font-bold mb-2">${product.price.toFixed(2)}</p>
        
//         {/* Color variants */}
//         <div className="flex justify-center gap-1.5">
//           {product.images.map((variant, idx) => (
//             <button
//               key={idx}
//               onClick={() => onSelectVariant(idx)}
//               className={`w-4 h-4 rounded-full border-2 ${selectedVariant === idx ? 'border-black' : 'border-transparent'}`}
//               style={{ backgroundColor: variant.color.toLowerCase() }}
//               aria-label={`Select ${variant.color} color`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Featured Product Card (larger version)
// const FeaturedProductCard = ({ product, selectedVariant, onSelectVariant, isWishlisted, onToggleWishlist }) => {
//   return (
//     <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
//       <div className="relative">
//         <img
//           src={product.images[selectedVariant].image}
//           alt={product.name}
//           className="w-full h-64 object-cover"
//         />
        
//         <div className="absolute top-4 right-4 flex gap-2">
//           <button 
//             onClick={onToggleWishlist}
//             className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition-colors"
//           >
//             <Heart 
//               size={18}
//               className={isWishlisted ? "fill-red-500 text-red-500" : "text-gray-400"} 
//             />
//           </button>
//         </div>
        
//         {product.stock > 0 && (
//           <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-sm font-medium px-3 py-1 rounded-full">
//             Only {product.stock} left
//           </div>
//         )}
//       </div>
      
//       <div className="p-5">
//         <div className="flex justify-between items-start mb-3">
//           <h3 className="text-lg font-semibold">{product.name}</h3>
//           <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
//         </div>
        
//         {/* Rating */}
//         <div className="flex items-center mb-4">
//           <div className="flex mr-2">
//             {[...Array(5)].map((_, i) => (
//               <Star
//                 key={i}
//                 size={16}
//                 className={i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
//               />
//             ))}
//           </div>
//           <span className="text-sm text-gray-500">({product.rating})</span>
//         </div>
        
//         {/* Color variants */}
//         <div className="flex gap-2 mb-5">
//           {product.images.map((variant, idx) => (
//             <button
//               key={idx}
//               onClick={() => onSelectVariant(idx)}
//               className={`w-6 h-6 rounded-full border-2 ${selectedVariant === idx ? 'border-black' : 'border-gray-200'}`}
//               style={{ backgroundColor: variant.color.toLowerCase() }}
//               aria-label={`Select ${variant.color} color`}
//             />
//           ))}
//         </div>
        
//         <button className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
//           <ShoppingCart size={18} />
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default FeaturedProducts;


import React, { useState } from 'react';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import bag1 from '../assets/bag1.jpg'
import bag2 from '../assets/bag2.jpg'
import jacket from '../assets/jacket.jpg'
import pant from '../assets/pant.jpg'
import shoe2 from '../assets/shoe2.jpg'
import shoe1 from '../assets/shoe1.jpg'

// Consistent color scheme matching the navbar
const colors = {
  primary: '#2563eb', // Blue-600
  secondary: '#1e3a8a', // Blue-900
  accent: '#f97316', // Orange-500
  light: '#f0f9ff', // Sky-50
  dark: '#1e293b', // Slate-800
  muted: '#94a3b8' // Slate-400
};

// Mock product data
const products = [
  {
    id: 1,
    name: "Premium Sneakers",
    category: "Shoes",
    price: 89.99,
    stock: 15,
    images: [
      { color: "Black", image: shoe1 },
      { color: "White", image: shoe2 }
    ],
    rating: 4.5,
    isNew: true
  },
  {
    id: 2,
    name: "Denim Jacket",
    category: "Jackets",
    price: 59.99,
    stock: 8,
    images: [
      { color: "Blue", image:jacket },
      { color: "Black", image:jacket }
    ],
    rating: 4.2,
    isNew: false
  },
  {
    id: 3,
    name: "Leather Handbag",
    category: "Bags",
    price: 129.99,
    stock: 5,
    images: [
      { color: "Brown", image: bag1},
      { color: "Black", image: bag2 }
    ],
    rating: 4.7,
    isNew: true
  },
  {
    id: 4,
    name: "Chino Pants",
    category: "Pants",
    price: 39.99,
    stock: 12,
    images: [
      { color: "Beige", image: pant },
      { color: "Navy", image:pant }
    ],
    rating: 4.0,
    isNew: false
  }
];

const FeaturedProducts = () => {
  const [selectedVariants, setSelectedVariants] = useState({});
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (productId) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const selectVariant = (productId, variantIndex) => {
    setSelectedVariants(prev => ({
      ...prev,
      [productId]: variantIndex
    }));
  };

  return (
    <section className="container mx-auto px-16 py-12">
      {/* Recently Added Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <div className="inline-block mb-2">
            <span className={`bg-${colors.accent}/10 text-${colors.accent} text-sm px-4 py-1 rounded-full font-medium`}>
              New Arrivals
            </span>
          </div>
          <h2 className={`text-3xl font-bold mb-2 text-${colors.dark}`}>Recently Added</h2>
          <p className="text-gray-600">Discover our newest arrivals</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 place-items-center">
          {products.map(product => (
            <ProductCard 
              key={product.id}
              product={product}
              selectedVariant={selectedVariants[product.id] || 0}
              onSelectVariant={(idx) => selectVariant(product.id, idx)}
              isWishlisted={wishlist.includes(product.id)}
              onToggleWishlist={() => toggleWishlist(product.id)}
              colors={colors}
            />
          ))}
        </div>
      </div>

      {/* Discount Banner */}
      <div className={`bg-gradient-to-r from-${colors.primary}/10 to-${colors.primary}/20 rounded-xl p-6 mb-16 flex flex-col md:flex-row justify-between items-center border border-${colors.primary}/20`}>
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h3 className={`text-xl font-semibold mb-2 text-${colors.secondary}`}>Seasonal Sale!</h3>
          <p className="text-gray-700">
            Enjoy 20% off on selected items. Use code: 
            <span className={`bg-white px-3 py-1 rounded-full ml-2 font-mono text-${colors.accent} font-semibold`}>
              SEASON20
            </span>
          </p>
        </div>
        <button className={`bg-${colors.accent} hover:bg-${colors.accent}/90 text-white px-6 py-3 rounded-lg transition-colors shadow-sm`}>
          Shop the Sale
        </button>
      </div>

      {/* Best Sellers Section */}
      <div>
        <div className="text-center mb-12">
          <div className="inline-block mb-2">
            <span className={`bg-${colors.primary}/10 text-${colors.primary} text-sm px-4 py-1 rounded-full font-medium`}>
              Top Rated
            </span>
          </div>
          <h2 className={`text-3xl font-bold mb-2 text-${colors.dark}`}>Customer Favorites</h2>
          <p className="text-gray-600">Most loved by our shoppers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, 3).map(product => (
            <FeaturedProductCard 
              key={`featured-${product.id}`}
              product={product}
              selectedVariant={selectedVariants[product.id] || 0}
              onSelectVariant={(idx) => selectVariant(product.id, idx)}
              isWishlisted={wishlist.includes(product.id)}
              onToggleWishlist={() => toggleWishlist(product.id)}
              colors={colors}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Standard Product Card Component
const ProductCard = ({ product, selectedVariant, onSelectVariant, isWishlisted, onToggleWishlist, colors }) => {
  return (
    <div className="group relative w-full max-w-[220px]">
      <div className="aspect-square bg-gray-50 rounded-xl overflow-hidden relative">
        {/* Using loading="lazy" for better performance */}
        <img
          src={product.images[selectedVariant].image}
          alt={product.name}
          className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Wishlist button */}
        <button 
          onClick={onToggleWishlist}
          className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
        >
          <Heart 
            size={18}
            className={isWishlisted ? `fill-${colors.accent} text-${colors.accent}` : "text-gray-400"} 
          />
        </button>
        
        {/* Stock indicator */}
        {product.stock > 0 && (
          <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-medium px-2 py-1 rounded-full">
            {product.stock} in stock
          </div>
        )}
        
        {/* New badge */}
        {product.isNew && (
          <div className={`absolute top-3 left-3 bg-${colors.accent} text-white text-xs font-bold px-2 py-1 rounded-full`}>
            NEW
          </div>
        )}
      </div>
      
      <div className="mt-4 text-center">
        <h3 className="font-medium mb-1">{product.name}</h3>
        <p className={`font-bold mb-2 text-${colors.primary}`}>${product.price.toFixed(2)}</p>
        
        {/* Color variants */}
        <div className="flex justify-center gap-1.5">
          {product.images.map((variant, idx) => (
            <button
              key={idx}
              onClick={() => onSelectVariant(idx)}
              className={`w-4 h-4 rounded-full border-2 ${selectedVariant === idx ? `border-${colors.accent}` : 'border-transparent'}`}
              style={{ backgroundColor: variant.color.toLowerCase() }}
              aria-label={`Select ${variant.color} color`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Featured Product Card (larger version)
const FeaturedProductCard = ({ product, selectedVariant, onSelectVariant, isWishlisted, onToggleWishlist, colors }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        {/* Using loading="lazy" for better performance */}
        <img
          src={product.images[selectedVariant].image}
          alt={product.name}
          className="w-full h-64 object-cover"
          loading="lazy"
        />
        
        <div className="absolute top-4 right-4 flex gap-2">
          <button 
            onClick={onToggleWishlist}
            className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition-colors"
          >
            <Heart 
              size={18}
              className={isWishlisted ? `fill-${colors.accent} text-${colors.accent}` : "text-gray-400"} 
            />
          </button>
        </div>
        
        {product.stock > 0 && (
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-sm font-medium px-3 py-1 rounded-full">
            Only {product.stock} left
          </div>
        )}
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className={`text-lg font-bold text-${colors.primary}`}>${product.price.toFixed(2)}</p>
        </div>
        
        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex mr-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < Math.floor(product.rating) ? `fill-${colors.accent} text-${colors.accent}` : "text-gray-300"}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500">({product.rating})</span>
        </div>
        
        {/* Color variants */}
        <div className="flex gap-2 mb-5">
          {product.images.map((variant, idx) => (
            <button
              key={idx}
              onClick={() => onSelectVariant(idx)}
              className={`w-6 h-6 rounded-full border-2 ${selectedVariant === idx ? `border-${colors.accent}` : 'border-gray-200'}`}
              style={{ backgroundColor: variant.color.toLowerCase() }}
              aria-label={`Select ${variant.color} color`}
            />
          ))}
        </div>
        
        <button className={`w-full bg-${colors.primary} hover:bg-${colors.secondary} text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-colors`}>
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FeaturedProducts;