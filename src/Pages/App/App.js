import Store from '../Store/index';
import './App.css';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import Navbar from '../../Components/Navbar'
import { ShoppingCartProvider } from '../../Context';
import CheckoutSideMenu from '../../Components/SideMenu/Cart';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import Login from '../Login';
import Users from '../Users/Users.js';
import UserCard from '../../Components/UserCard/UserCard';
import AllOrders from '../AllOrders';
import Allordercheck from '../Allordercheck';
import MyProfile from '../MyProfile';
import UserProfile from '../UserProfile/index.js';

const AppRoutes = () => {

  let routes = useRoutes([
    { path: '/', element: <Store /> },
    { path: '/home', element: <Store /> },
    // { path: '/Register', element: <Register /> },
    { path: '/Order', element: <MyOrder /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders/last', element: <MyOrder /> },
    { path: '/*', element: <NotFound /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/orders', element: <MyOrders /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/electronics', element: <Store /> },
    { path: '/login', element: <Login /> },
    { path: '/jewelry', element: <Store /> },
    { path: '/users', element: <Users /> },
    { path: '/card', element: <UserCard /> },
    { path: '/my-orders/:orderId', element: <MyOrder /> },
    { path: '/allorders', element: <AllOrders /> },
    { path: '/check/:orderId', element: <Allordercheck /> },
    { path: '/myprofile', element: <MyProfile /> },
    { path: '/user/', element: <UserProfile /> },
    { path: '/user/:userid', element: <UserProfile /> },
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
