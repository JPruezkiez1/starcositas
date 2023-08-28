import { NavLink } from 'react-router-dom'
import './Styles.css'
import Icon from './Icon'
import CartIcon from './ShoppingCarticon'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context/index'


export default function Navbar() {
    const context = useContext(ShoppingCartContext)
    return (
        <nav className='navbar_01'>
            <div className='icon_navbar_02'>
                <NavLink to='/'>
                    <Icon className="icon" />
                </NavLink>
                <ul className='navbar_02'>

                    <li>
                        <NavLink to='/'>
                            StarCositas
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>
                            All
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>
                            Category Example
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
                    <li>
                        <NavLink to='/Register'>
                            Create Account
                        </NavLink>
                    </li>

                </ul>
                <CartIcon className="cart_icon" >
                </CartIcon>
                <div className='cart_count'>{context.count}</div>
            </div>
        </nav>


    )

};
