"use client";
import BlurFade from "@/components/magicui/blur-fade";
import Particles from "@/components/magicui/particles";
import { Bento } from "@/components/BentoHome";
import Footer from "@/components/Footer";
import AboutSection from "@/components/About";
import WhatIDoSection from "@/components/WhatIDo";
import Image from "next/image";
import HeroSection from "@/components/Hero";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] mx-[16px] max-w-[1900px] overflow-hidden">

      <section id="hero">
          <div className="space-y-12 w-full w-full mx-auto mt-[70px] md:mt-[0px] md:pb-[200px] max-w-[1400px]">
            <BlurFade>
              <HeroSection/>
            </BlurFade>
          </div>
      </section>

      <section id="mainBento" className="hidden md:block">
        <div className="space-y-12 w-full pb-[128px] mt-[-100px] w-full max-w-[1900px] mx-auto">
            <BlurFade>
              <a href="/design" className="flex items-center justify-center h-full">
                <Image
                    src="/Home/MainBento.webp" 
                    alt="Discover the new Wattiz’ app. Design to enhance customer experience."
                    width={1800} 
                    height={1000} 
                />
              </a>
            </BlurFade>
        </div>
      </section>

      <section id="services">
          <div className="space-y-12 w-full pb-[128px] pt-[128px] max-w-[1100px] mx-auto">
            <BlurFade>
              <WhatIDoSection/>
            </BlurFade>
          </div>
      </section>
    
      <section id="footer">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="max-w-[1100px] mx-auto">
              <Footer/>
            </div>
          </BlurFade>
      </section>
      
    </main>
  );
}
