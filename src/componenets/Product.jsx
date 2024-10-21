import React from 'react'
import { LuHeart } from 'react-icons/lu'
import { Link } from 'react-router-dom'


function Product({ product }) {
  return (
    <div className=''>
      <div className='bg-[#b2afac] p-4'>
        <Link to={`/shop/${product.id}`}>
          <img src={product.image} alt={product.title}  />
        </Link>
      </div>

      <div className='py-[10px] flex flex-col gap-2'>
        <div className='flex justify-between items-center'>
          <Link to={`/shop/${product.id}`}>
            <h2 className='font-bold capitalize'>{product.title}</h2>
          </Link>

          <LuHeart className='font-semibold ' />
        </div>

        <div className='flex flex-row gap-2'>
          <p className='font-bold'>$ {product.price}</p>
          <p>{product.discountGiven}</p>
          <p className='text-pink-600 line-through font-bold'> {product.discount}</p>
            
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