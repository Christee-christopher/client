import React from 'react'

export default function Footer() {
  return (
    <section className='h-auto pt-[90px] pb-[40px] lg:h-[300px] bg-stone-400'>
        <div className='container mx-auto'>
            <div className='footer-links grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                <div className='flex flex-col gap-1 justify-center items-center'>
                    <h1 className='font-bold text-[20px]'>|| Flone store</h1>
                    <p>© 2019 Flone store.</p>
                    <p>All Rights Reserved</p>

                </div>

                <div className='flex flex-col justify-start items-start gap-1'>
                    <h1 className='font-semibold text-[18px] '>About Us</h1>
                    <ul>
                        <li>About us</li>
                        <li>Store location</li>
                        <li>Contact</li>
                        <li>Orders tracking</li>
                    </ul>

                </div>

                <div className='flex flex-col justify-start items-start'>
                    <h1 className='font-semibold text-[18px]'>Useful Links</h1>
                    <ul>
                        <li>Returns</li>
                        <li>Support Policy</li>
                        <li>Site guide</li>
                        <li>FAQs</li>
                    </ul>

                </div>

                <div className='flex flex-col justify-start items-start'>
                    <h1 className='font-semibold text-[18px]'>Follow Us</h1>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Youtube</li>
                    </ul>

                </div>

                <div className='flex flex-col justify-start items-start'>
                    <h1 className='font-semibold text-[18px]'>Subscribe</h1>
                    <ul>
                        <div className='bg-stone-400 lg:w-[75%] pt-1'>
                        <li>Get E-mail updates about our shop and special offers.</li>
                        
                        
                        </div>
                        
                        <form className='mt-[40px] gap-3'>
                            <input placeholder='Enter your email here.' />
                            <button>SUBSCRIBE</button>
                        </form>
                    </ul>
                </div>

            </div>

        </div>
        
    </section>
  )
}
