"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SideBar = () => {
    const pathname = usePathname()
    console.log(pathname);
    
    const menuItems = [
        { name: 'Product List', path: '/admin', },
        { name: 'Add Product', path: '/admin/add-product',  },
        { name: 'Orders', path: '/seller/orders',  },
    ];

    return (
        <div className='md:w-64 w-16 border-r min-h-screen text-base border-gray-300 py-2 flex flex-col'>
            {menuItems.map((item) => {

                const isActive = pathname === item.path;

                return (
                    <Link href={item.path} key={item.name} passHref>
                        <div
                            className={
                                `flex items-center py-3 px-4 gap-3 ${isActive
                                    ? "border-r-4 md:border-r-[6px] bg-gray-600/10 border-gray-500/90"
                                    : "hover:bg-gray-100/90 border-white"
                                }`
                            }
                        >
                            {/* <Image
                                src={item.icon}
                                alt={`${item.name.toLowerCase()}_icon`}
                                className="w-7 h-7"
                            /> */}
                            <p className='md:block hidden text-center'>{item.name}</p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default SideBar;
