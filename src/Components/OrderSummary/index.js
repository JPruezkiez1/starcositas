import './Styles.css'
const OrderSummary = props => {
    const { id, title, imageUrl, price } = props

    return (
        <div className="order_sum">
            <div className='imgandprice'>
                <img className='incart_img' src={imageUrl} alt="" />
                <div>
                    <p className='font-bold'>${price}</p>
                    <p className='title_01'>{title}</p>
                    <p> Product ID: {id}</p>
                </div>
            </div>
        </div>
    )
};

export default OrderSummary
