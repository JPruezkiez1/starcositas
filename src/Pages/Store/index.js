import './Styles.css'
import Layout from '../../Components/Layout'
import Modal from '../../Components/Modal'
import SearchBar from '../../Components/Searchbar'
import Product from '../../Components/Product'
import { useContext, useState } from 'react'
import ProductDetail from '../../Components/ProductDetail/ProductDetail'
import React from 'react'
import { Title } from '../../Components/Title/index.js'
import { ShoppingCartContext } from '../../Context'
import NewView from '../../Components/ProductDetail/NewView'

export default function Store() {

    const [showModal, setShowModal] = useState(false)

    const context = useContext(ShoppingCartContext);

    const toggleShowModal = () => {

        setShowModal(!showModal)
        document.body.style.overflow = showModal ? 'initial' : 'hidden'
    }

    const conditionalrenderforsearch = () => {
        if (context.filteredItems?.length > 0) {
            return (
                context.filteredItems?.map(item => (
                    <Product toggle={toggleShowModal} key={item.id} data={item} />
                ))
            )
        }

        return (
            <Title text='No items found...' />
        )

    }
    return (
        <Layout className="overflow-hidden">
            <SearchBar setSearchValue={context.setSearchValue} />
            <div className='product_section '>
                {
                    conditionalrenderforsearch()
                }
            </div>
            <ProductDetail />
            {showModal ? <NewView toggle={toggleShowModal} /> : null}
        </Layout>
    )
};
