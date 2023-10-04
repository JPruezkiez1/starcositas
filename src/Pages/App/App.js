import Store from '../Store/index';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Use Routes and Route instead of useRoutes
import Navbar from '../../Components/Navbar';
import { ShoppingCartProvider } from '../../Context';
import CheckoutSideMenu from '../../Components/SideMenu/Cart';
import MyOrder from '../OrderDetails';
import NotFound from '../NotFound';
import Login from '../Login';
import Users from '../Users/Users.js';
import AllOrders from '../AllOrders';
import MyProfile from '../MyProfile';
import UserProfile from '../UserProfile/index.js';
import Register from '../Register/index.js';
import Orders from '../Orders/index.js';
import ProtectedRoute from '../../utility/Routes';
import { AuthRoutes } from '../../utility/Routes';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute><Store /></ProtectedRoute>} />
      <Route path="/:category" element={<ProtectedRoute><Store /></ProtectedRoute>} />
      <Route path="/Register" element={<AuthRoutes><Register /></AuthRoutes>} />
      <Route path="/login" element={<AuthRoutes><Login /></AuthRoutes>} />
      <Route path="/users" element={<ProtectedRoute><Users /></ProtectedRoute>} />
      <Route path="/my-order/:orderId" element={<ProtectedRoute><MyOrder /></ProtectedRoute>} />
      <Route path="/allorders" element={<ProtectedRoute><AllOrders /></ProtectedRoute>} />
      <Route path="/check/:orderId" element={<MyOrder />} />
      <Route path="/myprofile" element={<ProtectedRoute><MyProfile /></ProtectedRoute>} />
      <Route path="/user/" element={<UserProfile />} />
      <Route path="/user/:username" element={<UserProfile />} />
      <Route path="/my-orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Navbar />
        <CheckoutSideMenu />
        <AppRoutes />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}
export default App;
