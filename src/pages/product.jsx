import React, {useContext} from "react";
import { ShopContext } from "../Context/ShopContext.jsx";
import { useParams } from "react-router-dom";
import ProductDisplay from "../components/productdisplay/productdisplay.jsx";
import Breadcrum from "../components/breadcrums/breadcrum.jsx";
import Descriptionbox from "../components/descriptionbox/descriptionbox.jsx";
import Relatedproduct from "../components/relatedproducts/relatedproduct.jsx";

const Product = () =>{
    const {all_product}= useContext(ShopContext);
    const {productId} = useParams();
    const product = all_product.find((e)=> e.id === Number(productId));
return(
    <div>
        <Breadcrum product={product}/>
        <ProductDisplay product={product}/>
        <Descriptionbox/>
        <Relatedproduct/>
    </div>
)
}

export default Product