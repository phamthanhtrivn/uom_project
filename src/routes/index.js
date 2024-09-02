import LayoutDefault from '~/LayoutDefault';
import Cart from '~/pages/Cart';
import Contact from '~/pages/Contact';
import Home from '~/pages/Home';
import Introduce from '~/pages/Introduce';
import Account from '~/pages/Account';
import News from '~/pages/News';
import Product from '~/pages/Product';
import ProductDetail from '~/pages/ProductDetail';
import User from '~/pages/User';

export const routes = [
  {
    path: '/',
    element: <LayoutDefault />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/introduce',
        element: <Introduce />,
      },
      {
        path: '/product',
        element: <Product />,
      },
      {
        path: '/product-detail:id',
        element: <ProductDetail />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/account',
        element: <Account />,
      },
      {
        path: '/news',
        element: <News />,
      },
      {
        path: '/user',
        element: <User />,
      },
    ],
  },
];
