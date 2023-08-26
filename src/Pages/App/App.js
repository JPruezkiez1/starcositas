import Store from '../Store/index';
import './App.css';
import Register from '../Register/index'
import { BrowserRouter, useRoutes } from 'react-router-dom';
import Navbar from '../../Components/Navbar'
import { ShoppingCartProvider } from '../../Context';
import CheckoutSideMenu from '../../Components/Cart/Cart';

const AppRoutes = () => {

  let routes = useRoutes([
    { path: '/', element: <Store /> },
    { path: '/Register', element: <Register /> },
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
