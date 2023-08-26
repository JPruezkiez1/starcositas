import './Styles.css'
import Layout from '../../Components/Layout'
import SearchBar from '../../Components/Searchbar'
import Product from '../../Components/Product'
import { useEffect, useState } from 'react'
import ProductDetail from '../../Components/ProductDetail/ProductDetail'
import CheckoutSideMenu from '../../Components/Cart/Cart'

export default function Store() {
    const [items, setItems] = useState(null)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])

    return (
        <Layout>
            <SearchBar />
            <div className='product_section'>
                {
                    items?.map(item => (
                        <Product key={item.id} data={item} />
                    ))
                }
            </div>
            <ProductDetail />

        </Layout>

    )

};
