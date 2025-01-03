"use client";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import Particles from "@/components/magicui/particles";
import { Bento } from "@/components/BentoHome";
import { ContactBouton } from "@/components/Button";
import Footer from "@/components/Footer";
import BandeauNews from "@/components/BandeauNews";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] mx-[16px]">
        <Particles
            className="absolute inset-0"
            quantity={200}
            ease={80}
            color={"currentColor"}
            refresh
        />
        {/* <BandeauNews/> */}

      <section id="hero" className="flex min-h-[90dvh] max-w-[1100px] flex-1 items-center justify-center text-center mx-auto">
        <div className="w-full space-y-8 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-1.5 gap-[24px]">
            <BlurFade>
              <div className="w-full lg:w-max text-center"><span className="text-noir text-3xl lg:text-5xl font-bold uppercase lg:leading-[88px] dark:text-blanc">*Hi I’M </span><span className="text-[#e1e1e1] text-3xl lg:text-5xl font-bold uppercase lg:leading-[88px] dark:text-gris_2">Clément saint-hilaire</span></div>
            </BlurFade>
            <BlurFade>
              <div className="grow shrink basis-0 text-center text-[#75757a] text-[17px] font-normal lg:text-[21px] font-normal leading-7">I’m a passionate creatif guy that love make cool stuff.<br/>Discover here my creations & collaborations</div>
            </BlurFade>
           
            <BlurFade>
              <div className="self-stretch justify-center items-center gap-6 inline-flex flex flex-col lg:flex-row">
                <a className="w-[200px] rounded-xl flex-col justify-center items-center gap-2.5 inline-flex" href="/design">
                  <div className="self-stretch h-14 px-5 py-3 bg-neutral-100 rounded-xl justify-between items-center inline-flex">
                    <div className="mx-auto text-noir text-[17px] font-bold leading-normal">Mes Créations</div>
                  </div>
                </a>
                <a href="mailto:clement.sainthilaire.pro@gmail.com?subject='Prénom Nom | Premier contact pour projet'&body=''" className="w-[200px] h-14 px-4 py-2 bg-noir rounded-xl justify-center items-center gap-2 flex">
                  <div className="text-[#f5f5f7] text-[17px] font-bold leading-normal">Me contacter</div>
                  <div className="w-6 h-6 relative rounded overflow-hidden">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="mail">
                        <g id="Union">
                          <path d="M2.5 7.5L11.6056 12.0528C12.1686 12.3343 12.8314 12.3343 13.3944 12.0528L22.5 7.5C22.5 5.567 20.933 4 19 4H6C4.067 4 2.5 5.567 2.5 7.5Z" fill="#F5F5F7"/>
                          <path d="M5.5 20H19.5C21.1569 20 22.5 18.6569 22.5 17V9.5L13.8416 13.8292C12.9971 14.2515 12.0029 14.2515 11.1584 13.8292L2.5 9.5V17C2.5 18.6569 3.84315 20 5.5 20Z" fill="#F5F5F7"/>
                        </g>
                      </g>
                    </svg>
                  </div>
                </a>
              </div>
            </BlurFade>

          </div>
        </div>
      </section>

      <section id="projects">
        <div className="space-y-12 w-full pb-12 mt-[-50px] max-w-[1100px] mx-auto">
            <BlurFade>
              <Bento/>
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
