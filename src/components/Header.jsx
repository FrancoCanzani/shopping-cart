import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='sticky top-0 z-50 flex items-center justify-between bg-slate-100 px-16 py-2'>
      <div className='px-4 py-2'>
        <Link to='./Products' className='flex items-center justify-center'>
          <img src='src/assets/images/rayo.png' alt='Logo' className='w-8' />
          <h1 className='text-3xl font-extrabold uppercase italic text-blue-800 hover:text-blue-700'>
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
