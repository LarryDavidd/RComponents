import { SearchResult } from '../components/SearchResults/SearchResult';
import { Card } from '../components/Card/Card';

const routes = [
  {
    path: '/',
    element: <SearchResult />,
  },
  {
    path: '/cards/:id',
    element: <Card />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
];

export default routes;
