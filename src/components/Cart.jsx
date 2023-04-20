import { useState } from 'react';

export default function Cart({ cartItems, setCartItems }) {
  return (
    <div className='p- m-6 rounded-3xl bg-slate-200'>
      {cartItems.map((item) => (
        <div className='grid grid-cols-7'>
          <div
            key={item.title}
            className='col-span-6 mx-6 my-2	rounded-md border-2 border-yellow-200 bg-blue-900 p-2 font-bold uppercase text-white'
          >
            {item.title} - ${item.price}
          </div>
          <div className='items flex justify-center p-1'>
            <button className='rounded-l-xl bg-green-400 p-2 font-black active:-translate-x-1'>
              +
            </button>
            <button className='rounded-r-xl bg-red-500 p-2 font-black active:translate-x-1'>
              -
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
