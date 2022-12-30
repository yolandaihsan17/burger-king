import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { ArrowLeft, ArrowRight } from 'iconsax-react';

import { Navigation, Pagination, A11y } from 'swiper';
import Layout from './components/layout';

function App() {

  const images = [
    'https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  ]

  const menus = [{
    name: 'Burger With Fries',
    image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=800'
  }, {
    name: 'Angry Menu',
    image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800'
  }, {
    name: 'Calm Menu',
    image: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800'
  }, {
    name: 'Sunday Menu',
    image: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=800'
  }, {
    name: 'Happy Menu',
    image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=800'
  }, {
    name: 'Extra Bold',
    image: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=800'
  }, {
    name: 'Sunday Fries',
    image: 'https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=800'
  }, {
    name: 'Dumplings',
    image: 'https://images.pexels.com/photos/955137/pexels-photo-955137.jpeg?auto=compress&cs=tinysrgb&w=800'
  }, {
    name: 'Donuts!',
    image: 'https://images.pexels.com/photos/3338681/pexels-photo-3338681.jpeg?auto=compress&cs=tinysrgb&w=800'
  }]

  return (
    <Layout >
      <div className='w-full relative'>
        <Swiper
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={true}
          modules={[Navigation, Pagination, A11y]}
          loop
          navigation={{
            nextEl: '.next-arrow',
            prevEl: '.prev-arrow'
          }}

          speed={1000}
        >
          {images.map((item, index) => (
            <SwiperSlide>
              <img src={item} key={index} height={400} className={' h-[500px] w-full object-cover object-center'}></img>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className=' prev-arrow z-20 w-8 h-8 rounded-full bg-white/60 backdrop-blur-sm shadow-md flex flex-row items-center justify-center absolute top-1/2 left-8 transform -translate-x-1/2 -translate-y-1/2'>
          <ArrowLeft size={20}></ArrowLeft>
        </button>

        <button className=' next-arrow z-20 w-8 h-8 rounded-full bg-white/60 backdrop-blur-sm shadow-md flex flex-row items-center justify-center absolute top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2'>
          <ArrowRight size={20}></ArrowRight>
        </button>
      </div>

      <div
        className='w-full bg-orange-100 flex flex-col items-center justify-start gap-2 min-h-screen pb-20 bg-fixed bg-center bg-cover relative'
        style={{ backgroundImage: `url(https://images.pexels.com/photos/4046718/pexels-photo-4046718.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1080&dpr=2)` }}
      >

        <div className='w-full h-full min-h-screen absolute top-0 left-0 bg-white/60 backdrop-blur-md'></div>

        <div className=' font-bold text-4xl text-yellow-800 my-8 drop-shadow-md'>Our Menus</div>
        <div className=' flex flex-row items-stretch justify-center flex-wrap w-full max-w-3xl z-10'>

          {menus.map(item => (
            <div className=' sm:basis-[33%] h-99 p-2 basis-[100%]'>
              <div className=' w-full bg-white/60 shadow-md rounded-md p-4 backdrop-blur-sm'>
                <img src={item.image} className='w-full rounded-md h-52 object-cover object-center'></img>
                <div className=' text-xl text-orange-800 my-4'>{item.name}</div>
                <button className='flex items-center justify-center text-white bg-orange-600 p-2 w-full rounded-md'>Order</button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </Layout>
  )
}

export default App
