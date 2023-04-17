import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='flex items-center justify-between px-16 py-4 bg-slate-100 '>
      <div className='bg-white shadow-2xl py-2 px-4 rounded-xl'>
        <Link to='/products' className='flex items-center justify-center'>
          <img src='src/assets/images/rayo.png' alt='Logo' className='w-8' />
          <h1 className='text-3xl italic font-extrabold uppercase text-blue-800 hover:text-blue-700'>
            Lefts
          </h1>
        </Link>
      </div>
      <Link to='/cart'>
        <img
          src='src/assets/images/shopping-cart.svg'
          alt='Shopping cart icon'
          className='w-7 hover:opacity-70'
        />
      </Link>
    </header>
  );
}
