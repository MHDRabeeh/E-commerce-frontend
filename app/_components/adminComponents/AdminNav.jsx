import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

export default function AdminNav() {
    return (
        <div className='flex items-center px-4 md:px-8 py-3 justify-between border-b'>
            <Image  className='w-12 lg:w-12 cursor-pointer' src={assets.logo} alt="" />
            <button className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
        </div>
    )
}
