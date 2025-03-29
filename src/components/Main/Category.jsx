import React from "react";
import Product from "./Product";
import { Swiper, SwiperSlide } from "swiper/react";
import s from "../../styles/Main/Category.module.css";

import "swiper/css";

const Category = ({ title, products }) => {
    return (
        <div className={s.category}>
            <h4>{title}</h4>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <Product image={"1"} price={"102"} />
                </SwiperSlide>
                <SwiperSlide>
                    <Product image={"1"} price={"102"} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;
