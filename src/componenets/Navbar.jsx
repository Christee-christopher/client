import { React, useState } from 'react'
import { LuGlobe, LuHeart, LuMenu, LuSearch, LuShoppingCart, LuX } from "react-icons/lu"
import { Link } from 'react-router-dom';


function Navbar() {
    // const links = [

    //     {
    //         name: 'Home',
    //         Path: '/',
    //     },
    //     {
    //         name: 'Shop',
    //         path: '/shop',
    //     },
    //     {
    //         name: 'Collection',
    //         path: '/collection',
    //     },
    //     {
    //         name: 'Pages',
    //         path: '/pages',
    //     },
    //     {
    //         name: 'Blog',
    //         path: '/blog',
    //     },
    //     {
    //         name: 'About',
    //         path: '/about'
    //     },
    //     {
    //         name: 'Contact',
    //         path: '/contact'
    //     },
    // ]

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    };

    return (
        <div>
            <div className='flex justify-between items-center py-[20px] px-[30px] h-[100px] bg-[rgb(3,2,0)] text-white'>
                <div className='flex-1'>
                    <h1 className='font-bold text-[20px]'>
                        || Flone store
                    </h1>
                </div>
                <div className='flex-3'>
                    <nav className='flex justify-between items-center gap-[80px]'>

                        {/* Desktop screen */}

                        <ul className=' hidden lg:flex gap-10 font-semibold transition-all  '>
                            <li className='p-1 border-b-2 border-gray-500 hover:border-yellow-400 hover:text-yellow-400 hover:font-bold'>
                                <Link to='/'>Home</Link>
                            </li>
                            <li className='p-1 border-b-2 border-gray-500 hover:border-yellow-400 hover:text-yellow-400 hover:font-bold'>
                                <Link to='/shop'>Shop</Link>
                            </li>
                            <li className='p-1 border-b-2 border-gray-500 hover:border-yellow-400 hover:text-yellow-400 hover:font-bold'>
                                <Link to='/collection'>Collection</Link>
                            </li>
                            <li className='p-1 border-b-2 border-gray-500 hover:border-yellow-400 hover:text-yellow-400 hover:font-bold'><Link to='/pages'>Pages</Link></li>
                            <li className='p-1 border-b-2 border-gray-500 hover:border-yellow-400 hover:text-yellow-400 hover:font-bold'><Link to='/blog'>Blog</Link></li>
                            <li className='p-1 border-b-2 border-gray-500 hover:border-yellow-400 hover:text-yellow-400 hover:font-bold'><Link to='/about'>About</Link></li>
                            <li className='p-1 border-b-2 border-gray-500 hover:border-yellow-400 hover:text-yellow-400 hover:font-bold'><Link to='/contact'>Contact</Link></li>
                        </ul>
                        <div className='flex items-center justify-between gap-6 '>
                            <div className='flex justify-center items-center gap-5 text-[20px]'>
                                < LuSearch  />
                                < LuShoppingCart />
                                < LuHeart />
                                < LuGlobe />
                            </div>

                            <div className='flex justify-end lg:hidden'>
                                <button onClick={toggleMenu} className='text-[36px]'>
                                    {isMenuOpen ? <LuX /> : <LuMenu />}
                                </button>
                            </div>
                        </div>
                            {/* mobile nav menu */}
                        <div
                            className={`absolute lg:hidden top-28 right-4 w-40 z-50  bg-white rounded-lg flex flex-col items-center gap-6 p-2 font-semibold text-[#212a3c] text-lg transform transition-transform ${isMenuOpen ? "block" : "hidden"}`}
                        >
                            <li
                                className='list-none w-full text-center p-4 hover:bg-black rounded-xl hover:text-white hover:font-bold hover:shadow-inner hover:shadow-neutral-400 hover:p-5 transition-all cursor-pointer capitalize'
                                onClick={toggleMenu}
                            >
                                <Link to='/'>
                                    Home
                                </Link>
                            </li>
                            <li onClick={toggleMenu}>
                                <Link to='/shop'
                                    className='list-none w-full text-center p-4 hover:bg-black rounded-xl hover:text-white hover:font-bold hover:shadow-inner hover:shadow-neutral-400 hover:p-5 transition-all cursor-pointer capitalize'
                                >
                                    Shop
                                </Link>
                            </li>
                            <li
                                className='list-none w-full text-center p-4 hover:bg-black rounded-xl hover:text-white hover:font-bold hover:shadow-inner hover:shadow-neutral-400 hover:p-5 transition-all cursor-pointer capitalize'
                                onClick={toggleMenu}
                            >
                                <Link to='/collection'>
                                    Collection
                                </Link>
                            </li>
                            <li
                                className='list-none w-full text-center p-4 hover:bg-black rounded-xl hover:text-white hover:font-bold hover:shadow-inner hover:shadow-neutral-400 hover:p-5 transition-all cursor-pointer capitalize'
                                onClick={toggleMenu}
                            >
                                <Link to='/pages'>
                                    Pages
                                </Link>
                            </li>
                            <li
                                className='list-none w-full text-center p-4 hover:bg-black rounded-xl hover:text-white hover:font-bold hover:shadow-inner hover:shadow-neutral-400 hover:p-5 transition-all cursor-pointer capitalize'
                                onClick={toggleMenu}
                            >
                                <Link to='/blog'>
                                    Blog
                                </Link>
                            </li>
                            <li
                                className='list-none w-full text-center p-4 hover:bg-black rounded-xl hover:text-white hover:font-bold hover:shadow-inner hover:shadow-neutral-400 hover:p-5 transition-all cursor-pointer capitalize'
                                onClick={toggleMenu}
                            >
                                <Link to='/about'>
                                    About
                                </Link>
                            </li>
                            <li
                                className='list-none w-full text-center p-4 hover:bg-green-950 rounded-xl hover:text-white hover:font-bold hover:shadow-inner hover:shadow-neutral-400 hover:p-5 transition-all cursor-pointer capitalize'
                                onClick={toggleMenu}
                            >
                                <Link to='/contact'>
                                    Contact
                                </Link>
                            </li>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar