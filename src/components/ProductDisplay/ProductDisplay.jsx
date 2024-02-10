import React from 'react';
import  './ProductDisplay.css'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay= (props) =>{

    const {image}=props;

    return(
        <div className='productdisplay'>
        <div className='productdisplay-left'>
        <div className='productdisplay-img-list'>
            <img src= {image.image}/>
            <img src= {image.image}/>
        </div>
        <div className='productdisplay-img'>
            <img className='productdisplay-main-img' src={image.image}/>
        </div>
        </div>

        <div className= 'productdisplay-right'>
            <h1> {image.name} </h1>
        <div classname ='productdisplay-right-start'>
            <img src= {star_icon} alt=''/>
            <img src={star_icon} />
            <img src={star_icon} />
            <img src={star_dull_icon}/>
            <p> (122)</p>
            
        </div>
        <div className='productdisplay-right-prices'>
            <div className='productdisplay-right-old-price'>${image.old_price}</div>
            <div className='productdisplay-right-new_price'> ${image.new_price}</div>
        

        </div>
        <div className='productdisplay-right-description'>
            robe de couleur jaune ideale pour l'été
        </div>
        <div className='productdisplay-right-size'>
            <h1> Select Size </h1>
            <div className='productdisplay-right-sizes'>
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>

        </div>
        <button> ADD TO CART </button>
        <p className='productdisplay-right-category'><span> Category: </span> Women, t-shirt</p>
        <p className='productdisplay-right-category'><span> tags: </span> modern, Latest</p>
        </div>
        </div>
    )
}

export default ProductDisplay