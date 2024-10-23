import React from 'react'
import { LuHeart } from 'react-icons/lu'
import { Link } from 'react-router-dom'


function Product({ item }) {
  return (
    <div className=''>
      <div className='bg-[#b2afac] p-4'>
        <Link to={`/shop/${item.id}`}>
          <img src={item.image} alt={item.title}  />
        </Link>
      </div>

      <div className='py-[10px] flex flex-col gap-2'>
        <div className='flex justify-between items-center'>
          <Link to={`/shop/${item.id}`}>
            <h2 className='font-bold capitalize'>{item.title}</h2>
          </Link>

          <LuHeart className='font-semibold ' />
        </div>

        <div className='flex flex-row gap-2'>
          <p className='font-bold'>$ {item.price}</p>
          <p>{item.discountGiven}</p>
          <p className='text-pink-600 line-through font-bold'> {item.discount}</p>
            
        </div>
        {/* <div className='flex items-center justify-center font-bold text-[16px] gap-2'>
          <LuShoppingCart />
          <button >
            Add to Cart
          </button>
        </div> */}
      </div>
    </div>
  )
}

export default Product