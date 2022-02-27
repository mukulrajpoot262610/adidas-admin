import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {

    const userData = useSelector(state => state.user.currentUser)

    const user = userData ? userData.user : ""

    return <div>
        <h1 className='font-bold text-3xl'>Hello there, {user.email}</h1>
        <p className=''>Here is some information we gathered about your store</p>
    </div>;
};

export default Header;
