'use client';
import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import Image from 'next/image'
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

  const [activeLink, setActiveLink] = useState<number | null>(null);

  const navLinks = [
    { href: '/design-system', label: 'Design System' },
    { href: '/icons', label: 'Icons' },
    { href: '/ui-kit', label: 'UI Landing Kit' },
    { href: '/work', label: 'Works' },
    { href: '/templates', label: 'Templates' },
  ];

  return (
    <div className="pointer-event-none fixed top-0 z-30 w-full mb-4 flex origin-top h-full max-h-[4rem] bg-white bg-opacity-50 backdrop-blur-md dark:bg-black dark:bg-opacity-40">
      <div className="z-50 mx-auto pointer-events-auto relative flex min-h-full h-full w-full max-w-[1100px] ">

          <div className="w-full relative flex justify-between gap-[150px] items-center">
            <a className="flex relative" href="/">
              <Tooltip>
                  <TooltipTrigger asChild>
                  <Image
                    src="/Logo.png"
                    width={70}
                    height={70}
                    alt="logo"
                />
                </TooltipTrigger>
                  <TooltipContent>
                    <p>Home</p>
                  </TooltipContent>
              </Tooltip>
            </a>
            <div className="flex relative w-full justify-between">
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
            <div className="flex relative items-center gap-[5px]">
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
  );
}