import React from 'react'
import { LuHeart } from 'react-icons/lu'



function NewArrivals({ item }) {
  return (
    <div className=''>
        <div className='bg-[#b2afac] p-4'>
            <img src={item.image} alt={item.title}  />
        </div>

        <div className='py-[10px] flex flex-col gap-2'>
            <div className='flex justify-between items-center'>
                <h2 className='font-bold capitalize'>{item.title}</h2>

                <LuHeart className='font-semibold ' />
            </div>

            <div className='flex flex-row gap-2'>
                <p className='font-bold'>$ {item.price}</p>
                <p>{item.discountGiven}</p>
                <p className='text-pink-600 line-through font-bold'> {item.discount}</p>
            </div>
        </div>

    </div>
  )
}

export default NewArrivals