import Layout from "../../Components/Layout"
import UserCard from "../../Components/UserCard/UserCard"
import { useEffect, useState, useContext } from "react"
import './Styles.css'
import { ShoppingCartContext } from "../../Context"


export default function Users() {
    const context = useContext(ShoppingCartContext);
    return (
        <Layout>
            <div className="users_section">
                {context.usertest?.map(user => (
                    <UserCard
                        key={user.id} // Make sure each card has a unique key
                        user={user} // Pass user data as a prop to UserCard
                    />
                ))}
            </div>
        </Layout>
    )

};
