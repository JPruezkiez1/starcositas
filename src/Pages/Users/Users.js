import Layout from "../../Components/Layout"
import UserCard from "../../Components/UserCard/UserCard"
import { useEffect, useState, useContext } from "react"
import './Styles.css'
import { ShoppingCartContext } from "../../Context"
import { Link } from "react-router-dom"

export default function Users() {
    const context = useContext(ShoppingCartContext);

    return (
        <Layout>
            <div className="users_section">
                {context.usertest?.map(user => (
                    <Link to={`/user/${user.id}`} key={user.id}>
                        <UserCard user={user} />
                    </Link>
                ))}
            </div>
        </Layout>
    );
}
