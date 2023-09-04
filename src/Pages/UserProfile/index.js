import './Styles.css';
import Layout from '../../Components/Layout';
import { ShoppingCartContext } from '../../Context';
import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import OrdersCard from '../../Components/OrdersCard';
import Loading from '../../Components/Loading';

export default function UserProfile() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {

        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    const { username } = useParams();
    const context = useContext(ShoppingCartContext);
    const user = context.usertest.find(user => user.username === username); //transfor make sure value is number
    if (!user) {
        return (
            <Layout>
                <div className='userinfo_container01'>
                    <p>cannt find that hoe</p>
                </div>
            </Layout>
        );
    }
    const filteredOrders = user ? context.order.filter(order => order.userId === user.id) : [];
    console.log(filteredOrders)

    return (
        <Layout>
            {isLoading ? (
                <Loading />
            ) : (
                <div className='userinfo_container01'>
                    <div className='userinfo_container02'>
                        <figure className='userphoto_02'>
                            <img className="self_image" src={user.image} alt="User" />
                        </figure>
                        <div className='personalinfo'>
                            <p>First: <span className='info_01'>{user.firstName}</span></p>
                            <p>Last Name: <span className='info_01'>{user.lastName}</span></p>
                            <p>Email: <span className='info_01'>{user.email}</span></p>
                            <p>Username: <span className='info_01'>{user.username}</span></p>
                            <p>City: <span className='info_01'>{user.address.city}</span></p>
                            <p>Orders: <span className='info_01'>{filteredOrders.length}</span></p>
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
                                            id={order.id}
                                        />
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <div className='noordersgg'>
                                no orders bitchy
                            </div>
                        )}
                    </div>
                </div>
            )}
        </Layout>
    );
}
