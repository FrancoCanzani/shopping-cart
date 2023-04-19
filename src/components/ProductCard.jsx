import { useState, useRef } from 'react';

export default function ProductCard({ product }) {
  const [shippingDays] = useState(Math.floor(Math.random() * 12) + 2);
  const [shippingDaysPrime] = useState(Math.floor(shippingDays / 2));

  return (
    <div className='m-4 max-w-sm border-2 border-stone-100 p-8 shadow-sm shadow-amber-100'>
      <div className='bg flex w-full items-center justify-center'>
        <img src={product.image} alt='Product picture' className='mb-4 w-36' />
      </div>
      <h1 className='text-lg font-medium uppercase'>{product.title}</h1>
      <h2 className='mb-3 text-xs uppercase'>{product.category}</h2>
      <div className='flex items-center justify-start'>
        <span className='mr-1 flex w-12 items-center justify-center rounded-sm bg-yellow-400 font-medium text-white'>
          {product.rating.rate}/5
        </span>
        <span className='font-extralight italic'>
          {' '}
          ({product.rating.count} reviews)
        </span>
      </div>
      <div className='my-4 flex items-center justify-start'>
        <span className='mr-4 block w-20 rounded-sm bg-teal-700 p-1 text-center text-xl font-semibold text-white shadow-lg shadow-slate-300'>
          ${product.price}
        </span>
        <button className='rounded-sm bg-amber-500 p-1 text-center text-xl font-semibold uppercase text-white shadow-lg shadow-slate-300 hover:-translate-y-1 hover:bg-amber-300'>
          Add to cart
        </button>
      </div>
      <span className='block text-sm font-semibold uppercase'>
        Buy now, get it in {shippingDays} days
      </span>
      <span className='block text-sm font-semibold uppercase'>
        {shippingDaysPrime <= 2
          ? 'Buy now, get it tomorrow'
          : `Get it in ${shippingDaysPrime} days with`}

        <span className='ml-1 text-lg font-extrabold uppercase italic text-blue-800 hover:text-blue-700'>
          Lefts Express
        </span>
      </span>
    </div>
  );
}
