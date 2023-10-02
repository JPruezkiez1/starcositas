import OrderSummary from '../OrderSummary';
import Layout from '../Layout';
import './Styles.css';
import { useContext } from 'react';
import { Title } from '../Title';
import { ShoppingCartContext } from '../../Context';

export default function OrderList({ orders }) {
    const context = useContext(ShoppingCartContext);

    return (
        <Layout>

            {context.isLogged ? (
                <div className='orderlist_container_1'>
                    <div className='test_002'>
                        {orders.map(order => (
                            <div key={order.id}>
                                <div className='separated_order'>
                                    <div className='orderlist_container_2'>
                                        <p>Order ID: {order.id}</p>
                                        <p>Product QTY: {order.totalqty}</p>
                                        <p>Total $ {order.totalPrice}</p>
                                        <p>Date: {order.date}</p>
                                    </div>
                                    <div className='orderlist_container_products'>
                                        {order.products.map(product => (
                                            <OrderSummary
                                                key={product.id}
                                                id={product.id}
                                                title={product.title}
                                                imageUrl={product.image}
                                                price={product.price}
                                                Qty={product.quantity}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (

                <Title text="Please log in" />
            )}
        </Layout>
    );
}


