import './Styles.css'
import Layout from '../../Components/Layout'
import SearchBar from '../../Components/Searchbar'
import Product from '../../Components/Product'
import { useEffect, useState } from 'react'
import ProductDetail from '../../Components/ProductDetail/ProductDetail'
import React from 'react'


/// functionallity code here//
export default function Store() {
    const [searchvalue, setSearchvalue] = React.useState('');
    const [items, setItems] = useState(null)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])


    // Filter the items based on the search value
    const filteredItems = items
        ? items.filter(item => item.title.toLowerCase().includes(searchvalue.toLowerCase()))
        : [];

    return (
        <Layout>
            <SearchBar searchvalue={searchvalue} setSearchvalue={setSearchvalue} />
            <div className='product_section'>
                {
                    filteredItems.map(item => (
                        <Product key={item.id} data={item} />
                    ))
                }
            </div>
            <ProductDetail />
        </Layout>

    )

};
