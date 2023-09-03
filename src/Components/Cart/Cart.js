import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import OrderCart from '../OrderCart/index'
import Button from '../Button/index'
import { totalvalue } from '../../utility'
import { Link } from 'react-router-dom'
import './Styles.css'
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom'

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredCart = context.cartProducts.filter(product => product.id !== id)
        context.setCartProducts(filteredCart)
        context.setCount(context.count - 1)
    }
    const navigate = useNavigate();

    /// this one is for creating the orders ////
    const handleCheckout = () => {
        // Generate a unique order ID using uuidv4()
        const orderId = uuidv4();

        const orderToAdd = {
            id: orderId, // Add the unique order ID
            date: new Date().toLocaleDateString(),
            userId: context.loggedInUser.id,
            products: context.cartProducts,
            totalqty: context.cartProducts.length,
            TotalPrice: totalvalue(context.cartProducts)
        }
        context.setOrder([...context.order, orderToAdd])
        context.setCartProducts([])
        context.closeCheckoutSideMenu()

        /////// this bitch will basically save the orders into local storage//
        const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
        const updatedOrders = [...savedOrders, orderToAdd];
        localStorage.setItem('orders', JSON.stringify(updatedOrders));
        navigate(`/my-orders/${orderId}`);
        console.log("checking order: " + orderId)
    }


    return (
        <aside
            className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border`}>
            <div className='flex justify-between items-center'>
                <h2 >My Order</h2>
                <div
                    onClick={() => context.closeCheckoutSideMenu()}>X</div>
            </div>
            <div className='flex flex-col gap-1 overflow-y-scroll'>
                {
                    context.cartProducts?.map(product => (
                        <OrderCart
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.image}
                            price={product.price}
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
            <div className='total_cartvalue'>
                <div>
                    <p>Products Qty: {context.cartProducts.length}</p>
                    <p >Total Products:  <span className='font-bold'>${totalvalue(context.cartProducts)}</span></p>
                </div>
                <Button btn_action={() => handleCheckout()} text="Check out" />
            </div>
        </aside>
    )
}

export default CheckoutSideMenu