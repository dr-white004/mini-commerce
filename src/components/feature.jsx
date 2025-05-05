import React from 'react'
import bag1 from '../assets/bag1.jpg'
import bag2 from '../assets/bag2.jpg'
import jacket from '../assets/jacket.jpg'
import pant from '../assets/pant.jpg'
import shoe2 from '../assets/shoe2.jpg'

const Feature = () => {
  return (
    <section>
        <section className='flex flex-col justify-center  w-full px-4'>
            <div className='text-center py-8'>
                <h4 className='font-bold'> Recently Added</h4>
                <p>Must have pieces every month</p>
            </div>
            <div className='flex justify-around items-center w-full py-8'>
                <img src={shoe2} alt=""  className='h-30 w-30 rounded-full'/>
                <img src={jacket} alt="" className='h-30 w-30 rounded-full'/>
                <img src={bag1} alt="" className='h-30 w-30 rounded-full'/>
                <img src={bag2} alt="" className='h-30 w-30 rounded-full' />
                <img src={pant} alt="" className='h-30 w-30 rounded-full' />
            </div>
       </section>
        <section className='flex flex-col justify-center  w-full px-4'>
            <div className='text-center py-8'>
                <h4 className='font-bold'> Frequently Added</h4>
                <p>Must have pieces every month</p>
            </div>
            <div className='flex flex-col justify-around items-center w-full py-8'>
              <div className='flex justify-around items-center w-full py-8'>
                    <div>
                    <img src={shoe2} alt=""  className='h-30 w-30 rounded-full'/>
                    <span>shoes</span>
                    </div>
                    <div>
                    <img src={jacket} alt="" className='h-30 w-30 rounded-full'/>
                    <span>shoes</span>
                    </div>
                    <div>
                    <img src={bag1} alt="" className='h-30 w-30 rounded-full'/>
                    <span>shoes</span>
                    </div>
                </div>
              <div className='flex justify-around items-center w-full py-8'>
                    <div>
                    <img src={shoe2} alt=""  className='h-30 w-30 rounded-full'/>
                    <span>shoes</span>
                    </div>
                    <div>
                    <img src={jacket} alt="" className='h-30 w-30 rounded-full'/>
                    <span>shoes</span>
                    </div>
                    <div>
                    <img src={bag1} alt="" className='h-30 w-30 rounded-full'/>
                    <span>shoes</span>
                    </div>
                </div>
               
            </div>
       </section>
    </section>
  )
}

export default Feature