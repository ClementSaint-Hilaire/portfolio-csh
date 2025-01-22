"use client";

import { useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";

const menuItems = [
  { name: "Mail", 
    icon: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.33334 2.16602C1.95263 2.16602 0.833344 3.2853 0.833344 4.66602V11.3327C0.833344 12.7134 1.95263 13.8327 3.33334 13.8327H12.6667C14.0474 13.8327 15.1667 12.7134 15.1667 11.3327V4.66602C15.1667 3.2853 14.0474 2.16602 12.6667 2.16602H3.33334ZM12.6227 3.16602C13.4754 3.16602 14.1667 3.85729 14.1667 4.71002C14.1667 4.71389 14.1646 4.71747 14.1613 4.71946L8.45702 8.14205C8.18387 8.30594 7.84119 8.29978 7.57411 8.12617L1.85529 4.40894C1.85791 4.39378 1.86075 4.37871 1.86382 4.36371C2.00369 3.68019 2.60847 3.16602 3.33334 3.16602H12.6227ZM1.83334 5.58736L7.02913 8.96462C7.6167 9.34654 8.37059 9.3601 8.97151 8.99954L14.1667 5.88244V11.3327C14.1667 12.1611 13.4951 12.8327 12.6667 12.8327H3.33334C2.50492 12.8327 1.83334 12.1611 1.83334 11.3327V5.58736Z" fill="#F5F5F7"/>
    </svg>    
    ),
    link: "clement.sainthilaire.pro@gmail.com",
  },
  { name: "Threads", 
    icon: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.3502 7.48873C11.2899 7.45983 11.2286 7.43201 11.1665 7.40537C11.0585 5.41424 9.9705 4.27432 8.14363 4.26266C8.13536 4.2626 8.12713 4.26261 8.11885 4.26261C7.02615 4.26261 6.11737 4.72902 5.55802 5.57776L6.56273 6.26698C6.98059 5.633 7.63637 5.49785 8.11933 5.49785C8.12491 5.49785 8.13051 5.49785 8.13603 5.4979C8.73755 5.50174 9.19145 5.67663 9.48524 6.01769C9.69903 6.26599 9.84202 6.60911 9.91282 7.04215C9.37951 6.95151 8.80273 6.92364 8.18615 6.95899C6.44925 7.05904 5.33264 8.07203 5.40763 9.47962C5.44569 10.1936 5.80139 10.8079 6.40917 11.2091C6.92305 11.5483 7.58488 11.7142 8.27273 11.6767C9.1811 11.6269 9.89371 11.2803 10.3909 10.6466C10.7684 10.1653 11.0072 9.54168 11.1127 8.75585C11.5456 9.01711 11.8664 9.36092 12.0436 9.77421C12.3449 10.4768 12.3625 11.6312 11.4204 12.5725C10.5951 13.397 9.603 13.7537 8.10365 13.7647C6.44047 13.7524 5.18263 13.219 4.36481 12.1794C3.599 11.2059 3.20322 9.79973 3.18846 8C3.20322 6.20026 3.599 4.79412 4.36481 3.82061C5.18263 2.78098 6.44045 2.2476 8.10362 2.23524C9.77887 2.2477 11.0586 2.78364 11.9077 3.82829C12.3241 4.34057 12.638 4.98481 12.8449 5.73596L14.0223 5.42183C13.7715 4.49724 13.3768 3.70052 12.8397 3.03977C11.7511 1.70049 10.1591 1.01423 8.10773 1H8.09952C6.05236 1.01418 4.47813 1.70305 3.42056 3.04745C2.47947 4.2438 1.99402 5.90844 1.97771 7.99508L1.97766 8L1.97771 8.00492C1.99402 10.0915 2.47947 11.7562 3.42056 12.9526C4.47813 14.2969 6.05236 14.9859 8.09952 15H8.10773C9.92777 14.9874 11.2107 14.5109 12.2675 13.455C13.6502 12.0736 13.6086 10.342 13.1529 9.27903C12.8259 8.51676 12.2025 7.89764 11.3502 7.48873ZM8.2077 10.4432C7.44645 10.4861 6.65559 10.1444 6.61659 9.41254C6.58769 8.8699 7.00277 8.2644 8.25442 8.19227C8.39776 8.184 8.53841 8.17996 8.67659 8.17996C9.13123 8.17996 9.55655 8.22412 9.94323 8.30866C9.799 10.1098 8.95302 10.4023 8.2077 10.4432Z" fill="#F5F5F7"/>
    </svg>
    ),
    link: "https://www.threads.net/@clement.sainthilaire",
 },
  { name: "Figma", 
    icon: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.5 5.65C4.31259 5.65 3.35 4.68741 3.35 3.5C3.35 2.31259 4.31259 1.35 5.5 1.35H7.65V5.65H5.5Z" stroke="#F5F5F7" stroke-width="0.7"/>
        <path d="M10.5 5.65H8.35V1.35H10.5C11.6874 1.35 12.65 2.31259 12.65 3.5C12.65 4.68741 11.6874 5.65 10.5 5.65Z" stroke="#F5F5F7" stroke-width="0.7"/>
        <path d="M5.5 10.65C4.31259 10.65 3.35 9.68741 3.35 8.5C3.35 7.31259 4.31259 6.35 5.5 6.35H7.65V10.65H5.5Z" stroke="#F5F5F7" stroke-width="0.7"/>
        <path d="M8.35 8.5C8.35 7.31259 9.31259 6.35 10.5 6.35C11.6874 6.35 12.65 7.31259 12.65 8.5C12.65 9.68741 11.6874 10.65 10.5 10.65C9.31259 10.65 8.35 9.68741 8.35 8.5Z" stroke="#F5F5F7" stroke-width="0.7"/>
        <path d="M3.35 13.5C3.35 12.3126 4.31259 11.35 5.5 11.35H7.65V13.5C7.65 14.6874 6.68741 15.65 5.5 15.65C4.31259 15.65 3.35 14.6874 3.35 13.5Z" stroke="#F5F5F7" stroke-width="0.7"/>
    </svg>
    ),
    link: "https://figma.com/@cshd", 
  },
  { name: "Discord",
    icon: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.1741 12.6003C11.5424 12.4457 11.8978 12.2646 12.2372 12.0599L12.5549 11.8683L12.2579 11.6458C12.1554 11.5689 12.0538 11.4884 11.9544 11.4055L11.8317 11.3031L11.6872 11.3715C9.31667 12.4945 6.71313 12.4951 4.31172 11.371L4.16681 11.3032L4.04453 11.4064C3.94697 11.4887 3.84609 11.5686 3.74307 11.645L3.44296 11.8674L3.76296 12.06C4.1012 12.2637 4.45559 12.4445 4.82358 12.5992C4.65349 12.9167 4.46552 13.2224 4.26125 13.5155C3.13235 13.1462 1.9852 12.5976 0.802697 11.7287C0.567636 8.9886 1.08968 6.21358 2.95748 3.36188C3.8374 2.95506 4.77393 2.6521 5.75079 2.46783C5.85928 2.67453 5.97322 2.91294 6.05489 3.10927L6.13008 3.29004L6.32361 3.26037C7.43086 3.0906 8.54878 3.09049 9.6782 3.26047L9.87126 3.28953L9.94624 3.10927C10.0282 2.91219 10.1399 2.67403 10.2465 2.46802C11.2222 2.65225 12.1576 2.95417 13.0373 3.35989C14.6607 5.81004 15.4719 8.56113 15.1974 11.7287C14.0147 12.5988 12.8663 13.1475 11.7361 13.5168C11.5316 13.2239 11.3442 12.9178 11.1741 12.6003ZM3.90973 8.57648C3.90973 9.52599 4.59973 10.3617 5.50824 10.3617C6.43022 10.3617 7.10711 9.52583 7.10674 8.5782C7.12037 7.62332 6.42749 6.79006 5.50824 6.79006C4.58507 6.79006 3.90973 7.62883 3.90973 8.57648ZM8.89318 8.57648C8.89318 9.526 9.58322 10.3617 10.4917 10.3617C11.414 10.3617 12.0893 9.52547 12.0902 8.57839C12.104 7.62343 11.411 6.79006 10.4917 6.79006C9.56856 6.79006 8.89318 7.62882 8.89318 8.57648Z" stroke="#F5F5F7" stroke-width="0.5"/>
    </svg>

    ),
    link: "https://discord.gg/EPBXReEWak",
   },
  { name: "ACL Studio", 
    icon:(
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_249_24)">
        <path d="M1.34272 15.2896C0.756612 14.8777 0.463558 14.2342 0.463558 13.3591C0.463558 13.0708 0.495528 12.7671 0.559467 12.4479L0.991055 10.0695C1.01237 9.97683 1.02302 9.85843 1.02302 9.71429C1.02302 9.55985 0.943101 9.41055 0.783253 9.26641C0.634062 9.11197 0.42626 9.03475 0.159848 9.03475H0L0.383634 6.93436H0.543482C0.820551 6.93436 1.07631 6.84685 1.31075 6.67181C1.54519 6.49678 1.69439 6.23938 1.75832 5.89961L2.18991 3.55212C2.44567 2.19305 3.05309 1.24582 4.01218 0.710425C4.88601 0.236808 5.87706 0 6.98534 0L6.55375 2.36293C5.47745 2.36293 4.83273 2.93951 4.6196 4.09266L4.17202 6.51737C4.03349 7.31017 3.69248 7.79408 3.149 7.96911C3.21294 7.9897 3.28753 8.05148 3.37279 8.15444C3.5646 8.38095 3.66051 8.68983 3.66051 9.08108C3.66051 9.20463 3.64985 9.32818 3.62854 9.45174L3.18097 11.9073C3.149 12.0927 3.13301 12.2677 3.13301 12.4324C3.13301 13.2355 3.58592 13.6371 4.49172 13.6371L4.06013 16C2.9412 16 2.03539 15.7632 1.34272 15.2896Z" fill="#F5F5F7"/>
        <path d="M12.3075 6.99614C12.3075 6.85199 12.3235 6.69241 12.3555 6.51737L12.803 4.09266C12.835 3.90734 12.851 3.7323 12.851 3.56757C12.851 2.76448 12.3981 2.36293 11.4923 2.36293L11.9239 0C13.0428 0 13.9486 0.236808 14.6413 0.710425C15.2274 1.12226 15.5205 1.77606 15.5205 2.67181C15.5205 2.93951 15.4885 3.23295 15.4245 3.55212L14.993 5.89961C14.9716 5.99228 14.961 6.11583 14.961 6.27027C14.961 6.41441 15.0356 6.56371 15.1848 6.71815C15.3446 6.86229 15.5631 6.93436 15.8402 6.93436H16L15.6164 9.03475H15.4565C15.1794 9.03475 14.9237 9.12226 14.6892 9.2973C14.4548 9.47233 14.3056 9.72973 14.2417 10.0695L13.8101 12.4479C13.6822 13.1171 13.4584 13.6937 13.1387 14.1776C12.819 14.6615 12.4354 15.0322 11.9878 15.2896C11.1246 15.7632 10.1283 16 8.99867 16L9.43026 13.6371C10.5172 13.6371 11.1673 13.0605 11.3804 11.9073L11.828 9.45174C11.8813 9.16345 11.9825 8.9009 12.1317 8.66409C12.2915 8.41699 12.4354 8.24196 12.5633 8.139C12.6912 8.03604 12.7817 7.97941 12.835 7.96911C12.4834 7.81467 12.3075 7.49035 12.3075 6.99614Z" fill="#F5F5F7"/>
        </g>
        <defs>
        <clipPath id="clip0_249_24">
        <rect width="16" height="16" fill="white"/>
        </clipPath>
        </defs>
    </svg>
    ),
    link: "clement.sainthilaire.pro@gmail.com",
    customStyle: "text-orange hover:!bg-[#FF4D06]/[0.4]" },];

export default function DropDownButton() {
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({  
      clipPath: isOpen
        ? "inset(0% 0% 0% 0% round 12px)"
        : "inset(10% 50% 90% 50% round 12px)",
      opacity: isOpen ? 1 : 0,
      transition: { duration: 0.2, ease: "easeInOut"},
    });
  }, [isOpen, controls]);

  return (
    <div className="relative mx-auto w-auto justify-center flex">
      {/* Bouton principal */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-auto h-[36px] py-4 bg-noir rounded-full justify-center items-center gap-2 flex pl-[20px] pr-[8px]">
        <div className="text-[#f5f5f7] text-Mh4 font-semibold leading-normal flex">Contact</div>        
        <motion.div
        animate={{ rotate: isOpen ? 90 : 0 }}
        >
            <div className="w-6 h-6 relative rounded overflow-hidden">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.99995 6L15.0001 12L8.99995 18" stroke="#F5F5F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>       
        </motion.div>
      </button>

      {/* Menu déroulant */}
      <motion.ul
        initial={{ clipPath: "inset(10% 50% 90% 50% round 12px)", opacity: 0 }}
        animate={controls}
        className={`absolute z-10 mt-2 w-max origin-top rounded-lg bg-noir shadow-lg top-[35px]`}
      >
        {menuItems.map(({ name, icon, link, customStyle }) => (
          <li key={name} className="p-1">
            <a
              className={`flex w-full items-center gap-2 rounded-md px-4 py-2 text-[16px] text-blanc hover:bg-gris_4 ${customStyle || ""}`}
              href={link}
            >
              <span>{icon}</span>
              {name}
            </a>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}