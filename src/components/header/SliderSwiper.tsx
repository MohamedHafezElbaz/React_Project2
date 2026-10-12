// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

function SliderSwiper() {
  return (
    <>

    <div className='hero'>
      <div className='con'>
          <Swiper
        pagination={{dynamicBullets: true,}}modules={[Pagination]}
        className="w-full h-125">
          <SwiperSlide>
            <div className='conte'>
              <h4>Introducing The New</h4>
              <h3>  microsoft Xbox <br/> 360 Controller </h3>
              <p> Windows Xp/10/7/8 Ps3 , Tv Box </p>
              <Link to={""} >Shop Now</Link>
              <img src="\src\assets\img\banner-Hero1.jpg" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>

      </div>
    </div>






        
          {/* <SwiperSlide className='swiper-slide'>Slide 1</SwiperSlide>
          <SwiperSlide className='swiper-slide'>Slide 2</SwiperSlide>
          <SwiperSlide className='swiper-slide'>Slide 3</SwiperSlide>
          <SwiperSlide className='swiper-slide'>Slide 4</SwiperSlide>
          <SwiperSlide className='swiper-slide'>Slide 5</SwiperSlide>
          <SwiperSlide className='swiper-slide'>Slide 6</SwiperSlide>
          <SwiperSlide className='swiper-slide'>Slide 7</SwiperSlide>
          <SwiperSlide className='swiper-slide'>Slide 8</SwiperSlide>
          <SwiperSlide className='swiper-slide'>Slide 9</SwiperSlide> */}
        

      
    </>
  )
}

export default SliderSwiper
