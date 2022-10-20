// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/bundle";

const LoginSlider = ({ mt }) => {
  return (
    <div className={`bg-blue-200  w-1/3 min-h-full  text-center  bg-bottom bg-no-repeat flex flex-row items-center sm:hidden md:hidden lg:hidden`}>
      <Swiper modules={[Autoplay]} speed={1000} autoplay={true} slidesPerView={1}>
        <SwiperSlide>
          <div className="mx-24 text-black  overflow-hidden">
            “ O Allah! grant us a good outcome on all of our affairs and save us from the disgrace of this world and the punishment of ht Hereafter.
            from the disgrace of this world and the punishment of ht Hereafter. ”
            <br />
            <br />
            [Jami’ as-Sagir: 1450]
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <p className="mx-24 text-black ">
            “ Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo vel, consectetur labore impedit ea nostrum! Laboriosam ipsum sunt
            consequuntur nobis, optio magni. ”
            <br />
            <br />
            [Lorem, ipsum dolor: 4150]
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p className="mx-24 text-black ">
            “ O Allah! grant us a good outcome on all of our affairs and save us from the disgrace of this world and the punishment of ht Hereafter.
            from the disgrace of this world and the punishment of ht Hereafter. ”
            <br />
            <br />
            [Jami’ as-Sagir: 1450]
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p className="mx-24 text-black ">
            “ Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo vel, consectetur labore impedit ea nostrum! Laboriosam ipsum sunt
            consequuntur nobis, optio magni. ”
            <br />
            <br />
            [Lorem, ipsum dolor: 4150]
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default LoginSlider;
