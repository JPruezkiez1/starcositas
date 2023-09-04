import { useContext } from 'react'
import Layout from '../../Components/Layout/index'
import OrderSummary from '../../Components/OrderSummary'
import { ShoppingCartContext } from '../../Context'
import { Link } from 'react-router-dom'
import './Styles.css'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Allordercheck() {
    const context = useContext(ShoppingCartContext)
    const orderId = window.location.pathname.split('/').pop();
    // const order = context.order.find(order => order.id === orderId);
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
            <div className='allordercheck'>
                <h1 className='testie01'>Return to All Orders</h1>
                <div className='myorder_container_01'>
                    <div className='order_items'>
                        {order.products.map(product => (
                            <OrderSummary
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                imageUrl={product.image}
                                price={product.price}
                            />
                        ))}
                    </div>
                </div>
                <div className='dsp001_p3'>
                    <h2 className='font-bold'> Order Details</h2>
                    <p>Product Qty: {order.totalqty}</p>
                    <p>Total: ${order.TotalPrice}</p>
                    <p>Order ID: {order.id}</p>
                </div>
            </div>
        </Layout>
    );
}























// import { useContext } from 'react'
// import Layout from '../../Components/Layout/index'
// import { ShoppingCartContext } from '../../Context'
// import { Link } from 'react-router-dom'
// import OrderCardDetail from '../../Components/OrderCardDetail'
// import './Styles.css'


// export default function MyOrder() {
//     const context = useContext(ShoppingCartContext)
//     const currentPath = window.location.pathname
//     let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
//     if (index === 'last') index = context.order?.length - 1

//     return (

//         <Layout>
//             <Link to='/my-orders'>
//                 <p className='returnto_orders'>RETURN to my orders</p>
//             </Link>
//             <div className='myorder_container_01'>
//                 <div className='myorder_productlist'>

//                     {
//                         context.order?.id?.products.map(product => (
//                             <OrderCardDetail
//                                 key={product.id}
//                                 id={product.id}
//                                 title={product.title}
//                                 imageUrl={product.image}
//                                 price={product.price}
//                             />
//                         ))
//                     }
//                 </div>
//                 <div className='alldetails'>
//                     <h2 className='font-bold'> Order Details</h2>
//                     <p>Product Qty: {context.order?.id?.totalqty}</p>
//                     <p>Total: ${context.order?.id?.TotalPrice}</p>

//                 </div>
//             </div>
//         </Layout>
//     )

// };