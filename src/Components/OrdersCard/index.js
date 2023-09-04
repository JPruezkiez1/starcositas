import './Styles.css'
import Right from './Right'
const OrdersCard = props => {
    const { TotalPrice, totalqty, date, id } = props
    return (
        <div className='card_00'>
            <div className='card_01'>
                <p>Order Date: {date}</p>
                <p>QTY: {totalqty}</p>
                <p>Total <span className='font-bold'>${TotalPrice}</span></p>
                <p>Order ID: {id}</p>
            </div>
            <Right className='right_icon' />
        </div>

    )

};

export default OrdersCard