import { useContext } from 'react'
import Layout from '../../Components/Layout/index'
import { ShoppingCartContext } from '../../Context'
import OrdersCard from '../../Components/OrdersCard'
import { Link } from 'react-router-dom'
import { Title } from '../../Components/Title'
import Button from '../../Components/Button/index'
import { useNavigate } from 'react-router-dom'
import './Styles.css'

export default function MyOrders() {
    const context = useContext(ShoppingCartContext);
    const filteredOrders = context.loggedInUser ? context.order.filter(order => order.userId === context.loggedInUser.id) : [];
    const navigate = useNavigate();

    return (
        <Layout>
            {context.isLogged ? (
                <div className='orders_container' >
                    {filteredOrders.map((order) => (
                        <Link key={order.id} to={`/my-orders/${order.id}`}>
                            <OrdersCard
                                TotalPrice={order.TotalPrice}
                                totalqty={order.totalqty}
                                date={order.date}
                                id={order.id}
                            />
                        </Link>
                    ))}
                </div>
            ) : (
                <div> not logged bitch</div>
            )}
        </Layout>
    );
}





