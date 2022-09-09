import Account from '../Account';
import './MyAccount.css';
import { Link } from 'react-router-dom'

const MyAccount = () => {
    return ( 
        <Account>
            <div className="order__history__container">
                <div className="order__history">
                    <div className="order__history__header">Order History</div>
                    <div className="order__history__detail">You have not place any orders yet</div>
                </div>
            </div>
            <div className="account__details__container">
                <div className="account__details__header">
                    <div className="details__header">Account Details</div>
                    <div className="logout__action">Logout</div>
                </div>
                <div className="account__details">
                    <div className="account__holder__name">Account holder name</div>
                    <div className="account__holder__email">Account holder email</div>
                    <div className="manage__account__action">
                        <Link to="/account/manage">Manage account</Link>   
                    </div>
                </div>
            </div>
        </Account>
     );
}
 
export default MyAccount;