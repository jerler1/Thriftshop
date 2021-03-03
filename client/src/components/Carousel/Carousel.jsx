import React from "react";
import "./Carousel.css";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import MiniCard from "../MiniCard/MiniCard";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/swiper-bundle.css';

const Carousel = (props) => {

    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


  return (
    <Swiper
      spaceBetween={25}
      slidesPerView={1}
      breakpoints={{
        480: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      preloadImages={true}
      navigation
      loop = {true}
      scrollbar={{ clickable: true }}
    >
            {props.minis.map(recItem => {
                return (<SwiperSlide key={recItem._id}><MiniCard item={recItem}></MiniCard></SwiperSlide>)
            })}
    </Swiper>
  );
};

export default Carousel;
