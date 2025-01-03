"use client";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import Footer from "@/components/Footer";
import RecentWorkCarousel from "@/components/Carrousel/Design-recentwork";  
import WebDesignCarousel from "@/components/Carrousel/Design-webdesing";
import AppDesignCarousel from "@/components/Carrousel/Design-appdesing";
import GraphicDesignCarousel from "@/components/Carrousel/Design-graphicdesing";
import ResearchCarousel from "@/components/Carrousel/Design-research";
import Image from 'next/image';

const BLUR_FADE_DELAY = 0.04;


export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] ml-[16px]">

<section id="hero" className="flex mt-24 max-w-[1100px] flex-1 items-center justify-center text-center mx-auto">
        <div className="w-full space-y-8 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-1.5">
            <BlurFade>
              <div className="w-full lg:w-max text-center"><span className="text-noir text-3xl lg:text-5xl font-bold uppercase lg:leading-[88px] dark:text-blanc">Design you can</span><span className="text-[#e1e1e1] text-3xl lg:text-5xl font-bold uppercase lg:leading-[88px] dark:text-gris_2"> relate</span></div>
            </BlurFade>
            <BlurFade>
              <div className="grow shrink basis-0 text-center text-[#75757a] text-[17px] font-normal lg:text-[21px] font-normal leading-7">Discover here a selection of my projetcs, creations & collaborations</div>
            </BlurFade>
          </div>
        </div>
      </section>

        <section>
          <div className="space-y-12 w-full py-12 mx-auto flex flex-col">
            <BlurFade>
              <RecentWorkCarousel />
            </BlurFade>
            <BlurFade>
              <WebDesignCarousel />
            </BlurFade>
            <BlurFade>
              <AppDesignCarousel />
            </BlurFade>
            <BlurFade>
              <GraphicDesignCarousel />
            </BlurFade>
            <BlurFade>
              <ResearchCarousel />
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
