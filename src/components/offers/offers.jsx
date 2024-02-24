import React from 'react';
import './offers.css'
import product_5 from '../assets/product_5.jpg'

const offers = () =>{

    return(
        <div className='offer'>
        <div className='offer-left'>
                <h1>Exclusive</h1>
                <h1>Offers for you</h1>
                <p>Only on best sellers products</p>
                <button> Check Now</button>
        </div>
        <div className='offer-right'>
        <img src={product_5} alt=''/>

        </div>

        </div>
    )

}

export default offers