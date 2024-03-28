import React from 'react';
import './Header.css'
import header_icon from '../Assets/header-icon.svg';

const Header = () => {
    return (
        <>
            <div className='header'>
                <div><img src={header_icon} alt="header icon" /> Lorem ipsum dolor</div>
                <div><img src={header_icon} alt="header icon" /> Lorem ipsum dolor</div>
                <div><img src={header_icon} alt="header icon" /> Lorem ipsum dolor</div>
            </div>
        </>
    )
}

export default Header