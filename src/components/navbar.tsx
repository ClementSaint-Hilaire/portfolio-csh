'use client';
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { useState } from 'react';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the side menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [activeLink, setActiveLink] = useState<number | null>(null);

  const navLinks = [
    { id: '1', href: '/design-system', label: 'Design System' },
    { id: '2', href: '/icons', label: 'Icons' },
    { id: '3', href: '/uikit', label: 'UI Landing Kit' },
    { id: '4', href: '/work', label: 'Works' },
    { id: '5', href: '/templates', label: 'Templates' },
  ];

  return (
    <div>
        {/* Side Menu for mobile */}
        <div
          className={`${
            isOpen ? "translate-x-0" : "translate-x-full"
          } fixed z-40 top-0 right-0 w-full h-full bg-white text-currentColor transform transition-transform duration-300 ease-in-out md:hidden`}
        >
        <div className="p-[30px] flex flex-col items-end">
            <button onClick={toggleMenu}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.34301 6.34375L17.6567 17.6575M17.6565 6.34375L6.34277 17.6575" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            
            <div className="mt-[50px] flex flex-col relative right-0 space-y-6 pl-8">
              {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    onMouseEnter={() => setActiveLink(index)}
                    onMouseLeave={() => setActiveLink(null)}
                    className={`text-[32px] text-right font-semibold transition-colors duration-100 ${
                      activeLink === index ? 'text-grey' : 'currentColor'
                    } ${activeLink !== index && activeLink !== null && 'text-gray-400'}`}
                  >
                    {link.label}
                  </a>
                ))}
            </div>
          </div>
        </div>

    <div className="pointer-event-none fixed top-0 z-30 w-full mb-4 flex left-0	origin-top h-full max-h-[6rem] md:max-h-[4rem] bg-white bg-opacity-50 backdrop-blur-md dark:bg-black dark:bg-opacity-40">
      <div className="z-50 mx-auto pointer-events-auto relative flex min-h-full h-full w-full max-w-[1100px] ">

          <div className="w-full relative flex justify-between gap-[150px] items-center p-[20px] md:p-0">
            <a className="flex relative" href="/">
              <Tooltip>
                  <TooltipTrigger asChild>
                  <img src="/logo.png" alt="logo" className="w-[40px] md:w-[70px]"/>
                </TooltipTrigger>
                  <TooltipContent>
                    <p>Home</p>
                  </TooltipContent>
              </Tooltip>
            </a>
            <div className="flex relative w-full justify-between hidden md:flex">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onMouseEnter={() => setActiveLink(index)}
                  onMouseLeave={() => setActiveLink(null)}
                  className={`text-[14px] font-medium transition-colors duration-100 ${
                    activeLink === index ? 'text-grey' : 'currentColor'
                  } ${activeLink !== index && activeLink !== null && 'text-gray-400'}`}
                >
                  {link.label}
                </a>
              ))}
            </div>

             <button
                className="md:hidden focus:outline-none"
                onClick={toggleMenu}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 9L20 9M12 15L20 15" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            
            <div className="flex relative items-center gap-[5px] hidden md:flex">
              {Object.entries(DATA.contact.social)
                .filter(([_, social]) => social.navbar)
                .map(([name, social]) => {
                  const isExternalLink = social.url.startsWith('http');
                  return (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link
                            href={social.url}
                            className={cn(
                              buttonVariants({ variant: "ghost", size: "icon" }),
                              "size-12"
                            )}
                            target={isExternalLink ? "_blank" : "_self"}
                            rel={isExternalLink ? "noopener noreferrer" : undefined}
                          >
                            <social.icon className="size-4" />
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{name}</p>
                        </TooltipContent>
                      </Tooltip>
                  );
                })}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <ModeToggle/>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Theme</p>
                  </TooltipContent>
                </Tooltip>
            </div>
          </div>
      </div>
    </div>
    </div>
  );
}