import React from 'react';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context/index';
import './Styles.css'
import { Link } from 'react-router-dom';
export default function Table({ orders }) {
    const context = useContext(ShoppingCartContext);

    const getuserimg = (userId) => {
        const user = context.usertest.find(user => user.id === userId);
        return user ? user.image : '';
    }
    const username = (userId) => {
        const user = context.usertest.find(user => user.id === userId);
        return user ? user.username : '';
    }
    const deleteorder = (orderId) => {
        const updatedOrders = context.order.filter(order => order.id !== orderId);
        context.setOrder(updatedOrders);
        /// this one is from removing from localstorage.
        const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
        const updatedSavedOrders = savedOrders.filter(order => order.id !== orderId);
        localStorage.setItem('orders', JSON.stringify(updatedSavedOrders));
    };

    return (
        <table className='table_01'>
            <thead className='table_head'>
                <tr>
                    <th>BuyerIMG</th>
                    <th>Order Id</th>
                    <th>Buyer Name</th>
                    <th>Items QTY</th>
                    <th>Total Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody className='table_body'>
                {orders.map((order, index) => (
                    <tr className="orderlist_01" key={index}>
                        <td className='image_usr'><img src={getuserimg(order.userId)} alt="Buyer" /></td>
                        <td >{order.id}</td>
                        <td>{username(order.userId)}</td>
                        <td className='ttqty'>{order.totalqty}</td>
                        <td >${order.TotalPrice}</td>
                        <div className='table_buttons'>



                            <button className='button_001' onClick={() => deleteorder(order.id)}>Delete</button>

                            <Link to={`/check/${order.id}`} className='button_001'>View</Link>
                        </div>
                    </tr>
                ))}
            </tbody>
        </table>
    );

}