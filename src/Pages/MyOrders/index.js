import { useContext } from 'react'
import Layout from '../../Components/Layout/index'
import { ShoppingCartContext } from '../../Context'
import OrdersCard from '../../Components/OrdersCard'
import { Link } from 'react-router-dom'

export default function MyOrders() {
    const context = useContext(ShoppingCartContext)
    console.log(context.order)
    return (
        <Layout>
            {context.order.length > 0 ? (
                <div>
                    <h1>My Orders</h1>
                    {
                        context.order.map((order, index) => (
                            <Link key={index} to={`/my-orders/${index}`}>
                                <OrdersCard TotalPrice={order.TotalPrice}
                                    totalqty={order.totalqty}
                                    date={order.date}
                                />
                            </Link>
                        ))
                    }
                </div>
            ) : (
                <div>
                    <h2>buy something first bitch</h2>
                </div>
            )}

        </Layout>
    )

};