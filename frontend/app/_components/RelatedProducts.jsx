import React, { useEffect, useState } from 'react'
import CardItem from './CardItem';

const RelatedProducts = ({category,
    products,currency ,
    subCategory}) => {


const [relatedProducts , setRelatedProducts ] = useState(null)

// fetch related products data 
const getRelatedProducts_ =() => {

    if(products.length > 0){
        let reDa =products.filter(product => product.category === category);
        reDa =reDa.filter(product => product.subCategory === subCategory);
       
       setRelatedProducts(reDa.slice(0 ,4))  
    }

}

useEffect(()=>{

    getRelatedProducts_()

    if(relatedProducts){
        console.log(relatedProducts)
    }

},[])

  return (
    <div className='' >
       {
        relatedProducts && (


<div className="py-5 px-5 ">
<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 ' >

{
    relatedProducts.map((product, index) => (
        <CardItem key={index} cardData={product} currency={currency} />
    ))
}
</div>
</div>



        )
       } 



    </div>
  )
}

export default RelatedProducts