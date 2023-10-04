import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import CartItems from '../CartItems/index'
import Button from '../Button/index'
import { totalvalue } from '../../utility'
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
    const handleCheckout = async () => {
        try {
            const orderId = generateShortId(8);
            const orderToAdd = {
                id: orderId,
                customer_id: context.loggedInUser.id,
                date: "2023-09-30",
                products: context.cartProducts.map(product => ({
                    product_id: product.id,
                    quantity: product.quantity
                }))
            };
            const response = await fetch('jpruezkiez.azurewebsites.net/add-order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderToAdd),
            });
            if (response.ok) {
                context.setCartProducts([]);
                context.closeCheckoutSideMenu();
                window.location.href = `/check/${orderId}`;
            } else {
            }
        } catch (error) {
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