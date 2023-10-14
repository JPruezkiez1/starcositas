import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { ShoppingCartContext } from '../Context';

const ProtectedRoute = ({ children }) => {
    const { isLogged } = useContext(ShoppingCartContext);

    return isLogged ? children : <Navigate to="/landing" />;
};

const AuthRoutes = ({ children }) => {
    const context = useContext(ShoppingCartContext);
    if (context.isLogged) {
        return <Navigate to="/" />;
    } else {
        return children;
    }
};



export { AuthRoutes };
export default ProtectedRoute;