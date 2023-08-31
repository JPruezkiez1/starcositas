import Button from '../Button/index';
import './Styles.css';
import { ShoppingCartContext } from '../../Context';
import { useContext } from 'react';
import Addedtocart from './Addedtocart';
import { useNavigate } from 'react-router-dom';


const Product = (data) => {
    const navigate = useNavigate()
    const context = useContext(ShoppingCartContext)
    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.closeCheckoutSideMenu()
        context.setProductToShow(productDetail)
    }

    const addProductsToCart = (event, productData) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData])
        context.openCheckoutSideMenu()
        context.closeProductDetail()
    }

    // conditional rendering for the fcking button...
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
                            btn_action={(event) => addProductsToCart(event, data.data)}
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
        <div onClick={() => showProduct(data.data)} className='product_container cursor-pointer'>
            <figure className='photo'>
                <img className='imageplace' src={data.data.image} alt={data.data.title} />
            </figure>
            <p className='title_price'>
                <span className='font-bold'>${data.data.price}</span>
                <span>{data.data.title}</span>
            </p>
            {renderIcon(data.data.id)}
        </div>
    )
}

export default Product