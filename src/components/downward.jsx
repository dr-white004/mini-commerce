// // import React from 'react'
// import shoe2 from '../assets/shoe2.jpg'
// import jacket from '../assets/jacket.jpg'

// const Downward = () => {
//   return (
//      <section className='px-16 py-4 flex flex-col justify-center items-center'>
//         <div className='p-8 flex flex-col justify-center items-center'>
//             <h3 className='font-bold'>Blog and insights</h3>
//             <p>must have peices selected every month</p>
//         </div>

//         <div className='grid grid-cols-3 gap-4.5'>
//             <div>
//                 <img src={shoe2} alt="" />
//                 <p>January 8 2022 /<span  className='text-gray-500 underline'>Fashion</span></p>
//                 <h4>The best red carpet awards from the NAACP image award is nominated for design awards</h4>
//                  <span className='text-gray-500 underline'>read more</span>
//             </div>
//             <div>
//                 <img src={shoe2} alt="" />
//                 <p>January 8 2022 /<span  className='text-gray-500 underline'>Fashion</span></p>
//                 <h4>The best red carpet awards from the NAACP image award is nominated for design awards</h4>
//                 <span className='text-gray-500 underline'>read more</span>
//             </div>

//             <div>
//                 <img src={shoe2} alt="" />
//                 <p>January 8 2022 /<span  className='text-gray-500 underline'>Fasion</span></p>
//                 <h4>The best red carpet awards from the NAACP image award is nominated for design awards</h4>
//                 <span className='text-gray-500 underline'>read more</span>
//             </div>
    
//         </div>
//      </section>
//   )
// }

// export default Downward

import React from 'react';
import { ArrowRight } from 'lucide-react';
import shoe2 from '../assets/shoe2.jpg';
import jacket from '../assets/jacket.jpg';

// Mock data that would come from your backend
const blogPosts = [
  {
    id: 1,
    image: shoe2,
    date: 'January 8, 2022',
    category: 'Fashion',
    title: 'The best red carpet awards from the NAACP image award is nominated for design awards',
    excerpt: 'Discover the stunning fashion moments from this year\'s awards ceremony...'
  },
  {
    id: 2,
    image: jacket,
    date: 'February 15, 2022',
    category: 'Style',
    title: 'Winter fashion trends that will dominate this season',
    excerpt: 'Explore the must-have pieces for your winter wardrobe...'
  },
  {
    id: 3,
    image: shoe2,
    date: 'March 22, 2022',
    category: 'Design',
    title: 'How celebrity stylists create award-winning looks',
    excerpt: 'Behind-the-scenes with Hollywood\'s top fashion curators...'
  }
];

const BlogSection = () => {
  return (
    <section className='px-4 sm:px-8 lg:px-16 py-12 bg-gray-50'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h3 className='text-2xl md:text-3xl font-bold mb-2'>Blog & Insights</h3>
          <p className='text-gray-600'>Must-have pieces selected every month</p>
        </div>

        {/* Blog Posts Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className='bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300'
            >
              <div className='aspect-video overflow-hidden'>
                <img 
                  src={post.image} 
                  alt={post.title}
                  className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
                />
              </div>
              
              <div className='p-6'>
                <p className='text-sm text-gray-500 mb-2'>
                  {post.date} / <span className='underline'>{post.category}</span>
                </p>
                <h4 className='text-xl font-semibold mb-3 line-clamp-2'>
                  {post.title}
                </h4>
                <p className='text-gray-600 mb-4 line-clamp-2'>
                  {post.excerpt}
                </p>
                <a 
                  href={`/blog/${post.id}`} 
                  className='inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors'
                >
                  Read more <ArrowRight size={16} className='ml-1' />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button (optional) */}
        <div className='text-center mt-12'>
          <button className='px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors'>
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;