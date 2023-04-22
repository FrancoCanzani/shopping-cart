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

  function handleAddItem(item) {
    const newCartItems = [...cartItems, item];
    setCartItems(newCartItems);
  }

  useEffect(() => {
    let totalPriceToPay = 0;
    for (let i = 0; i < cartItems?.length; i++) {
      totalPriceToPay += cartItems[i].price;
    }
    setTotalPrice(totalPriceToPay);
  }, [cartItems]);

  if (!cartItems) {
    return (
      <div className='m-6 bg-slate-100 p-2 text-center font-bold uppercase'>
        Loading...
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className='m-6 bg-slate-100 p-2 text-center font-bold uppercase sm:mx-36 sm:px-14 sm:py-8'>
        Your cart is empty
      </div>
    );
  }

  // Create a new array of items grouped by ID with a count
  const groupedItems = cartItems.reduce((acc, item) => {
    const existingItem = acc.find((groupedItem) => groupedItem.id === item.id);
    if (existingItem) {
      existingItem.count += 1;
    } else {
      acc.push({
        id: item.id,
        title: item.title,
        price: item.price,
        count: 1,
      });
    }
    return acc;
  }, []);

  return (
    <div className='flex items-center justify-center'>
      <div className='max-w-5xlxl m-6 rounded-lg bg-slate-100 p-2 text-center sm:mx-36 sm:px-14 sm:py-8'>
        <h1 className='m-4 text-3xl font-extrabold uppercase italic text-blue-800 hover:text-blue-700'>
          Your purchase
        </h1>
        {groupedItems.map((item) => (
          <div
            className='grid grid-cols-12 items-center justify-center'
            key={uuidv4()}
          >
            <div className='border-grey-200 col-span-11 my-2 rounded-l-md border-2 bg-white p-3 font-mono text-sm font-bold uppercase'>
              {item.title} - ${item.price} x {item.count}
            </div>
            <div className='border-grey-200 border-2d col-span-1 flex flex-col'>
              <button
                onClick={() => {
                  handleAddItem(item);
                }}
                className='border-grey-200 rounded-tr-md border-r-2 border-t-2 bg-green-600 p-0.5 font-mono text-sm font-black uppercase text-white active:translate-x-1'
              >
                +
              </button>
              <button
                onClick={() => {
                  handleRemoveItem(item);
                }}
                className='border-grey-200 rounded-br-md border-b-2 border-r-2 bg-red-600 p-0.5 font-mono text-sm font-black uppercase text-white active:translate-x-1'
              >
                -
              </button>
            </div>
          </div>
        ))}
        <p className=' mx-auto my-3 w-4/12 rounded-lg border-2 bg-white p-2 font-extrabold uppercase'>
          Total: ${totalPrice?.toFixed(2)}
        </p>
        <button className='mb-6 rounded-md bg-green-600 p-2 font-black uppercase text-white active:translate-y-1'>
          Pay now
        </button>
      </div>
    </div>
  );
}
