'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function RecentWorkCarousel() {
  const slides = [
    { id: 1, title: 'csh Design System', bio: 'La simplicité à votre service.', href: '/home', img: '/test.png'},
    { id: 2, title: 'Figma Thumbs',  bio: '', href: '/home', img: '/test.png' },
    { id: 3, title: 'csh UI Landing Kit',  bio: '', href: '/home', img: '/aclstudio' },
    { id: 4, title: 'csh Icons',  bio: '', href: '/home', img: '/aclstudio' },
  ];

  return (
    <div className="max-w mx-auto py-8 gap-4">
      <div className="flex mx-auto items-center justify-between items-center max-w-[1100px] py-8">  
            <h2 className=" text-[16px] lg:text-[26px] font-semibold text-gris_2">
                <span className="text-bleu">Recent work.</span> made by csh
            </h2>
            {/* Flèches personnalisées */}
            <div className="flex ">
                <button
                className="swiper-button-prev-custom p-4"
                aria-label="back"
                >
                <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.0001 18L9 12L15.0001 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </button>

                <button
                className="swiper-button-next-custom p-4"
                aria-label="next"
                >
                    <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M8.99989 6L15 12L8.99988 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1.5}
        navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="relative flex min-w-full snap-x snap-mandatory !overflow-y-visible"
        style={{ paddingLeft: "calc(50% - 68rem / 2)" }}
        >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <a 
            className="h-[490px] w-[350px] bg-gray-200 rounded-xl flex overflow-hidden justify-center items-center flex flex-col p-4 transition ease-in-out hover:drop-shadow-md	 duration-250"            
            href={slide.href}
            >
              <h1 className="text-white justify-self-start z-10 relative">
                {slide.title
              }</h1>
              <img src={slide.img} alt={slide.title} className=' justify-self-center m-auto w-max'/>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}