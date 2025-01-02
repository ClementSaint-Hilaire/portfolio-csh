'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function WebDesignCarousel() {
  const webSlides = [
    { id: 1, title: 'Skorpia.fr', bio: 'Redécouvrez l\'hebergement.', href: 'https://skorpia.fr', img: '/design/skorpia.png'},
    { id: 2, title: 'Avalanche.tv', bio: 'A new universe to create.', href: 'https://avalanche.tv', img: '/design/avalanche.png'},
    { id: 3, title: 'Wikipedia.org', bio: 'Simplicity at the core.', href: '/design/wikipedia', img: '/design/wikipedia.png'},
    { id: 4, title: 'Croissantage.com', bio: 'Cyber-eductation for your team.', href: 'https://croissantage.com', img: '/design/croissantage.png'},

  ];

  return (
    <div className="max-w mx-auto py-8 gap-4">
      <div className="flex mx-auto items-center justify-between items-center max-w-[1100px] py-8">  
            <h2 className=" text-[16px] lg:text-[26px] font-semibold text-gris_2">
                <span className="text-noir dark:text-blanc">Web Design.</span> Seamless and intuitive online experiences.
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
        spaceBetween={24}
        slidesPerView={1.5}
        navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
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
        {webSlides.map((webSlides) => (
          <SwiperSlide key={webSlides.id}>
            <a 
            className="h-[490px] w-[350px] rounded-xl !overflow-y-visible flex justify-center items-center flex flex-col transition ease-in-out hover:drop-shadow-md duration-250"            
            href={webSlides.href}
            target={webSlides.href.startsWith('https') ? '_blank' : undefined}
            rel={webSlides.href.startsWith('https') ? 'noopener noreferrer' : undefined}
            >
              <img src={webSlides.img} alt={webSlides.bio} className='w-full h-full object-cover'/>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}