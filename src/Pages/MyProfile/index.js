import './Styles.css'
import Layout from '../../Components/Layout'
import { ShoppingCartContext } from '../../Context'
import { useContext, useEffect, useState } from 'react'
import OrderList from '../../Components/OrdersList'

export default function MyProfile() {
    const context = useContext(ShoppingCartContext)
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (context.loggedInUser) {
            const userOrders = context.order ? context.order.filter(order => order.userId === context.loggedInUser.id) : [];
            setOrders(userOrders);
            setIsLoading(false);
        } else {
            setOrders([]);
            setIsLoading(false);
        }
    }, [context.loggedInUser, context.order]);

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
                        <p>Orders:<span className='info_01'>{orders.length}</span></p>
                    </div>
                </div>
                <div className='userorder_container01'>
                    {isLoading ? (
                        <div>Loading...</div>
                    ) : (
                        orders.length > 0 ? (
                            <div className='orders_container'>
                                <OrderList orders={orders} />
                            </div>
                        ) : (
                            <div className='noordersgg'></div>
                        )
                    )}
                </div>
            </div>
        </Layout>
    )
}
