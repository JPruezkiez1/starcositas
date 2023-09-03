import { NavLink, useNavigate } from 'react-router-dom';
import './Styles.css';
import Icon from './Icon';
import CartIcon from './ShoppingCarticon';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context/index';


export default function Navbar() {
    const context = useContext(ShoppingCartContext);
    const logoutmainpage = useNavigate();
    const opencartfromnav = () => {

        context.openCheckoutSideMenu()
    }


    const logout = () => {
        localStorage.removeItem('loggedInUser');
        context.setLoggedInUser(null);
        context.setIsLogged(false);
        context.setCartProducts([])
        context.closeCheckoutSideMenu()
        logoutmainpage('/');
    };
    const active = 'active_001'
    const renderLoginLinks = () => {
        if (!context.isLogged) {
            return (
                <>
                    <li >
                        <NavLink className={({ isActive }) =>
                            isActive ? active : 'hover_001'
                        } to='/Register'>Create Account</NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive ? active : 'hover_001'
                        } to='/Login'>Login</NavLink>
                    </li>
                </>
            );
        } else {
            return (
                <>
                    <div className='hover_001'>{context.loggedInUser && context.loggedInUser.username}</div>
                    <div className='hover_001' onClick={logout}>Logout</div>
                </>
            );
        }
    };
    return (
        <nav className='navbar_01'>
            <div className='icon_navbar_02'>
                <NavLink to='/'>
                    <Icon className="icon" />
                </NavLink>
                <ul className='navbar_02'>
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive ? active : 'hover_001'
                        }
                            onClick={() => context.setSearchCategory('')} to='/'>
                            StarCositas
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive ? active : 'hover_001'
                        }
                            onClick={() => context.setSearchCategory('jewelery')}
                            to='/jewelry'>

                            jewelry
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive ? active : 'hover_001'
                        } to='/users'>
                            users
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='icon_navbar_03'>
                <ul className='navbar_03'>
                    <li>
                        <NavLink className={({ isActive }) =>
                            isActive ? active : 'hover_001'
                        } to='/my-orders'>
                            My Orders
                        </NavLink>
                    </li>
                    {renderLoginLinks()}
                </ul>
                <CartIcon onClick={opencartfromnav} className="cart_icon hover_002">
                </CartIcon>
                <div className='cart_count'>{context.cartProducts.length}</div>
            </div>
        </nav>
    );
}
