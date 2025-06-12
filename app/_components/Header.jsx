"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { CiSearch, CiMenuFries } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { useRouter } from 'next/navigation';


export default function Header() {

    const router = useRouter()

    const [openMenu, setOpenMenu] = useState(false);

    const showLogin = () => {
        router.push("/login")
    }
    const showSignup = () => {
        router.push("/signup")
    }
    return (
        <header className='w-full'>
            <nav className='py-2.5 bg-gray-50 border-b border-gray-200'>
                <div className='max-w-screen-xl gap-10 lg:gap-0 px-2 md:px-8 lg:px-4 xl:px-0 mx-auto flex justify-between items-center'>

                    <div className='flex items-center justify-center'>
                        <Image src={'/logo.png'} width={50} height={50} alt='logo' />
                        <span className='text-xl text-gray-600 font-semibold'>M_Style</span>
                    </div>
                    <div className='hidden lg:flex items-center gap-4 lg:gap-8 '>
                        <Link className="hover:text-gray-900 transition " href={"/"}>Home</Link>
                        <Link className="hover:text-gray-900 transition" href={'/shop'}>Shop</Link>
                        <Link className="hover:text-gray-900 transition" href={'/contact'}>Contact</Link>
                        <button onClick={() => router.push('/admin')} className="text-xs border px-4 py-1.5 rounded-full">Admin Dashboard</button>
                    </div>


                    <div className='relative  lg:hidden grow'>
                        <input type="text" className=' w-full py-1.5 border-b outline-none text-sm text-gray-500' placeholder='search' />
                        <span className='absolute top-3 z-10 right-2 cursor-pointer hover:scale-125 transition-all'><CiSearch /></span>
                    </div>


                    <div onClick={() => setOpenMenu(!openMenu)} className='lg:hidden'><CiMenuFries /></div>
                    <div className='hidden space-x-2 lg:flex items-center justify-center'>
                        <div className='relative'>
                            <input type="text" className=' py-1.5 border-b outline-none text-sm text-gray-500' placeholder='search' />
                            <span className='absolute top-3 right-2 cursor-pointer hover:scale-125 transition-all'><CiSearch /></span>
                        </div>
                        <button onClick={showLogin} className='border-2  px-4 py-1 bg-white hover:bg-gray-200 hover:scale-105  transition-all border-gray-400 rounded-lg text-gray-700 font-medium cursor-pointer'>Login</button>
                        <button onClick={showSignup} className='bg-gray-800 hover:bg-black hover:scale-105  transition-all border-2 px-4 py-1 rounded-lg text-white font-medium cursor-pointer'>Signup</button>

                    </div>
                    <div
                        className={`${openMenu ? 'translate-x-0' : 'translate-x-full'
                            } transition-transform duration-300 ease-in-out flex lg:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 h-screen right-0 bg-white z-50`}
                    >
                        <div onClick={() => setOpenMenu(false)} className='absolute right-6 top-6 cursor-pointer'>
                            <RxCross1 size={22} />
                        </div>

                        <Link onClick={() => setOpenMenu(false)} className="hover:text-gray-900 transition" href="/">Home</Link>
                        <Link className="hover:text-gray-900 transition" href="/shop">Shop</Link>
                        <Link className="hover:text-gray-900 transition" href="/contact">Contact</Link>
                    </div>
                </div>
            </nav>
        </header >
    )
}
