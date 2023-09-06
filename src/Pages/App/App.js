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
import Landing from '../../Pages/Landingpage/index.js'
import Orders from '../Orders/index.js';
import ProtectedRoute from '../../utility/Routes';



const AppRoutes = () => {

  let routes = useRoutes([
    { path: '/', element: <ProtectedRoute><Store /></ProtectedRoute> },
    { path: '/home', element: <ProtectedRoute><Store /></ProtectedRoute> },
    { path: '/Register', element: <Register /> },
    { path: '/Order', element: <MyOrder /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/*', element: <NotFound /> },
    { path: '/my-orders/:id', element: <MyOrder /> },
    { path: '/electronics', element: <ProtectedRoute><Store /></ProtectedRoute> },
    { path: '/login', element: <Login /> },
    { path: '/jewelry', element: <ProtectedRoute><Store /></ProtectedRoute> },
    { path: '/users', element: <Users /> },
    { path: '/card', element: <UserCard /> },
    { path: '/my-order/:orderId', element: <MyOrder /> },
    { path: '/testie', element: <ProtectedRoute><AllOrders /></ProtectedRoute> },
    { path: '/allorders', element: <AllOrders /> },
    { path: '/check/:orderId', element: <MyOrder /> },
    { path: '/myprofile', element: <MyProfile /> },
    { path: '/user/', element: <UserProfile /> },
    { path: '/user/:username', element: <UserProfile /> },
    { path: '/my-orders', element: <Orders /> },
    { path: '/list', element: <OrderList /> },
    { path: '/landing', element: <Landing /> },
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