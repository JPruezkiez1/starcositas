import { useContext, useEffect, useState } from 'react';
import Layout from '../../Components/Layout/index';
import OrderList from '../../Components/OrdersList';
import { ShoppingCartContext } from '../../Context';
import { useParams } from 'react-router-dom';

import './Styles.css';

export default function MyOrder() {
    const context = useContext(ShoppingCartContext);
    const { orderId } = useParams();
    const [order, setOrder] = useState(null); // Initialize order as null
    const [loading, setLoading] = useState(true); // Initialize loading state

    useEffect(() => {
        // Check if context.order is defined before using .find()
        if (context.order) {
            const foundOrder = context.order.find(order => order.id === orderId);
            setOrder(foundOrder);
            setLoading(false); // Set loading to false once order is found or not found
        }
    }, [context.order, orderId]);

    if (loading) {
        // Render loading state while waiting for order data
        return <p>Loading...</p>;
    }

    if (!order) {
        return (
            <Layout>
                {context.isLogged ? (
                    <div>
                        <h1>Logged</h1>
                        <div>No order found with ID: {orderId}</div>
                        <div className='dsp001_p3'></div>
                    </div>
                ) : (
                    <div>Please log in to continue</div>
                )}
            </Layout>
        );
    }

    return (
        <Layout>
            {context.isLogged ? (
                <div>
                    <h1>Logged</h1>
                    <OrderList orders={[order]} />
                    <div className='dsp001_p3'></div>
                </div>
            ) : (
                <div>Please log in to continue</div>
            )}
        </Layout>
    );
}
