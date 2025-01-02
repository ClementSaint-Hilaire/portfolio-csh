'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function AppDesignCarousel() {
  const appSlides = [
    { id: 1, title: 'Wattiz', bio: 'Empower the ride', href: '/design', img: '/design/wattiz.png'},
    { id: 2, title: 'Retro Pizza', bio: 'Street good', href: '/design', img: '/design/pizza.png'},
    { id: 3, title: 'eMusic', bio: 'Musical freedom at your hand', href: '/design', img: '/design/emusic.png'},

  ];

  return (
    <div className="max-w mx-auto py-8 gap-4">
      <div className="flex mx-auto items-center justify-between items-center max-w-[1100px] py-8">  
            <h2 className=" text-[16px] lg:text-[26px] font-semibold text-gris_2">
                <span className="text-noir dark:text-blanc">App Design.</span> Designed to amaze, built to last.
            </h2>
            {/* Flèches personnalisées */}
            <div className="flex">
                <button
                className="swiper-button-prev-custom-2 p-4"
                aria-label="back"
                >
                <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.0001 18L9 12L15.0001 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </button>

                <button
                className="swiper-button-next-custom-2 p-4"
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
        spaceBetween={24}
        slidesPerView={1.5}
        navigation={{
            nextEl: '.swiper-button-next-custom-2',
            prevEl: '.swiper-button-prev-custom-2',
          }}
        breakpoints={{
        380: {
            slidesPerView: 1.1,
          },
          640: { 
            slidesPerView: 2,
          },
          1024: { slidesPerView: 3 },
        }}
        className="relative flex min-w-full snap-x snap-mandatory"
        style={{ paddingLeft: "calc(50% - 68rem / 2)" }}
        >
        {appSlides.map((appSlides) => (
          <SwiperSlide key={appSlides.id}>
            <a 
            className="h-[490px] w-[350px] rounded-xl !overflow-y-visible flex justify-center items-center flex flex-col transition ease-in-out hover:drop-shadow-md duration-250"            
            href={appSlides.href}
            target={appSlides.href.startsWith('https') ? '_blank' : undefined}
            rel={appSlides.href.startsWith('https') ? 'noopener noreferrer' : undefined}
            >
              <img src={appSlides.img} alt={appSlides.bio} className='w-full h-full object-cover'/>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}