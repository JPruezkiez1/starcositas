import Store from '../Store/index';
import './App.css';
import Register from '../Register/index'
import { BrowserRouter, useRoutes } from 'react-router-dom';
import Navbar from '../../Components/Navbar'
import { ShoppingCartProvider } from '../../Context';
import CheckoutSideMenu from '../../Components/Cart/Cart';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';

const AppRoutes = () => {

  let routes = useRoutes([
    { path: '/', element: <Store /> },
    { path: '/home', element: <Store /> },
    { path: '/Register', element: <Register /> },
    { path: '/Order', element: <MyOrder /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/*', element: <NotFound /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/orders', element: <MyOrders /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/electronics', element: <Store /> },

  ])
  return routes
}

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
