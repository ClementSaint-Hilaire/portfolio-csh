'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function GraphicDesignCarousel() {
  const graphicSlides = [
    { id: 1, title: 'Arc commpagny sum', bio: 'Annual review catalog', href: '/design/Arc.pdf', img: '/design/arc.png'},
    { id: 2, title: 'Beauregard 2026', bio: 'Musical festival poster', href: '/design', img: '/design/beauregard2026.png'},
    { id: 3, title: 'Modern Bauhaus', bio: 'Modern Bauhaus poster', href: '/design', img: '/design/bauhaus.png'},

  ];

  return (
    <div className="max-w mx-auto py-8 gap-4">
      <div className="flex mx-auto items-center justify-between items-center max-w-[1100px] py-8">  
            <h2 className="text-[#e1e1e1] dark:text-gris_2 font-normal text-Mh3 md:text-Oh3 leading-[26px] md:leading-[28px]">
                <span className="text-noir dark:text-blanc">Graphic Design.</span> Beauty that elevates your message.
            </h2>
            {/* Flèches personnalisées */}
            <div className="flex">
                <button
                className="swiper-button-prev-custom-3 p-4"
                aria-label="back"
                >
                <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.0001 18L9 12L15.0001 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </button>

                <button
                className="swiper-button-next-custom-3 p-4"
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
            nextEl: '.swiper-button-next-custom-3',
            prevEl: '.swiper-button-prev-custom-3',
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
        {graphicSlides.map((graphicSlides) => (
          <SwiperSlide key={graphicSlides.id}>
            <a 
            className="h-[490px] w-[350px] rounded-xl !overflow-y-visible flex justify-center items-center flex flex-col transition ease-in-out hover:drop-shadow-md duration-250"            
            href={graphicSlides.href}
            target={graphicSlides.href.startsWith('https') ? '_blank' : undefined}
            rel={graphicSlides.href.startsWith('https') ? 'noopener noreferrer' : undefined}
            >
              <Image
                src={graphicSlides.img}
                alt={graphicSlides.bio}
                width={490}
                height={350}
                className='object-cover'
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}