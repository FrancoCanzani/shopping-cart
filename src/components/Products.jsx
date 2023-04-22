import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { v4 as uuidv4 } from 'uuid';
import fetchProducts from '../fetches/fetchProducts';
import ProductCard from './ProductCard';

export default function Products({ cartItems, setCartItems }) {
  const queryClient = useQueryClient();

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return (
      <span className='mt-32 flex animate-bounce items-center justify-center text-3xl uppercase'>
        💫
      </span>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  // We can assume by this point that `isSuccess === true`
  return (
    <div className='flex flex-wrap justify-center'>
      {data.map((product) => (
        <ProductCard
          key={uuidv4()}
          product={product}
          setCartItems={setCartItems}
          cartItems={cartItems}
        />
      ))}
    </div>
  );
}
