import React from 'react'

function Blog({item}) {
  return (
    <div className='relative'>
      <div className='absolute shadow-xl'>
        <img 
          src={item.image} 
          alt={item.title}      
          className='h-[250px] ' 
        />
        <p className='absolute top-8 left-4 bg-gradient-to-r from-violet-700 to-violet-950 p-[5px] text-white font-semibold'>{item.category}</p>
        
        <div className='bg-transparent absolute mt-[-100px] px-[40px] py-[20px] z-40 text-center w-full'>
          <div className='bg-white p-[20px] text-center w-full'>
            <h2 className='font-bold text-[20px] leading-[26px] mb-4 line-clamp-2'>
              {item.title}
            </h2>
            <p className='italic font-normal'>By {item.author}</p>
          </div>
        </div>
      </div>
        {/* <div className='absolute bg-white flex flex-col justify-center item-center px-4 pt-[-20px] z-80'>
          <div className='pt-[-20px] z-40'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <h6>By shop admin</h6>
        </div>
        </div> */}
    </div>
  )
}

export default Blog