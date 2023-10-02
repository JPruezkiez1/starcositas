import './Styles.css'
const OrderSummary = props => {
    const { id, title, imageUrl, price, Qty } = props

    return (
        <div className="order_sum">
            <div className='imgandprice'>
                <img className='incart_img' src={imageUrl} alt="" />
                <div>
                    <p className='font-bold'>${price * Qty}</p>
                    <p className='title_01'>{title} <b>x {Qty}</b> </p>
                </div>
            </div>
        </div>
    )
};

export default OrderSummary
