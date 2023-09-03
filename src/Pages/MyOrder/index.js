import { useContext } from 'react'
import Layout from '../../Components/Layout/index'
import OrderCardDetail from '../../Components/OrderCardDetail'
import { ShoppingCartContext } from '../../Context'
import { Link } from 'react-router-dom'
import './Styles.css'

export default function MyOrder() {
    const context = useContext(ShoppingCartContext)
    const orderId = window.location.pathname.split('/').pop();
    const order = context.order.find(order => order.id === orderId);

    return (
        <Layout>
            <Link to='/my-orders'>
                <p className='returnto_orders'>RETURN to my orders</p>
            </Link>
            <div className='myorder_container_01'>
                <div className='myorder_productlist'>
                    {order.products.map(product => (
                        <OrderCardDetail
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.image}
                            price={product.price}
                        />
                    ))}
                </div>
                <div className='alldetails'>
                    <h2 className='font-bold'> Order Details</h2>
                    <p>Product Qty: {order.totalqty}</p>
                    <p>Total: ${order.TotalPrice}</p>
                </div>
            </div>
        </Layout>
    )
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