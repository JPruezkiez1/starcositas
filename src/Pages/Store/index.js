import './Styles.css'
import Layout from '../../Components/Layout'
import SearchBar from '../../Components/Searchbar'
import Product from '../../Components/Product'
import { useContext } from 'react'
import ProductDetail from '../../Components/ProductDetail/ProductDetail'
import React from 'react'
import { Title } from '../../Components/Title/index.js'
import { ShoppingCartContext } from '../../Context'

export default function Store() {
    const context = useContext(ShoppingCartContext);
    console.log(context.filteredItems)

    const conditionalrenderforsearch = () => {
        if (context.filteredItems?.length > 0) {
            return (
                context.filteredItems?.map(item => (
                    <Product key={item.id} data={item} />
                ))
            )
        }

        return (
            <Title text='No items found fcker' />
        )





    }
    return (
        <Layout>
            <SearchBar setSearchValue={context.setSearchValue} />
            <div className='product_section'>
                {
                    conditionalrenderforsearch()
                }
            </div>
            <ProductDetail />
        </Layout>
    )
};