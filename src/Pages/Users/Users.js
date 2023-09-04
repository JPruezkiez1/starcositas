import Layout from "../../Components/Layout"
import UserCard from "../../Components/UserCard/UserCard"
import { useEffect, useState, useContext } from "react"
import './Styles.css'
import { ShoppingCartContext } from "../../Context"
import { Link } from "react-router-dom"
import Loading from "../../Components/Loading"


export default function Users() {
    const context = useContext(ShoppingCartContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        setTimeout(() => {
            setIsLoading(false);
        }, 4000);
    }, []);


    return (
        <Layout>
            {isLoading ? (
                <Loading />
            ) : (
                <div className="users_section">
                    {context.usertest?.map(user => (
                        <Link to={`/user/${user.username}`} key={user.id}>
                            <UserCard user={user} />
                        </Link>
                    ))}
                </div>
            )}
        </Layout>
    );
}



