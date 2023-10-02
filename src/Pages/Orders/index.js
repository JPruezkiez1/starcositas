import Layout from '../../Components/Layout';
import OrderList from '../../Components/OrdersList';
import { useContext, useEffect, useState } from 'react';
import { ShoppingCartContext } from '../../Context/index';

export default function Orders() {
    const orderscontext = useContext(ShoppingCartContext);
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        if (orderscontext.order) {
            setOrders(orderscontext.order.filter(order => order.userId === orderscontext.loggedInUser.id));
        }
    }, [orderscontext.order, orderscontext.loggedInUser]);
    return (
        <Layout>
            <OrderList orders={orders} />
        </Layout>
    )
}
