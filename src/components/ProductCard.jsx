import { useState } from 'react';

export default function ProductCard({ product }) {
  return (
    <div className='m-4 max-w-sm border-2 border-stone-100 p-8 shadow-sm shadow-amber-100'>
      <div className='flex items-center justify-center'>
        <img src={product.image} alt='Product picture' className='mb-4 w-36' />
      </div>
      <h1 className='text-lg font-medium uppercase'>{product.title}</h1>
      <h2 className='mb-3 text-xs uppercase'>{product.category}</h2>
      <span className='mb-6 block w-12 bg-yellow-400 text-white'>
        {product.rating.rate}/5
      </span>
      <span className='inline-block rounded-sm bg-teal-700 p-1 text-xl font-semibold text-white shadow-lg shadow-slate-300'>
        ${product.price}
      </span>
    </div>
  );
}
