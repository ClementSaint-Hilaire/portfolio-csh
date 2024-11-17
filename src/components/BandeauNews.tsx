'use client';

import { useState } from 'react';

export default function BandeauNews() {
    // État pour gérer la visibilité du bandeau
    const [isVisible, setIsVisible] = useState(true);

    // Fonction pour fermer le bandeau
    const closeBanner = () => {
        setIsVisible(false);
    };

    // Si le bandeau n'est pas visible, on ne l'affiche pas
    if (!isVisible) {
        return null;
    }

    return (
        <div className="bg-neutral-100 hidden md:flex dark:bg-[#1D1D1F]">
            <div className="fixed bg-neutral-100 z-40 top-14 w-full py-2.5 items-center gap-2.5 inline-flex dark:bg-[#1D1D1F]">
                <div className="w-full px-4 flex items-center mx-auto justify-between">
                    <div></div>
                    <div className="grow shrink basis-0 h-[22px] justify-center items-center gap-2.5 flex">
                        <div className="px-[15px] py-px bg-[#1d1d1f] rounded-full justify-start items-center gap-[9px] flex dark:bg-white">
                            <div className="text-white text-[12px] font-medium leading-tight dark:text-black">New</div>
                        </div>
                        <a className="text-currentColor text-[12px] font-medium leading-tight items-center gap-[4px] flex" href="https://csh.beehiiv.com/subscribe">
                            Abonnez-vous à la Newsletter pour recevoir des résumés hebdo d’actualité tech
                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.34304 10.1837L5.44815 9.29878L8.5554 6.19154H0.75V4.89893H8.5554L5.44815 1.79665L6.34304 0.906738L10.9815 5.54523L6.34304 10.1837Z" fill="currentColor"/>
                            </svg>
                        </a>
                    </div>
                    <div className="w-6 h-6 rounded cursor-pointer" onClick={closeBanner}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.34301 6.34375L17.6567 17.6575M17.6565 6.34375L6.34277 17.6575" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}