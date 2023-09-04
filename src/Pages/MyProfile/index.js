import './Styles.css'
import Layout from '../../Components/Layout'
import { ShoppingCartContext } from '../../Context'
import { useContext } from 'react'
import OrdersCard from '../../Components/OrdersCard'
import { Link } from 'react-router-dom'

export default function MyProfile() {
    const context = useContext(ShoppingCartContext)
    const filteredOrders = context.loggedInUser ? context.order.filter(order => order.userId === context.loggedInUser.id) : [];

    return (
        <Layout>
            <div className='userinfo_container01'>
                <div className='userinfo_container02'>
                    <figure className='userphoto_02'>
                        <img className="self_image" src={context.loggedInUser && context.loggedInUser.image} alt="gayshit" />
                    </figure>
                    <div className='personalinfo'>
                        <p>First: <span className='info_01'>{context.loggedInUser && context.loggedInUser.firstName}</span></p>
                        <p>LastName: <span className='info_01'>{context.loggedInUser && context.loggedInUser.lastName}</span></p>
                        <p>Email: <span className='info_01'>{context.loggedInUser && context.loggedInUser.email}</span></p>
                        <p>Username:<span className='info_01'>{context.loggedInUser && context.loggedInUser.username}</span></p>
                        <p>City:<span className='info_01'>{context.loggedInUser && context.loggedInUser.address.city}</span></p>
                    </div>
                </div>
                <div className='userorder_container01'>
                    {filteredOrders.length > 0 ? (
                        <div className='orders_container' >
                            {filteredOrders.map((order) => (
                                <Link key={order.id} to={`/my-orders/${order.id}`}>
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
                        </div>
                    )}

                </div>
            </div>
        </Layout>
    )


};
