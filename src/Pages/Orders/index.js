import Layout from '../../Components/Layout';
import OrderList from '../../Components/OrdersList';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context/index';

export default function Orders() {
    const context = useContext(ShoppingCartContext);
    const orders = context.loggedInUser ? context.order.filter(order => order.userId === context.loggedInUser.id) : [];
    console.log('orders', orders);
    return (

        <Layout>
            <OrderList orders={orders} />
        </Layout>
    )


};
