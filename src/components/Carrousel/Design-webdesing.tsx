'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function WebDesignCarousel() {
  const webSlides = [
    { id: 1, title: 'Skorpia.fr', bio: 'Redécouvrez l\'hebergement.', href: '/design/skorpia', img: '/design/skorpia.png'},
    { id: 2, title: 'Avalanche.tv', bio: 'A new universe to create.', href: 'https://www.figma.com/proto/GKm1Oo6KEPjJeqRU3NcOjb/Film-compagny-%7C-Design-Template?page-id=1%3A3316&node-id=1-3491&viewport=727%2C1126%2C0.24&t=RY9NhcuX8YQpOw4h-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A3491', img: '/design/avalanche.png'},
    { id: 3, title: 'Wikipedia.org', bio: 'Simplicity at the core.', href: 'https://www.figma.com/proto/7lRkhdwfygsZoUGkFKA6vf/Wikipedia-%7C-Website-Design?page-id=1%3A4&node-id=4-37&p=f&viewport=1188%2C150%2C0.25&t=tRGsUg6npXm8goPs-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=4%3A37&hotspot-hints=0', img: '/design/wikipedia.png'},
    { id: 4, title: 'Croissantage.com', bio: 'Cyber-eductation for your team.', href: 'https://croissantage.com', img: '/design/croissantage.png'},

  ];

  return (
    <div className="max-w mx-auto py-8 gap-4">
      <div className="flex mx-auto items-center justify-between items-center max-w-[1100px] py-8">  
            <h2 className="text-[#e1e1e1] dark:text-gris_2 font-normal text-Mh3 md:text-Oh3 leading-[26px] md:leading-[28px]">
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
              <Image
                src={webSlides.img}
                alt={webSlides.bio}
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