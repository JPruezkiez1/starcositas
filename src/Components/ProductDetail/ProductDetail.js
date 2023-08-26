import './Styles.css'
import { ShoppingCartContext } from '../../Context'
import { useContext } from 'react'

export default function ProductDetail() {
    const context = useContext(ShoppingCartContext)

    return (
        <div className={context.isProductDetailOpen ? 'productdetail_container' : 'hidden'}>
            <div className='detailwicon'>
                <span>Details</span>
                <span onClick={() => context.closeProductDetail()} className='  cursor-pointer'>X</span>
            </div>
            <img className='imageplace' src={context.productToShow.image} alt={context.productToShow.title}></img>
            <p className='detailstext'>
                <span className='font-extrabold'> {context.productToShow.title}</span>
                <span> ${context.productToShow.price}</span>
                <span> {context.productToShow.description}</span>
            </p>
        </div>
    )

};
