import { NavLink } from 'react-router-dom';
import './Styles.css';
import Icon from './Icon';
import CartIcon from './ShoppingCarticon';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context/index';

export default function Navbar() {
    const context = useContext(ShoppingCartContext);

    // Function to conditionally render login and create account links
    const renderLoginLinks = () => {
        if (!context.isLogged) {
            return (
                <>
                    <li>
                        <NavLink to='/Register'>Create Account</NavLink>
                    </li>
                    <li>
                        <NavLink to='/Login'>Login</NavLink>
                    </li>
                </>
            );
        } else {
            return (
                <>
                    <div>{context.loggedInUser && context.loggedInUser.username}</div>
                    <div onClick={() => context.setIsLogged(false)}>Logout</div>
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
                        <NavLink onClick={() => context.setSearchCategory('')} to='/'>
                            StarCositas
                        </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => context.setSearchCategory('')} to='/'>
                            All
                        </NavLink>
                    </li>
                    <li>
                        <NavLink onClick={() => context.setSearchCategory('electronics')} to='/electronics'>
                            Electronics
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className='icon_navbar_03'>
                <ul className='navbar_03'>
                    <li>
                        <NavLink to='/my-orders'>
                            My Orders
                        </NavLink>
                    </li>
                    {renderLoginLinks()} {/* Call the renderLoginLinks function */}
                </ul>
                <CartIcon className="cart_icon">
                </CartIcon>
                <div className='cart_count'>{context.cartProducts.length}</div>
            </div>
        </nav>
    );
}
