import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Autoplay } from "swiper/modules";

const Carousel = () => {
  return (
    <div className="">
      <Swiper
        style={{ height: "380px" }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        loop={true}
        effect={"fade"}
        slidesPerView={1}
        slidesPerGroup={1}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[EffectFade, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="/slide1.png"
            width={907}
            height={454}
            alt="nixblue slide uno"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/slide2.png"
            width={968}
            height={230}
            alt="nixblue logo"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/slide3.png"
            width={968}
            height={230}
            alt="nixblue logo"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
