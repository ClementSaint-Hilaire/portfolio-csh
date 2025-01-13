"use client";
import BlurFade from "@/components/magicui/blur-fade";
import Footer from "@/components/Footer";
import WhatIDoSection from "@/components/WhatIDo";
import HeroSection from "@/components/Hero";
import { HomeMainBento } from "@/components/Home-MainBento"; 

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

      <section id="mainBento">
        <div className="space-y-12 w-full pb-[128px] mt-[32px] md:mt-[-100px] w-full max-w-[1900px] mx-auto">
            <BlurFade>
              <HomeMainBento/>
            </BlurFade>
        </div>
      </section>

      <section id="services">
          <div className="space-y-12 w-full max-w-[1100px] mx-auto">
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
