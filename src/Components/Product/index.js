import Button from '../Button/index';
import './Styles.css';
import { ShoppingCartContext } from '../../Context';
import { useContext } from 'react';
import Addedtocart from './Addedtocart';
import { useNavigate } from 'react-router-dom';
const Product = ({ data, toggle }) => {
    const navigate = useNavigate()
    const context = useContext(ShoppingCartContext)

    const showProduct = (productDetail) => {
        context.setProductToShow(productDetail)
        toggle()
    }

    const addProductsToCart = (event, productData) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, { ...productData, quantity: 1 }]);
        context.openCheckoutSideMenu()
        context.closeProductDetail()
    }
    const renderIcon = (id) => {
        const isInCart = context.cartProducts.some(product => product.id === id);
        if (isInCart) {
            return (
                <div className='buttoncontainer'>
                    <Addedtocart className="addedtocart_icon" />
                </div>
            )
        } else {
            return (
                <div className='buttoncontainer'>
                    {context.isLogged ? (
                        <Button
                            btn_action={(event) => addProductsToCart(event, data)}
                            text="Add to Cart"
                        />
                    ) : (
                        <div className='buttoncontainer'>
                            <Button text="Login to Add" btn_action={() => navigate('/login')} className="login_button" />
                        </div>
                    )}
                </div>
            )
        }
    }
    return (
        <div >

            <div onClick={() => showProduct(data)} className='product_container cursor-pointer'>
                <img className='photo' src={data.image} alt={data.title} />
                <p className='title_price'>
                    <span className='title_price_01'>${data.price}</span>
                    <span className='title_price_03'>{data.title}</span>
                    <span className='title_price_02'>{data.description}</span>
                </p>
                {renderIcon(data.id)}
            </div>
        </div>
    )
}

export default Product