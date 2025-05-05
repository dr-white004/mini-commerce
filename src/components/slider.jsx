// import React from "react";
// import { useState } from "react";
// import boy from '../assets/icons8-search-50.png' 
// import user from '../assets/icons8-user-50.png' 


// const slides = [
//     {
//       title: "Grow Your Brand", 
//       image: "https://via.placeholder.com/300x200",
//     },
//     {
//       title: "Boost Visibility",
//       image: "https://via.placeholder.com/300x200",
//     },
//     {
//       title: "Drive Sales",
//       image: "https://via.placeholder.com/300x200",
//     },
//   ];

// function Trying(){
//    const [current, setCurrent] = useState(0);
      

//     const prevfunc = ()=>{
//         setCurrent((prev) => (prev-1+slides.length)%slides.length )
//     }

//     const nextfunc = ()=>{
//         setCurrent((prev) => (prev + 1) % slides.length);
//     }

//     return(
//         <>

//         <div className=" relative w-full overflow-hidden bg-blue-100  ">
//             <div className="absolute flex justify-between top-1/2 z-10 w-full ">
               
//                 <img onClick={prevfunc} src={user} alt="user" className='w-auto h-[20px]' />
//                 <img onClick={nextfunc} src={boy} alt="seach" className='w-auto h-[20px]' />
//             </div>
//             <div className="flex transition-transform ease-in duration-500"  
//             style={{ transform: `translateX(-${current * 100}%)`, 
//             width:`${slides.length*100}%`}}>
//                 {slides.map((slide, index)=>(
//                     <div key= {index} className="grid grid-cols-2  w-full  h-[300px] flex-shrink-0">
//                         <div>
//                             <p>the {current} </p>
//                             <p>{slide.title}</p>

//                         </div>

//                         <img  src={user} alt="seach" className="h-[50px]" />
//                     </div>

//                 ))

//                 }

//             </div>

//         </div>

//         </>
//     )
// }


// export default Trying


import React, { useState } from "react";
import boy from "../assets/icons8-arrow-right-50.png";
import user from "../assets/icons8-arrow-left-30.png";
import use from "../assets/imageurl.png";

const slides = [
  {
    title: "Grow Your Brand",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Boost Visibility",
    image: "https://via.placeholder.com/300x200",
  },
  {
    title: "Drive Sales",
    image: "https://via.placeholder.com/300x200",
  },
];

function Trying() {
  const [current, setCurrent] = useState(0);

  const prevfunc = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextfunc = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full overflow-hidden bg-sky-50 h-[300px]">
      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4 z-10">
        <img
          onClick={prevfunc}
          src={user}
          alt="prev"
          className="w-6 h-6 cursor-pointer"
        />
        <img
          onClick={nextfunc}
          src={boy}
          alt="next"
          className="w-6 h-6 cursor-pointer"
        />
      </div>

      {/* Slider */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
          width: `${slides.length * 100}%`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full flex py-20  items-center gap-20 px-20"
          >
            <div className=" text-center">
              <p className="text-xl font-bold mb-2">{slide.title}</p>
              <p className="text-gray-600">Slide {index + 1}</p>
            </div>

            <img src={use} alt={slide.title} className="h-[70px]" />
           
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trying;
