import Layout from "../Layout"
import './Styles.css'
export default function UserCard(user) {


    return (

        <div className="container_user">
            <div>
                <img className="img_user" src={user.user.image} alt="user" />
            </div>
            <div className="user_det">
                <div >
                    <p className="Label_001">Username:</p>
                    <p className="Label_001">Password:</p>
                    <p className="Label_001">User ID:</p>
                </div>
                <div className="info_user01">
                    <span className="user_det02">{user.user.username}</span>
                    <span className="user_det02">{user.user.password}</span>
                    <span className="user_det02">{user.user.id}</span>
                </div>
            </div>
        </div>

    )

};
