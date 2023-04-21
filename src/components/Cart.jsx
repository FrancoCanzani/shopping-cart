import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Cart({ cartItems, setCartItems }) {
  const [totalPrice, setTotalPrice] = useState(null);

  useEffect(() => {
    let totalPriceToPay = 0;
    for (let i = 0; i < cartItems?.length; i++) {
      totalPriceToPay += cartItems[i].price;
    }
    setTotalPrice(totalPriceToPay);
  }, [cartItems]);

  if (!cartItems) {
    return <div>Loading...</div>;
  }

  if (cartItems.length === 0) {
    return <div>Your cart is empty</div>;
  }

  return (
    <div className='m-6 rounded-3xl bg-slate-200 text-center'>
      {cartItems.map((item) => (
        <div className='grid grid-cols-7 text-left' key={uuidv4()}>
          <div className='col-span-6 mx-6 my-2 rounded-md border-2 border-yellow-200 bg-blue-900 p-2 font-bold uppercase text-white'>
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
      <p>Total is: ${totalPrice?.toFixed(2)}</p>
      <button className='m-8 rounded-xl bg-green-300 p-2 font-black uppercase'>
        Pay now
      </button>
    </div>
  );
}
