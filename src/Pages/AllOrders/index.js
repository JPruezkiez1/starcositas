import React, { useContext, useState, useEffect } from 'react';
import Layout from '../../Components/Layout';
import Table from '../../Components/Table';
import { ShoppingCartContext } from '../../Context';
import './Styles.css';
import Searchbar from '../../Components/Searchbar';

export default function AllOrders() {
    const [searchValue, setSearchValue] = useState('');
    const [searchType, setSearchType] = useState('id');
    const context = useContext(ShoppingCartContext);
    useEffect(() => {
        const allOrders = context.order || [];
    }, [context.order]);
    const getUsernameFromUserId = userId => {
        const user = context.usertest.find(user => user.id === userId);
        return user ? user.username : '';
    };
    const filterOrdersBySearchValue = (orders, searchValue, type) => {
        return orders.filter(order => {
            if (type === 'id' && order.id && String(order.id).includes(searchValue)) {
                return true;
            } else if (type === 'user') {
                const username = getUsernameFromUserId(order.userId);
                return username.toLowerCase().includes(searchValue.toLowerCase());
            }
            return false;
        });
    };
    const allOrders = context.order || [];
    const filteredOrders = filterOrdersBySearchValue(allOrders, searchValue, searchType);
    const handleSearchTypeChange = event => {
        setSearchType(event.target.value);
        setSearchValue('');
    };
    return (
        <Layout>
            <>
                {context.isLogged && context.loggedInUser && context.loggedInUser.id === 1 ? (<>
                    <Searchbar setSearchValue={setSearchValue} />
                    <select className='selector_01' onChange={handleSearchTypeChange}>
                        <option value='id'>Order ID</option>
                        <option value='user'>Username</option>
                    </select>
                    <div className='allorders_section'>
                        <Table orders={filteredOrders} />
                    </div>
                </>) : (
                    <div> login to see this! you gotta be user 1</div>
                )}
            </>
        </Layout>
    );
}
