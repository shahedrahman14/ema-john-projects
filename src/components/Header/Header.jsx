import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <nav className='flex px-3 h-20 bg-slate-950  sm:px-5 md:px-11 py-0 justify-between items-center'>
            <img src={logo} alt="" />
            <div>
                <a className='no-underline text-white ml-8 hover:text-red-500 hover:font-medium' href="/shop">Shop</a>
                <a className='no-underline text-white ml-8 hover:text-red-500 hover:font-medium'  href="/order">Orders</a>
                <a className='no-underline text-white ml-8 hover:text-red-500 hover:font-medium'  href="/inventory">Inventory</a>
                <a className='no-underline text-white ml-8 hover:text-red-500 hover:font-medium'  href="/login">Login</a>
            </div>
        </nav>
    );
};

export default Header;