'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function RecentWorkCarousel() {
  const slides = [
    { id: 1, title: 'Projet 1' },
    { id: 2, title: 'Projet 2' },
    { id: 3, title: 'Projet 3' },
    { id: 4, title: 'Projet 4' },
    { id: 5, title: 'Projet 5' },
  ];

  return (
    <div className="max-w mx-auto py-8">
      <div className="flex mx-auto items-center justify-between items-center max-w-[1100px]">  
            <h2 className="text-[26px] font-semibold text-gris_2">
                <span className="text-bleu">Recent work.</span> made by csh
            </h2>
            {/* Flèches personnalisées */}
            <div className="flex gap-4">
                <button
                className="swiper-button-prev-custom p-4"
                aria-label="back"
                >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.0001 18L9 12L15.0001 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </button>

                <button
                className="swiper-button-next-custom p-4"
                aria-label="next"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        className="relative flex min-w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden"
        style={{ paddingLeft: "calc(50% - 68rem / 2)" }}
        >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="h-56 bg-gray-200 rounded-xl flex items-center justify-center shadow-md">
              <p className="text-gray-500 text-lg">{slide.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}