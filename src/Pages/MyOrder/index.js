import { useContext } from 'react'
import Layout from '../../Components/Layout/index'
import OrderCart from '../../Components/OrderCart/index'
import { ShoppingCartContext } from '../../Context'
import { Link } from 'react-router-dom'
import OrderCardDetail from '../../Components/OrderCardDetail'
import './Styles.css'


export default function MyOrder() {
    const context = useContext(ShoppingCartContext)
    const currentPath = window.location.pathname
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
    if (index === 'last') index = context.order?.length - 1

    return (

        <Layout>
            <Link to='/my-orders'>
                <p className='returnto_orders'>RETURN to my orders</p>
            </Link>
            <div className='myorder_container_01'>
                <div className='myorder_productlist'>

                    {
                        context.order?.[index]?.products.map(product => (
                            <OrderCardDetail
                                key={product.id}
                                id={product.id}
                                title={product.title}
                                imageUrl={product.image}
                                price={product.price}
                            />
                        ))
                    }
                </div>
                <div className='alldetails'>
                    <h2 className='font-bold'> Order Details</h2>
                    <p>Product Qty: {context.order?.[index]?.totalqty}</p>
                    <p>Total: ${context.order?.[index]?.TotalPrice}</p>

                </div>
            </div>
        </Layout>
    )

};