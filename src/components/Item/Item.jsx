import React, { useState } from 'react'
import './Item.css'
import Heart from '../Assets/heart.svg';

const Item = ({ product }) => {


    return (
        <div className='item'>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>

            <div>
                <p><span>Sign in</span> or create an account to see pricing</p>
                <img src={Heart} alt="heart" />

            </div>
        </div>
    )
}

export default Item