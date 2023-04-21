import Products from './components/Products';
import Header from './components/Header';
import Cart from './components/Cart';
import SubHeader from './components/SubHeader';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import { useState } from 'react';

const queryClient = new QueryClient();

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header cartItems={cartItems} />
        <SubHeader />
        <Routes>
          <Route
            path='/'
            element={
              <Products setCartItems={setCartItems} cartItems={cartItems} />
            }
          />
          <Route
            path='/cart'
            element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
          />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
