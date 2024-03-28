import React, { useRef } from 'react'
import './Navbar.css'
import heart from '../Assets/heart.svg'
import Logo from '../Assets/Logo.png'
import Profile from '../Assets/profile.png'
import Language from '../Assets/Language.svg'
import Search from '../Assets/search-normal.svg'
import Shopping from '../Assets/shopping-bag.png'
import hamburger from '../Assets/hamburger.svg'


const Navbar = () => {
    const navRef = useRef()
    return (
        <div className='navbar'>
            <div className='navbar-header'>
                <div className='nav-hamburger'>
                    <img src={hamburger} alt="hamburger" className='hamburger' onClick={() => navRef.current.classList.toggle('nav_toggle')} />
                    <img className='navbar-image' src={Logo} alt="logo" />
                </div>
                <h2>LOGO</h2>
                <div className="navbar-icon-group" >
                    <img src={Search} alt="search" />
                    <img src={heart} alt="heart" />
                    <img src={Shopping} alt="shopping" />
                    <img src={Profile} alt="profile" />
                    <img src={Language} alt="language" />
                </div>
            </div>
            <div className='navbar-menu' ref={navRef}>
                <p>SHOP</p>
                <p>SKILLS</p>
                <p>STORIES</p>
                <p>ABOUT</p>
                <p>CONTACT US</p>
            </div>
        </div>
    )
}

export default Navbar