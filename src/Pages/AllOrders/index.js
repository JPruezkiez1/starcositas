import React, { useContext, useState } from 'react';
import Layout from '../../Components/Layout';
import Table from '../../Components/Table';
import { ShoppingCartContext } from '../../Context';
import './Styles.css';
import Searchbar from '../../Components/Searchbar';
export default function AllOrders() {
    const [searchValue, setSearchValue] = useState('');
    const [searchType, setSearchType] = useState('id');
    const context = useContext(ShoppingCartContext);
    const allOrders = context.order;
    const getUsernameFromUserId = userId => {
        const user = context.usertest.find(user => user.id === userId);
        return user ? user.username : '';
    };
    const filterOrdersBySearchValue = (orders, searchValue, type) => {
        return orders.filter(order => {
            if (type === 'id' && order.id && order.id.includes(searchValue)) {
                return true;
            } else if (type === 'user') {
                const username = getUsernameFromUserId(order.userId);
                return username.toLowerCase().includes(searchValue.toLowerCase());
            }
            return false;
        });
    };
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
                    <div> awoo bitch</div>
                )}
            </>
        </Layout>
    );
}
