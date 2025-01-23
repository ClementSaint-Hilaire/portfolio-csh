"use client";
import BlurFade from "@/components/magicui/blur-fade";
import Footer from "@/components/Footer";
import RecentWorkCarousel from "@/components/Carrousel/Design-recentwork";  
import WebDesignCarousel from "@/components/Carrousel/Design-webdesing";
import AppDesignCarousel from "@/components/Carrousel/Design-appdesing";
import GraphicDesignCarousel from "@/components/Carrousel/Design-graphicdesing";
import ResearchCarousel from "@/components/Carrousel/Design-research";

const BLUR_FADE_DELAY = 0.04;


export default function Page() {
  return (
    <div className="flex flex-col min-h-[100dvh] ml-[16px]">
        <section id="hero" className="flex mt-24 w-full max-w-[1400px] flex-1 mx-auto">
          <div className="w-1/3"></div>
          <div className="w-2/3 space-y-8 mx-auto">
            <div className="flex flex-col space-y-1.5">
              <BlurFade>
                <div className="w-full md:w-max"><span className="text-currentColor font-normal text-Mh1 md:text-Oh1 leading-[38px] md:leading-[58px]">Designs you can</span><span className="text-[#e1e1e1] dark:text-gris_2 font-normal text-Mh1 md:text-Oh1 leading-[38px] md:leading-[58px]"> relate</span></div>
              </BlurFade>
              <BlurFade>
                <div className="text-gris_2 font-normal text-Oh3 md:text-Mh3 leading-[34px]">Discover here a selection of my recent projects, web, mobile, writings, graphic creations & collaborations.</div>
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
                <ResearchCarousel/>
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
    </div>
  );
}
