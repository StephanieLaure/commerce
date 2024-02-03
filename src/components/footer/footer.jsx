import React from 'react'
import './footer.css'
import boutique_logo from '../assets/boutique_logo.png'
import instagram_icon from '../assets/instagram_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'

const footer =()=>{

    return(
        <div className='footer'>
        <div className='footer-logo'>
            <img src={boutique_logo} alt='' />
            <p> Boutique</p>
        </div>
        <ul className='footer-links'>
            <li> Company </li>
            <li>products</li>
            <li> offices</li>
            <li>About</li>
            <li> Contact</li>
        </ul>
        <div className='footer-social-icon'>
         <div className='footer-icons-container'>
         <img src={instagram_icon} alt=''/>
         </div>
         <div className='footer-icons-container'>
         <img src= {whatsapp_icon} alt=''/>
         </div>
         <div className='footer-copyright'>
            <hr/>
        <p> Copyright @ 2024 - All Right Reserved</p>
         </div>
        </div>   
        </div>
        


        
    )
}

export default footer