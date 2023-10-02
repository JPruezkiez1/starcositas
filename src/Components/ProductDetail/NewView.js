import './view.css'
import { Xicon } from './CloseIcon_1'
import { Inconplaceholder } from './CloseIcon_1'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
export default function NewView({ toggle }) {

    const context = useContext(ShoppingCartContext)
    return (


        <div className='View_Container'>

            <div className='View_Container01'>
                <div className='View_Container02'>
                    <Inconplaceholder text={"Return to Store"} icon={<Xicon onClick={toggle} className="closing_icon" />} />
                    <div className='product_container1'>
                        <img className='photo_placeholder1' src={context.productToShow.image} alt="" />
                        <p className='product_title01'>{context.productToShow.title}</p>
                        <p className='product_title02'>{context.productToShow.description}</p>
                        <p className='product_title01'>$ {context.productToShow.price}</p>
                    </div>
                </div>

            </div>
        </div>

    )

};

