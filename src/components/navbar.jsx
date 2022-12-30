import React from "react";

import Logo from '../assets/logo.png'
import { ShoppingCart } from 'iconsax-react';

export default function Navbar() {
    return (
        <div className='w-full bg-gray-800 shadow-md p-8 py-4 text-white sticky top-0 left-0 z-20' >
            <div className='flex flex-row items-center justify-between w-full max-w-5xl mx-auto text-xl'>

                <div className='flex flex-row items-center justify-start gap-4'>
                    <img src={Logo} width={50} height={50} className={'mr-8'} />
                    <a href='#'>Menu</a>
                    <a href='#'>Order</a>
                </div>

                <div className='flex flex-row items-start justify-end gap-8'>
                    <div>Login</div>
                    <ShoppingCart className='text-orange-600' />
                </div>
            </div>
        </div >
    )
}