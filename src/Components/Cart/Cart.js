import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import OrderCart from '../OrderCart/index'
import './Styles.css'

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)
    console.log('CART: ', context.cartProducts)
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
                    context.cartProducts.map(product => (
                        <OrderCart
                            key={product.id}
                            title={product.title}
                            imageUrl={product.image}
                            price={product.price}
                        />

                    ))
                }
            </div>
        </aside>
    )
}

export default CheckoutSideMenu