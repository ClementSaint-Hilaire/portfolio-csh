// components/AutoSwiper.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { Pagination } from "swiper/modules";


const HomeMainCarrousel = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true, 
        }}
        className="h-full"
      >
         <SwiperSlide>
          <a href="/design" className="flex items-center justify-center h-full">
            <Image
                src="/Home/MainBento.webp" 
                alt="Discover the new Wattiz’ app. Design to enhance customer experience."
                width={1800} 
                height={1000} 
            />
          </a>
          </SwiperSlide>
        <SwiperSlide>
          <a href="/" className="flex items-center justify-center h-full">
            <Image
                src="/Home/Wattiz.webp" 
                alt="Discover the new Wattiz’ app. Design to enhance customer experience."
                width={1800} 
                height={1000} 
            />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="/https://csh.beehiiv.com/" className="flex items-center justify-center h-full">
            <Image
                src="/Home/Newsletter.webp" 
                alt="Discover the weekly tech informative newsletter."
                width={1800} 
                height={1000} 
            />          
        </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://discord.gg/EPBXReEWak" target="_blank" className="flex items-center justify-center h-full">
            <Image
                src="/Home/Discord.webp" 
                alt="Join the Community Discord."
                width={1800} 
                height={1000} 
            />          
        </a>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default HomeMainCarrousel;