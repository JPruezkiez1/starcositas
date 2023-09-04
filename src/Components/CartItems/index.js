import './Styles.css'
const CartItems = props => {
    const { id, title, imageUrl, price, handleDelete } = props
    let renderDelete
    if (handleDelete) {
        renderDelete = <p onClick={() => handleDelete(id)}>X</p>
    }
    return (
        <div className="order_cart">
            <div className='imgandprice'>
                <img className='incart_img' src={imageUrl} alt="" />
                <div>
                    <p className='font-bold'>${price}</p>
                    <p className='title_01'>{title}</p>
                </div>
                {renderDelete}
            </div>
        </div>
    )
};
export default CartItems














// import './Styles.css'
// const OrderCart = props => {
//     const { id, title, imageUrl, price, handleDelete } = props
//     let renderDelete
//     if (handleDelete) {
//         renderDelete = <p onClick={() => handleDelete(id)}>X</p>
//     }
//     return (
//         <div className="order_cart">
//             <div className='px'>
//                 <figure className='figure_1 w-20 h-20'>
//                     <img className='cart_photo ' src={imageUrl} alt={title} />
//                 </figure>
//                 <p className='font-bold'>${price}</p>
//                 {renderDelete}
//             </div>
//             <div className='titleprice'>
//                 <p>{title}</p>
//             </div>
//         </div>
//     )
// };
// export default OrderCart

