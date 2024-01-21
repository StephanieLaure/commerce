import React from 'react';
import './newsletters.css'

const newsletters =() =>{

    return(
        <div className='newsletters'>
            <h1> Get exclusive offers on your email</h1>
            <p> Subscribe to our newsletter and stay updated</p>
            <div>
                <input type = 'email' placeholder= 'enter your email'/>
                <button> Subscribe</button>

            </div>

        </div>
    )
}

export default newsletters 