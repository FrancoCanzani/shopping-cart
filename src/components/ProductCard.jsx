import { useState } from 'react';

export default function ProductCard({ product }) {
  const [shippingDays] = useState(Math.floor(Math.random() * 12) + 2);

  return (
    <div className='relative m-4 h-96 w-80 rounded-lg border-2 border-green-800 p-6'>
      <div className='flex min-w-full items-center justify-center'>
        <img src={product.image} alt='Product picture' className='h-32' />
      </div>
      <div className='absolute bottom-2'>
        <h1 className='text-base font-medium uppercase'>{product.title}</h1>
        <h2 className='mb-3 text-xs uppercase'>{product.category}</h2>
        <div className='flex items-center justify-start'>
          <span className='mr-1 flex w-10 items-center justify-center rounded-sm bg-yellow-400 font-medium text-white'>
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
          <button className='rounded-sm bg-amber-500 p-1 text-center text-xl font-semibold uppercase text-white shadow-lg shadow-slate-300 hover:bg-amber-300 active:translate-y-1'>
            Add to cart
          </button>
        </div>
        <span className='text-xs font-thin uppercase'>
          Buy now, get it in {shippingDays} days
        </span>
      </div>
    </div>
  );
}
