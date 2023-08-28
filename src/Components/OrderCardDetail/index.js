import './Styles.css'
const OrderCardDetail = props => {
    const { id, title, imageUrl, price, handleDelete } = props
    let renderDelete
    if (handleDelete) {
        renderDelete = <p className="font-extrabold" onClick={() => handleDelete(id)}>X</p>
    }

    return (
        <div className="order_cart02">
            <div className='px02'>
                <figure className='figure_1 w-20 h-20'>
                    <img className='cart_photo02' src={imageUrl} alt={title} />
                </figure>
                <p className='font-bold'>${price}</p>
                {renderDelete}
            </div>
            <div className='titleprice02'>
                <p>{title}</p>
            </div>
        </div>

    )

};

export default OrderCardDetail

