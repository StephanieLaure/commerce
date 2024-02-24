import React from "react";
import './breadcrum.css'
import arrow_icon from '../assets/arrow_icon.png'

const breadcrum =(props) =>{
    const {product} = props;

    return(
        <div className="breadcrum">
            HOME<img src={arrow_icon} alt=''/> SHOP <img src={arrow_icon}/> {product.category}<img src={arrow_icon} alt=''/>{product.name} 

        </div>
    )
}

export default breadcrum