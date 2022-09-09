import Account from '../Account';
import './ManageAccount.css'

const ManageAccount = () => {
    return ( 
        <Account> 
            <div className="manage__account__container">
                <div className="edit__account__container">
                    <div className="edit__account">
                        <div className="edit__account__header">Edit account</div>
                        <div className="edit__account__form__container">
                            <div className="edit__account__form">
                                <div className="fname__input__container edit__input__container">
                                    <label className="fname__label input__label">First name</label>
                                    <input type="text" className="fname__input edit__account__input" />
                                </div>
                                <div className="lname__input__container edit__input__container">
                                    <label className="lname__label input__label">Last name</label>
                                    <input type="text" className="lname__input edit__account__input"/>
                                </div>
                                <div className="save__changes__button__container">
                                    <button className="save__changes__button" >Save Changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="separator__line"></div>
                <div className="delete_account__container">
                    <div className="delete__account">
                        <div className="delete__account__header">
                            Delete account
                        </div>
                        <div className="delete__account__prompt">Do you want to cancel subscription?</div>
                        <div className="delete__account__button__container">
                            <button className="delete__account__button" >Delete Account</button>
                        </div>
                    </div>
                </div>
            </div>
        </Account>
     );
}
 
export default ManageAccount;