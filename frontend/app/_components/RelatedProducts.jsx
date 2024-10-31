import React, { useEffect, useState } from 'react'
import CardItem from './CardItem';
import { motion } from 'framer-motion';

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
        <motion.div   
        initial={{ opacity: 0 ,y:300 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{once: true}}
        transition={{ duration: 0.9, delay:.2 * index ,type:"spring", stiffness:50 ,damping :10 }}  >
        <CardItem key={index} cardData={product} currency={currency} />
        </motion.div>
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