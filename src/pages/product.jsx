import React, {useContext} from "react";
import { ShopContext } from "../Context/ShopContext.jsx";
import { useParams } from "react-router-dom";
import ProductDisplay from '../components/ProductDisplay/ProductDisplay.jsx';
import Breadcrum from "../components/breadcrums/breadcrum.jsx";

const Product = () =>{
    const {all_product}= useContext(ShopContext);
    const {imageId} = useParams();
    const image = all_product.find((e)=> e.id === Number(imageId));
return(
    <div>
        <Breadcrum image={image}/>
        <ProductDisplay image={image}/>
    </div>
)
}

export default Product