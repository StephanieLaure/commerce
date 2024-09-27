import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offers from '../components/offers/offers'
import Newcollection from '../components/Newcollection/Newcollection'
import Newsletters from '../components/newsletters/newsletters';


const Shop = () => {
return(
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <Newcollection/>
        <Newsletters/>
        
    </div>
)
}

export default Shop