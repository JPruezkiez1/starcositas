import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { ShoppingCartContext } from '../Context';

const ProtectedRoute = ({ children }) => {
    const { isLogged } = useContext(ShoppingCartContext);

    return isLogged ? children : <Navigate to="/landing" />;
};

const AuthRoutes = ({ children }) => {
    const context = useContext(ShoppingCartContext); // Access the context

    // Check if the user is logged in
    if (context.isLogged) {
        return <Navigate to="/" />; // Render the child components if logged in
    } else {
        // Redirect to the home page or any other page for non-logged-in users
        return children;
    }
};



export { AuthRoutes };
export default ProtectedRoute;