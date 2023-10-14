import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import CartItems from '../CartItems/index'
import Button from '../Button/index'
import { totalvalue } from '../../utility'
import Orders from '../../Data/orders.json';
import './Styles.css'


const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext)
    const updateQuantity = (productId, newQuantity) => {
        const updatedCart = context.cartProducts.map((product) => {
            if (product.id === productId) {
                return { ...product, quantity: newQuantity };
            }
            return product;
        });
        context.setCartProducts(updatedCart);
    };


    function generateShortId(length) {
        const characters = 'ABCDE0123456789';
        let shortId = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            shortId += characters[randomIndex];
        }
        return shortId;
    }


    const handleDelete = (id) => {
        const filteredCart = context.cartProducts.filter(product => product.id !== id);
        context.setCartProducts(filteredCart);
        context.setCount(context.count - 1);

        if (filteredCart.length === 0) {
            context.closeCheckoutSideMenu();
        }
    };
    const handleCheckout = () => {
        try {
            const orderId = generateShortId(8);
            const currentDate = new Date().toISOString().slice(0, 10);
            const orderToAdd = {
                id: orderId,
                userId: context.loggedInUser.id,
                date: currentDate,
                products: context.cartProducts.map(product => ({
                    product_id: product.id,
                    quantity: product.quantity
                }))
            };


            const ordersFromLocalStorage = localStorage.getItem('orders');
            const existingOrders = ordersFromLocalStorage ? JSON.parse(ordersFromLocalStorage) : Orders;
            const updatedOrders = [...existingOrders, orderToAdd];
            localStorage.setItem('orders', JSON.stringify(updatedOrders));
            context.setCartProducts([]);
            context.closeCheckoutSideMenu();
            window.location.href = `/check/${orderId}`;
        } catch (error) {
            console.error("Error saving order to local storage: ", error);
        }
    };


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
                        <CartItems
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.image}
                            quantity={product.quantity}
                            updateQuantity={updateQuantity}
                            price={product.price}
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
            <div className='total_cartvalue'>
                <div>
                    <p>Products Qty: {context.cartProducts.reduce((totalQty, product) => totalQty + product.quantity, 0)}</p>
                    <p >Total Products:  <span className='font-bold'>${totalvalue(context.cartProducts)}</span></p>
                </div>
                <Button btn_action={() => handleCheckout()} text="Check out" />
            </div>
        </aside>
    )
}

export default CheckoutSideMenu