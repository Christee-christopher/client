import React from 'react'
import Product from '../componenets/Product'

const products = [
  {   
      id: 1,
      image: "/images/gucci-shoes.png",
      title: "gucci shoes",
      price: 200,
      category: 'Shoes'
  },
  {   
      id: 2,
      image: "/images/Fall_Jacket_Trousers_Men_Leisure_Set_-_Black_Tops.png",
      title: "fall Jacket",
      price: 200,
      discountGiven: '-',
      discount: "$ 180",
      category: 'Clothings'
  },
  {   
      id: 3,
      image: "/images/Men_s_Casual_Printed_Tie.png",
      title: "gucci shoes",
      price: 150,
      discountGiven: "-",
      discount: "$ 250",
      category: 'Ties'
  },
  {   
      id: 4,
      image: "/images/wristwatch.png",
      title: "Wristwatch",
      price: 200,
      category: 'Accessories'
  },
  {   
      id: 5,
      image: "/images/whiteshirt.png",
      title: "White shirt",
      price: 200,
      category: 'Clothing'
  },
  {   
      id: 6,
      image: "/images/jeepbag.png",
      title: "gucci bags",
      price: 200,
      category: 'Bags'
  },
  {   
      id: 7,
      image: "/images/men-shoes.png",
      title: "gucci shoes",
      price: 200,
      discountGiven: "-",
      discount: "$ 160",
      category: 'Mens Shoes'
  },
  {   
      id: 8,
      image: "/images/2piece-set1.png",
      title: "vintage waka",
      price: 200,
      category: 'Clothings'
  },
  {   
      id: 9,
      image: "/images/2piece3.png",
      title: "vintage moves",
      price: 200,
      category: 'Clothings'
  },
  {   
      id: 10,
      image: "/images/designerstrouser.png",
      title: "gucci shoes",
      price: 200,
      category: 'clothings'
  },
  {   
      id: 11,
      image: "/images/funkyjacket.png",
      title: "gucci shoes",
      price: 200,
  },
  {   
      id: 12,
      image: "/images/2piece4.png",
      title: "gucci shoes",
      price: 400,
      discountGiven: "-",
      discount: "$ 600",
  },
  {   
      id: 13,
      image: "/images/papas-cap.png",
      title: "gucci shoes",
      price: 100,
      discountGiven: "-",
      discount: "$ 450",
  },
  {   
      id: 14,
      image: "/images/waistbag.png",
      title: "gucci shoes",
      price: 300,
  },
  {   
      id: 15,
      image: "/images/senator.png",
      title: "gucci shoes",
      price: 200,
      discountGiven: "-",
      discount: "$ 400",
  },
  {   
      id: 16,
      image: "/images/elastictrouser.png",
      title: "gucci shoes",
      price: 200,
  },
  {   
      id: 17,
      image: "/images/blueshirt.png",
      title: "gucci shoes",
      price: 200,
  },
  {   
      id: 18,
      image: "/images/bracelet.png",
      title: "gucci shoes",
      price: 200,
  },
  {   
      id: 19,
      image: "/images/Fall_Jacket_Trousers_Men_Leisure_Set_-_Black_Tops.png",
      
      title: "gucci shoes",
      price: 200,
  },
  {   
      id: 20,
      image: "/images/whiteloafers.png",
      title: "gucci shoes",
      price: 200,
  },

]

function Shop() {
  return (
    <main className='py-[20px]'>
      <div className='container mx-auto border h-auto'>
        <div className='flex flex-col gap-x-10 md:flex-row mt-10'>
          {/* list products */}
          <section className='border h-full w-full lg:flex-3'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {products.map((item) => (
                <Product key={item.id} item={item} />
              ))}

            </div>


          </section>
          {/* categories */}
          <section className='border flex-col h-full w-[500px] lg:flex-2 gap-6'>
            <div className='border px-[15px] py-[10px]'>
              <h2 className='font-semibold text-[18px]'>
                Categories
              </h2>

            </div>

            <div className='border px-[15px] py-[10px]'>
              <h2 className='font-semibold text-[18px]'>
                Color
              </h2>

            </div>

            <div className='border px-[15px] py-[10px]'>
              <h2 className='font-semibold text-[18px]'>
                Filter By Price
              </h2>

            </div>

            <div className='border px-[15px] py-[10px]'>
              <h2 className='font-semibold text-[18px]'>
                Top Rated Products
              </h2>

            </div>
          </section>
        </div>

      </div>
      
    </main>
  )
}

export default Shop