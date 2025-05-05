import React from 'react'
import boy from '../assets/icons8-search-50.png' 
import user from '../assets/icons8-user-50.png' 
import cart from '../assets/icons8-cart-50.png' 

const Navbar = () => {
  return (
    <header className='flex flex-col bg-sky-50'>
        <div className='flex justify-between px-16 py-2 '>
            <div className='flex gap-8 px-8 '>
                <p>Open doors to a world</p>
                <p className='font-bold'>Discover more</p>
            </div>
           
           <div className='flex gap-8'>
                <span>English</span>
                <span>Usd</span>

           </div>
        </div>

        <hr className='w-full'/>
        <nav className='flex justify-between px-16 py-4 '>
              <ul className='flex justify-between gap-8 px-8'>
                <li>Home</li>
                <li>Shop</li>
                <li>Pages</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>

              <p className='font-bold'>UNICOZ</p>

              <div className='grid grid-cols-3 gap-4'>
                <img src={cart} alt="cart" className='w-auto h-[20px]' />
                <img src={user} alt="user" className='w-auto h-[20px]' />
                <img src={boy} alt="seach" className='w-auto h-[20px]' />
              </div>
        </nav>
    </header>
  )
}

export default Navbar