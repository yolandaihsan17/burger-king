import React from "react";
import { Call, Facebook, Instagram, Message, Youtube } from 'iconsax-react';

export default function Footer() {
    return (

        <footer className='w-full bg-gray-800 shadow-md p-8 text-white'>
            <div className='flex flex-col items-start justify-start w-full max-w-4xl mx-auto gap-4'>

                <div className=' text-xl mb-2'>Burger King Delivery</div>
                <div className='flex flex-row items-center justify-start gap-8 flex-wrap'>

                    <div className='flex flex-row items-center justify-start gap-2'>
                        <Call variant='Bold' />
                        <a href='tel:1923084'>1923084</a>
                    </div>

                    <div className='flex flex-row items-center justify-start gap-2'>
                        <Message variant='Bold' size={20} />
                        <a href='mailto:guestservice@burgerking.co.id'>guestservice@burgerking.co.id</a>
                    </div>

                    <div className='flex flex-row items-center justify-start gap-2'>
                        <Facebook variant='Bold' />
                        <Instagram variant='Bold' />
                        <Youtube variant='Bold' size={28} />
                    </div>

                </div>

                <div className='flex lg:flex-row lg:items-center flex-col items-start justify-start text-xs text-gray-400 lg:divide-x mt-2 flex-wrap gap-2'>
                    <a className=' lg:pr-4'>About us</a>
                    <a className=' lg:px-4'>Kebijakan Privasi</a>
                    <a className=' lg:px-4'>Syarat dan Ketentuan</a>
                    <a className=' lg:px-4'>TM & &copy; 2022 Burger King Corporation. Used Under License. All rights reserved.</a>
                </div>


            </div>
        </footer>
    )
}