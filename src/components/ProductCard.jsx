import { useState } from 'react';

export default function ProductCard({ product }) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className='m-4 border-2 border-stone-100 p-12 shadow-amber-100'>
      <img src={product.image} alt='Product picture' className='w-36' />
      <h1 className='text-lg font-medium uppercase'>{product.title}</h1>
      {isExpanded ? (
        <>
          <p className='italic'>{product.description}</p>
          <button>Show more</button>
        </>
      ) : (
        <p className='italic'>{product.description}.slice(0,5)</p>
      )}
      <span>${product.price}</span>
      <span>{product.rate}</span>
    </div>
  );
}
