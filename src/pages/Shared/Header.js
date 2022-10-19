import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(() => {
            alert('Logged Out Successfully')
        })
        .catch(error=> {
            console.error(error)
        })
    }
    return (
        <div className="navbar bg-base-300 shadow-md px-12 sticky top-0 z-10">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-xl">Meal Db</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/bookmark'>Bookmarked</Link></li>
                    <li tabIndex={0}>
                        <p>
                            Account
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </p>
                        <ul className="p-2 bg-base-100">
                            <li><Link to='/register'>Register</Link></li>
                            <li>
                                {user?.uid ? <button onClick={handleLogOut}>Logout</button>
                                : <Link to='/login'>Login</Link>}
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;