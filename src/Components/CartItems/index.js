import './Styles.css'
import { useState } from 'react';


const CartItems = (props) => {
    const { id, title, imageUrl, price, handleDelete, quantity, updateQuantity } = props;
    const initialQuantity = isNaN(quantity) || typeof quantity !== 'number' ? 1 : quantity;

    const [currentQuantity, setCurrentQuantity] = useState(initialQuantity);

    const incrementQuantity = () => {
        const newQuantity = parseInt(currentQuantity, 10) + 1;
        setCurrentQuantity(newQuantity);
        updateQuantity(id, newQuantity);
    };

    const decrementQuantity = () => {
        if (currentQuantity > 1) {
            const newQuantity = parseInt(currentQuantity, 10) - 1;
            setCurrentQuantity(newQuantity);
            updateQuantity(id, newQuantity);
        }
    };

    let renderDelete;
    if (handleDelete) {
        renderDelete = <p onClick={() => handleDelete(id)}>X</p>;
    }

    return (
        <div className="order_cart">
            <div className='imgandprice'>
                <img className='incart_img' src={imageUrl} alt="" />
                <div>
                    <p className='font-bold'>${price}</p>
                    <p className='title_01'>{title}</p>
                    <div className='qty_field'>
                        <button className='qt_buttons_01' onClick={decrementQuantity}>-</button>
                        <input
                            className='input_test'
                            type="number"
                            readOnly
                            value={currentQuantity}
                        />
                        <button className='qt_buttons_01' onClick={incrementQuantity}> +</button>
                    </div>

                </div>
                {renderDelete}
            </div>
        </div>
    );
};

export default CartItems;

