import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Cart({ cartItems, setCartItems }) {
  const [totalPrice, setTotalPrice] = useState(null);

  function handleRemoveItem(item) {
    const indexToRemove = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    const newCartItems = [...cartItems];
    newCartItems.splice(indexToRemove, 1);
    return setCartItems(newCartItems);
  }

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
    <div className='m-6 rounded-lg bg-slate-100 p-2 text-center'>
      {cartItems.map((item) => (
        <div className='grid grid-cols-7 text-left' key={uuidv4()}>
          <div className='border-grey-200 col-span-6 my-1 ml-6 rounded-l-md border-2 bg-white p-2 font-mono text-sm font-bold uppercase'>
            {item.title} - ${item.price}
          </div>
          <button
            onClick={() => {
              handleRemoveItem(item);
            }}
            className='border-grey-200 my-1 rounded-r-xl bg-red-600 font-mono text-sm font-black uppercase text-white active:translate-x-1'
          >
            Take out
          </button>
        </div>
      ))}
      <p className=''>Total: ${totalPrice?.toFixed(2)}</p>
      <button className='m-8 rounded-xl bg-green-300 p-2 font-black uppercase'>
        Pay now
      </button>
    </div>
  );
}
