import React from 'react'
import foto1 from '../../../assets/thumbnails/bannerCard1.jpg'
import slides from '../../../mock'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import 'swiper/swiper-bundle.css';
import styled, { css } from "styled-components"



const SwiperContainer = styled.div`
 width: 100%;
 height: 100%;
 /* -webkit-transform: scale(1.2);
          transform: scale(1.2);
  z-index: 1;
  &:hover{

-webkit-transform: scale(1.2);
      transform: scale(1.2);
z-index: 1;
 */


`

const StyledSwiper = styled(Swiper)`
  padding: 20px 0;
  /* Add your custom styles here */
/* 

  .swiper-slide {
  
    display: flex;
    justify-content: center;
    align-items: center;

  

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  } */

  .swiper-button-prev,
  .swiper-button-next {
    color: #fff;
    font-size: 30px;
    width: 50px;
    height: 50px;
   // background-color: #000;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #257BE5;
      height:5rem;
      width:5rem;
    }
  }

  .swiper-button-prev {
    left: 10px;
  }

  .swiper-button-next {
    right: 10px;
  }
  
`;


const StyledSwiperSlide = styled(SwiperSlide)`
  -webkit-transition: 250ms all;
  transition: 250ms all;
  img {
    max-width: 100%;
    height: auto;
    
  } 
  text-align: center;
    font-size: 18px;

  &:hover{

    -webkit-transform: scale(1.2);
          transform: scale(1.2);
  z-index: 1;


  }
  





`;







function Slider({ slides }) {
  return (
    <div>
      <SwiperContainer>
        <StyledSwiper
          spaceBetween={10}
          slidesPerView={4}
          slidesPerGroup={2}
          navigation={true} modules={[Navigation]}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}

          breakpoints={{
            320:{
              slidesPerView: 1,

            },
            
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
            },
            992:{
              slidesPerView: 3,

            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {slides.map((slide) => (
            <StyledSwiperSlide key={slide.image}>
              <img src={slide.image} alt={slide.title} />


            </StyledSwiperSlide >

          ))}

          {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ... */}
        </StyledSwiper>
      </SwiperContainer>
      

    </div>

  )
}

export default Slider