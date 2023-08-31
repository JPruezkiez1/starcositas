import { useContext } from 'react'
import Layout from '../../Components/Layout/index'
import { ShoppingCartContext } from '../../Context'
import OrdersCard from '../../Components/OrdersCard'
import { Link } from 'react-router-dom'
import { Title } from '../../Components/Title'
import Button from '../../Components/Button/index'
import { useNavigate } from 'react-router-dom'


export default function MyOrders() {
    const context = useContext(ShoppingCartContext);

    // filter for orders, this one is based on the user who made them...
    const filteredOrders = context.loggedInUser ? context.order.filter(order => order.userId === context.loggedInUser.id) : [];
    const navigate = useNavigate();

    return (
        <Layout>
            {filteredOrders.length > 0 ? (
                <div>
                    <h1>My Orders</h1>
                    {filteredOrders.map((order, index) => (
                        <Link key={index} to={`/my-orders/${index}`}>
                            <OrdersCard
                                TotalPrice={order.TotalPrice}
                                totalqty={order.totalqty}
                                date={order.date}
                            />
                        </Link>
                    ))}
                </div>
            ) : (
                <div className='noordersgg'>
                    <Title text='No orders found...' />
                    <Button text='Go back to the shop' btn_action={() => navigate('/')} />
                </div>
            )}
        </Layout>
    );
}