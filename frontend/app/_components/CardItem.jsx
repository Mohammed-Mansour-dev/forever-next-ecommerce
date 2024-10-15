import Image from 'next/image';
import Link from 'next/link';
import React from 'react'



{/* img */}
  {/* prod name */}
    {/* price */}



const CardItem = ({cardData ,currency}) => {
const {_id ,name ,image ,price} = cardData;

  return (
    <div>

<Link href={`/product/${_id}`} className=' block hover:border-gray-200 transition-all border border-transparent '  >  
{/* img */}
<Image src={image[0]} alt="product image  "  className='w-full  h-64 object-cover  '  />
<div className='px-1 py-2 ' >
  {/* prod name */}
    <h1 className='line-clamp-1 font-normal text-sodark font-outfit text-sm ' >{name}</h1>
    {/* price */}
    <h1 className='text-lg font-normal font-outfit  ' >{currency}{price}</h1>
</div>



</Link>



    </div>
  )
}

export default CardItem
