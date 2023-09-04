import { useContext, useEffect, useState } from 'react';
import Layout from '../../Components/Layout/index';
import OrderSummary from '../../Components/OrderSummary';
import { ShoppingCartContext } from '../../Context';
import { Link } from 'react-router-dom';
import './Styles.css';

export default function MyOrder() {
    const context = useContext(ShoppingCartContext);
    const orderId = window.location.pathname.split('/').pop();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        const foundOrder = context.order.find(ordercita => ordercita.id === orderId);
        setOrder(foundOrder);
    }, [context.order, orderId]);

    if (!order) {
        return <p>Loading...</p>;
    }

    return (
        <Layout>
            <div>
                <h1>My Orders</h1>
                <div className='myorder_container_01'>
                    <div className='order_items'>
                        {order.products.map(product => (
                            <OrderSummary
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                imageUrl={product.image}
                                price={product.price}
                            />
                        ))}
                    </div>
                </div>
                <div className='dsp001_p3'>
                    <h2 className='font-bold'> Order Details</h2>
                    <p>Product Qty: {order.totalqty}</p>
                    <p>Total: ${order.TotalPrice}</p>
                    <p>Order ID: {order.id}</p>
                </div>
            </div>
        </Layout>
    );
}
