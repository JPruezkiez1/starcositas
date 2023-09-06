import { useContext, useEffect, useState } from 'react';
import Layout from '../../Components/Layout/index';
import OrderList from '../../Components/OrdersList';
import { ShoppingCartContext } from '../../Context';
import { useParams } from 'react-router-dom';
import './Styles.css';

export default function MyOrder() {
    const context = useContext(ShoppingCartContext);
    const { orderId } = useParams();
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


