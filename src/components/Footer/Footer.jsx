import React from 'react';
import './Footer.css';
import usd from '../Assets/usd.svg';
import instaLink from '../Assets/instaLink.svg';
import logos from '../Assets/footer_logos.svg'
import Arrow from '../Assets/arrow.svg';

const Footer = () => {
    return (
        <div className='footer'>

            <div className='footer_top'>

                <div className="footer_left">
                    <h3>BE THE FIRST TO KNOW</h3>
                    <p>Sign up for updates from mettā muse.</p>

                    <div className='input_button'>
                        <input type="text" placeholder='Enter your e-mail' />
                        <button>SUBSCRIBE</button>
                    </div>

                </div>

                <div className="footer_right">
                    <h3>CONTACT US</h3>
                    <a href="tel:+44 221 133 5360">+44 221 133 5360</a>
                    <a href="mailto:customercare@mettamuse.com" className='footer_right_email'>customercare@mettamuse.com</a>
                    <h3>CURRENCY</h3>
                    <h6>
                        <img src={usd} alt="usa" />&nbsp; <span>+&nbsp;USD</span>
                    </h6>
                    <p className='currencyPara'> Transactions will be completed in Euros and a currency reference is available on hover.</p>
                </div>

            </div>



            <div className="footer_down">

                <div className='footer_list_one'>
                    <p>mettā muse </p>
                    <img src={Arrow} alt="arrow" />
                    <ul>
                        <li>About Us</li>
                        <li>Stories</li>
                        <li>Artisans</li>
                        <li>Boutiques</li>
                        <li>Contact Us</li>
                        <li>EU Compilances Docs</li>
                    </ul>
                </div>

                <div className='footer_list_two'>
                    <p>QUICK LINKS </p>
                    <img src={Arrow} alt="arrow" />
                    <ul>
                        <li>Orders & Shipping</li>
                        <li>Join/Login as a Seller</li>
                        <li>Payment & Pricing</li>
                        <li>Return & Refunds</li>
                        <li>FAQs</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>

                <div className='footer_list_three'>
                    {/* <h5>FOLLOW US</h5> */}
                    <div className='footer_icon'>
                        <img src={instaLink} alt="instaLink" />
                    </div>
                    <p>mettā muse Accepts</p>
                    <div className='footer_logo'>
                        <img src={logos} alt="logos" />
                    </div>
                </div>

            </div>

            <div className='footer_bottom'>
                <p>Copyright © 2023 mettamuse. All rights reserved.</p>
            </div>

        </div>
    )
}

export default Footer