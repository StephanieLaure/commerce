import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/popular/popular'
import Offers from '../components/offers/offers'
import Newcollection from '../components/newcollection/newcollection'
import Newsletters from '../components/newsletters/newsletters';


const shop = () => {
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

export default shop