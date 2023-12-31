import './Styles.css';
import Layout from '../../Components/Layout';
import SearchBar from '../../Components/Searchbar';
import Product from '../../Components/Product';
import { useContext, useState, useEffect } from 'react';
import { ShoppingCartContext } from '../../Context';
import NewView from '../../Components/ProductDetail/NewView';
import Skeleton from 'react-loading-skeleton';
import { useParams } from 'react-router-dom';

export default function Store() {
    const [showModal, setShowModal] = useState(false);
    const context = useContext(ShoppingCartContext);
    const { category } = useParams();
    const toggleShowModal = () => {
        setShowModal(!showModal);
        document.body.style.overflow = showModal ? 'initial' : 'hidden';
    };
    const conditionalRenderForSearch = () => {
        if (context.filteredItems?.length > 0) {
            return context.filteredItems?.map((item) => (
                <Product toggle={toggleShowModal} key={item.id} data={item} />
            ));
        }
        return <Skeleton sx={{ bgcolor: 'red.900' }} count={4} />;
    };;
    useEffect(() => {
        context.setSearchValue('');
        context.setSearchCategory(category);
    }, [category]);
    return (
        <Layout className='overflow-hidden'>
            <SearchBar setSearchValue={context.setSearchValue} />
            <div className='product_section'>{conditionalRenderForSearch()}</div>
            {showModal ? <NewView toggle={toggleShowModal} /> : null}
        </Layout>
    );
}