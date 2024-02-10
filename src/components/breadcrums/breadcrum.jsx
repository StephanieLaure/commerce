import React from "react";
import './breadcrum.css'
import arrow_icon from '../assets/arrow_icon.png'

const breadcrum =(props) =>{
    const {image} = props;

    return(
        <div className="breadcrum">
            HOME<img src={arrow_icon} alt=''/> SHOP <img src={arrow_icon}/> {image.category}<img src={arrow_icon} alt=''/>{image.name} 

        </div>
    )
}

export default breadcrum