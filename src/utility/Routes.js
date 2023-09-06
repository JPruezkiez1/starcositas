import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { ShoppingCartContext } from '../Context';

const ProtectedRoute = ({ children }) => {
    const { isLogged } = useContext(ShoppingCartContext);

    return isLogged ? children : <Navigate to="/landing" />;
};

export default ProtectedRoute;