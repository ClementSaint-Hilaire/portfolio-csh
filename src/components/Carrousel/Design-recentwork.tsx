'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function RecentWorkCarousel() {
  const slides = [
    { id: 1, title: 'csh Design System', bio: 'Work smarter, not harder', href: '/design-system', img: '/design/design-system.png'},
    { id: 2, title: 'Figma Thumbs',  bio: 'Make things clean again', href: 'https://www.figma.com/community/file/1421800356040679325/figma-thumbs-design-template', img: '/design/project-thumbnail.png' },
    { id: 3, title: 'csh UI Landing Kit',  bio: 'Made by Pro for Pros', href: '/uikit', img: '/design/landing-kit.png' },
    { id: 4, title: 'csh Icons',  bio: 'Simply beautiful', href: '/icons', img: '/design/icons.png' },
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
                className="swiper-button-prev-custom-1 p-4"
                aria-label="back"
                >
                <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.0001 18L9 12L15.0001 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </button>

                <button
                className="swiper-button-next-custom-1 p-4"
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
            nextEl: '.swiper-button-next-custom-1',
            prevEl: '.swiper-button-prev-custom-1',
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
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <a 
            className="h-[490px] w-[350px] rounded-xl !overflow-y-visible flex justify-center items-center flex flex-col"            
            href={slide.href} 
            target={slide.href.startsWith('https') ? '_blank' : undefined}
            rel={slide.href.startsWith('https') ? 'noopener noreferrer' : undefined}
            >
              <img src={slide.img} alt={slide.bio} className='w-full h-full object-cover'/>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}