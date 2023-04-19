import Products from './components/Products';
import Header from './components/Header';
import SubHeader from './components/SubHeader';

import {
  useQuery,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header></Header>
      <SubHeader />
      <Products />
    </QueryClientProvider>
  );
}

export default App;
