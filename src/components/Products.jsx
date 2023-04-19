import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { v4 as uuidv4 } from 'uuid';
import fetchProducts from '../fetches/fetchProducts';
import ProductCard from './ProductCard';

export default function Products() {
  const queryClient = useQueryClient();

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  // We can assume by this point that `isSuccess === true`
  return (
    <ul>
      {data.map((product) => (
        <ProductCard key={uuidv4()} product={product} />
      ))}
    </ul>
  );
}
