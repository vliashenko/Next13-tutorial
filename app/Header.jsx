import React from 'react';
import Link from 'next/link';


const Header = () => {
    return (
        <div className='header'>
            <span className='header-title'>I'am Header</span>
            <Link className='button' href='/'>Home</Link>
        </div>
    );
};

export default Header;