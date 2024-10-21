import React from 'react'
import { LuBadgeDollarSign, LuRadar, LuTruck } from "react-icons/lu"
import NewArrivals from '../componenets/NewArrivals'
import Blog from '../componenets/Blog'
import { Link } from 'react-router-dom'

const NewProduct = [
  {   
      id: 1,
      image: "/images/gucci-shoes.png",
      title: "gucci shoes",
      price: 200,
  },
  {   
      id: 2,
      image: "/images/Fall_Jacket_Trousers_Men_Leisure_Set_-_Black_Tops.png",
      title: "fall Jacket",
      price: 200,
      discountGiven: '-',
      discount: "$ 180",
  },
  {   
      id: 3,
      image: "/images/Men_s_Casual_Printed_Tie.png",
      title: "gucci shoes",
      price: 150,
      discountGiven: "-",
      discount: "$ 250",
  },
  {   
      id: 4,
      image: "/images/wristwatch.png",
      title: "gucci shoes",
      price: 200,
  },
  {   
      id: 5,
      image: "/images/whiteshirt.png",
      title: "gucci shoes",
      price: 200,
  },
  {   
      id: 6,
      image: "/images/jeepbag.png",
      title: "gucci shoes",
      price: 200,
  },
  {   
      id: 7,
      image: "/images/men-shoes.png",
      title: "gucci shoes",
      price: 200,
      discountGiven: "-",
      discount: "$ 160",
  },
  {   
      id: 8,
      image: "/images/2piece-set1.png",
      title: "gucci shoes",
      price: 200,
  },
  {   
      id: 9,
      image: "/images/2piece3.png",
      title: "gucci shoes",
      price: 200,
  },
  {   
      id: 10,
      image: "/images/designerstrouser.png",
      title: "gucci shoes",
      price: 200,
  },
  {   
      id: 10,
      image: "/images/funkyjacket.png",
      title: "gucci shoes",
      price: 200,
  },
  {   
      id: 10,
      image: "/images/2piece4.png",
      title: "gucci shoes",
      price: 400,
      discountGiven: "-",
      discount: "$ 600",
  },
  {   
      id: 10,
      image: "/images/papas-cap.png",
      title: "gucci shoes",
      price: 100,
      discountGiven: "-",
      discount: "$ 450",
  },
  {   
      id: 10,
      image: "/images/waistbag.png",
      title: "gucci shoes",
      price: 300,
  },
  {   
      id: 10,
      image: "/images/senator.png",
      title: "gucci shoes",
      price: 200,
      discountGiven: "-",
      discount: "$ 400",
  },
  {   
      id: 10,
      image: "/images/elastictrouser.png",
      title: "gucci shoes",
      price: 200,
  },
  {   
      id: 10,
      image: "/images/blueshirt.png",
      title: "gucci shoes",
      price: 200,
  },
  {   
      id: 10,
      image: "/images/bracelet.png",
      title: "gucci shoes",
      price: 200,
  },
  {   
      id: 10,
      image: "/images/Fall_Jacket_Trousers_Men_Leisure_Set_-_Black_Tops.png",
      
      title: "gucci shoes",
      price: 200,
  },
  {   
      id: 10,
      image: "/images/whiteloafers.png",
      title: "gucci shoes",
      price: 200,
  },

]
const BlogPost =[
  {
    image: "/images/blog3.jpeg",
    category: 'Lifestyle',
    title: 'Wears for coffee in the hot sun',
    author: 'matrikshub'
  },
  {
    image: "/images/blog3.jpeg",
    category: 'Tech',
    title: 'Dreeping like a dev in winter',
    author: 'cece dev'
  },
  {
    image: "/images/blog3.jpeg",
    category: 'Watches',
    title: 'How to pick proper watches ',
    author: 'sebia mongulo'
  },
]



function HomeScreen() {
  return (
    <div>
      <div className='hero-banner h-[100vh] md:min-h-[80vh] lg:min-h-[80vh]'>
        <section className='hero py-5 px-[20px]  sm:px-10 md:pl-auto'>
          <div className='container mx-auto  pt-[100px] pb-[30px] md:pt-[100px] md:pb-[50px] lg:pt-[150px] text-white lg:text-black'>
            <div className='flex flex-col md:flex-col lg:flex-row '>
              <div className='flex-1 h-[100px] mb-[30px] md:mb-0'>

              </div>

              <div className='flex-1 h-[100px] mb-[60px] pt-[60px] md:mb-0 lg:pt-0 justify-center items-center'>
                <div className='flex flex-row gap-1 px-[10px] text-lg justify-center items-center '>
                  <span className='block h-0.5 w-20 animate-pulse bg-white lg:bg-black'></span>

                  <h2 className='text-[26px] px-2'>Stylish</h2>

                  <span className='block h-0.5 w-20 animate-pulse bg-white lg:bg-black '></span>
                </div>
                <h1 className='   text-[55px] text-center '>Male Clothes</h1>
                <p className='py-[5px] px-[20px] text-center'>30% 0ff summer vaccation</p>
                <div className='px-[50px] py-[10px] text-center'>
                  <Link to='/shop' className='border border-white  uppercase p-[15px] py-[10px] px-[10px] lg:border-black'>Shop now</Link>
                </div>
              </div>
            </div>

          </div>
        </section>
      </div>

      {/* section hero services */}
      <section className='bg-white h-auto pt-[80px] pb-[20px]'>
        <div className='flex flex-col md:flex-row pb-10 justify-center items-center lg:container lg:mx-auto gap-[30px] '>
          <div className=' pb-[15px] text-center flex flex-col items-center justify-center w-[50%] gap-[10px] '>
          < LuTruck className='text-[40px] items-center' />
            <h2 className='font-semibold text-[16px]'>Free Shipping</h2>
            <p className='text-[14px]'>lorem ipsum dolor sit amet consectetu adipiscing olit sed</p>

          </div>

          <div className='pb-[15px] text-center flex flex-col items-center justify-center w-[50%] gap-[10px] '>
            < LuRadar className='text-[40px]' />
            <h2 className='font-semibold text-[16px]'>Support 24/7</h2>
            <p className='text-[14px]'>lorem ipsum dolor sit amet consectetu adipiscing olit sed</p>
          </div>

          <div className='pb-[15px] text-center flex flex-col items-center justify-center w-[50%] gap-[10px] '>
            <LuBadgeDollarSign  className='text-[40px]'/>
            <h2 className='font-semibold text-[16px]'>
              Money Return
            </h2>
            <p className='text-[14px]'>lorem ipsum dolor sit amet consectetu adipiscing olit sed</p>
          </div>
        </div>

      </section>

      {/* Product display */}
      <section className='p-[20px] bg-rgb(149,145,141)  h-auto '>
        <div className='flex flex-col items-center justify-center'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-[40px]'>New Arrival</h1>
            {/* < LuMinus className='w-[50px] h-11'/> */}
            <span className='block h-0.5 w-[50%] bg-black mx-[40px] mb-3 animate-bounce'></span>  
            <p className='text-[14px]'>
              lorem ipsum dolor sit amet consectetu
            </p>
          </div>

          {/* show product */}
          < div className='mt-[30px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5'>
            {NewProduct.map((item, index) => (
              <NewArrivals key={index} item={item} />
            ))}
          </div>
      
        </div>
      </section>
        {/* Blog section */}

      <section className='bg-[#b1aeab]/10 h-auto py-[50px]'>
        <div className='flex flex-col gap-10'>
          <div className='flex flex-row gap-1 px-[10px] text-lg justify-center items-center '>
            <span className='block h-0.5 w-20 animate-pulse bg-black lg:bg-black'></span>

            <h2 className='text-[26px] px-2'>Our Blog</h2>

            <span className='block h-0.5 w-20 animate-pulse bg-black lg:bg-black '></span>
          </div>

          <div className='relative min-h-[1600px] mt-[20px] px-[20px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 lg:min-h-[80vh] gap-8'>
            {BlogPost.map((item, index) => (
              <Blog key={index} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomeScreen