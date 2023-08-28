import Button from '../Button/index';
import './Styles.css';
import { ShoppingCartContext } from '../../Context';
import { useContext } from 'react';
import Addedtocart from './Addedtocart';
const Product = (data) => {
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

    // conditionar rendering for the fcking button...
    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0
        if (isInCart) {
            return (
                <div className='buttoncontainer'>
                    <Addedtocart className="addedtocart_icon" />
                </div>
            )
        } else {
            return (
                <div className='buttoncontainer'>
                    <Button btn_action={(event) => addProductsToCart(event, data.data)} text="Add to Cart" />
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