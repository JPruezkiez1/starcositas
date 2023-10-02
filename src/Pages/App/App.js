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
import NewView from '../../Components/ProductDetail/NewView';
import { AuthRoutes } from '../../utility/Routes';


const AppRoutes = () => {

  let routes = useRoutes([
    { path: '/', element: <ProtectedRoute><Store /></ProtectedRoute> },
    { path: '/home', element: <ProtectedRoute><Store /></ProtectedRoute> },
    { path: '/Register', element: <AuthRoutes><Register /></AuthRoutes> },
    { path: '/*', element: <NotFound /> },
    { path: '/electronics', element: <ProtectedRoute><Store /></ProtectedRoute> },
    { path: '/login', element: <AuthRoutes><Login /></AuthRoutes> },
    { path: '/jewelry', element: <ProtectedRoute><Store /></ProtectedRoute> },
    { path: '/users', element: <ProtectedRoute><Users /></ProtectedRoute> },
    { path: '/card', element: <ProtectedRoute><UserCard /></ProtectedRoute> },
    { path: '/my-order/:orderId', element: <ProtectedRoute><MyOrder /></ProtectedRoute> },
    { path: '/allorders', element: <ProtectedRoute><AllOrders /></ProtectedRoute> },
    { path: '/check/:orderId', element: <MyOrder /> },
    { path: '/myprofile', element: <ProtectedRoute><MyProfile /></ProtectedRoute> },
    { path: '/user/', element: <UserProfile /> },
    { path: '/user/:username', element: <UserProfile /> },
    { path: '/my-orders', element: <ProtectedRoute><Orders /></ProtectedRoute> },
    { path: '/list', element: <ProtectedRoute><OrderList /></ProtectedRoute> },
    { path: '/landing', element: <Landing /> },
    { path: '/view', element: <NewView /> },
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