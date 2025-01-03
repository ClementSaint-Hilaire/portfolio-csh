"use client";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Bento } from "@/components/BentoIcons";
import { OpenIconBouton } from "@/components/Button";
import Footer from "@/components/Footer";


const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] mx-[16px]">

        <section id="hero" className="flex min-h-[25dvh] flex-1 items-center justify-center text-center">
            <div className="w-full max-w-2xl mx-auto">
                <div className="flex flex-col items-center justify-centers">
                <BlurFade>
                  <div className="w-full lg:w-max text-center"><span className="text-noir text-3xl lg:text-5xl font-bold uppercase lg:leading-[88px] dark:text-blanc">csh</span><span className="text-[#e1e1e1] text-3xl lg:text-5xl font-bold uppercase lg:leading-[88px] dark:text-gris_2"> Icons</span></div>
                </BlurFade>
                <BlurFade>
                  <div className="grow shrink basis-0 text-center text-[#75757a] text-[17px] font-normal lg:text-[21px] font-normal leading-7">Just what you need</div>
                </BlurFade>
                </div>
            </div>
        </section>

        <section id="content">

            <div className="w-full max-w-[1000px] mx-auto mt-[-50px] mb-[50px]">
                <BlurFade>
                    <img src="/icons/iconBanner.png"/>
                </BlurFade>
            </div>

            <div className="space-y-12 w-full py-12 max-w-[1100px] mx-auto">
                <BlurFade>
                  <Bento/>
                </BlurFade>
            </div>

            <div className="m-16">
                <BlurFade>
                    <OpenIconBouton/>
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
