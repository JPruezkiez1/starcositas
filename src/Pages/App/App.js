import Store from '../Store/index';
import './App.css';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import Navbar from '../../Components/Navbar'
import { ShoppingCartProvider } from '../../Context';
import CheckoutSideMenu from '../../Components/SideMenu/Cart';
import MyOrder from '../OrderDetails';
import NotFound from '../NotFound';
import Login from '../Login';
import Users from '../Users/Users.js';
import UserCard from '../../Components/UserCard/UserCard';
import AllOrders from '../AllOrders';
import MyProfile from '../MyProfile';
import UserProfile from '../UserProfile/index.js';
import Register from '../Register/index.js';
import OrderList from '../../Components/OrdersList';
import Orders from '../Orders/index.js';

const AppRoutes = () => {

  let routes = useRoutes([
    { path: '/', element: <Store /> },
    { path: '/home', element: <Store /> },
    { path: '/Register', element: <Register /> },
    { path: '/Order', element: <MyOrder /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/*', element: <NotFound /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/electronics', element: <Store /> },
    { path: '/login', element: <Login /> },
    { path: '/jewelry', element: <Store /> },
    { path: '/users', element: <Users /> },
    { path: '/card', element: <UserCard /> },
    { path: '/my-order/:orderId', element: <MyOrder /> },
    { path: '/allorders', element: <AllOrders /> },
    { path: '/check/:orderId', element: <MyOrder /> },
    { path: '/myprofile', element: <MyProfile /> },
    { path: '/user/', element: <UserProfile /> },
    { path: '/user/:username', element: <UserProfile /> },
    { path: '/my-orders', element: <Orders /> },
    { path: '/list', element: <OrderList /> },
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
