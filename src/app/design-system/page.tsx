"use client";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Bento } from "@/components/BentoDesignSystem";
import { cn } from "@/lib/utils";
import { OpenDSBouton } from "@/components/Button";
import Marquee from "@/components/magicui/marquee";
import Footer from "@/components/Footer";


const BLUR_FADE_DELAY = 0.04;

const ds = [
  {
    name: "Bouton",
    img: "/design-system/boutton.png",
  },
  {
    name: "Switch",
    img: "/design-system/switch.png",
  },
  {
    name: "Checkbox",
    img: "/design-system/checkbox.png",
  },
  {
    name: "Progress bar",
    img: "/design-system/progressBar.png",
  },
  {
    name: "Colors",
    img: "/design-system/colors.png",
  },
  {
    name: "Radio",
    img: "/design-system/radio.png",
  },
  {
    name: "Carrousel",
    img: "/design-system/carrousel.png",
  },
  {
    name: "Profile picture",
    img: "/design-system/pp.png",
  },
];

const firstRow = ds.slice(0, ds.length / 0);
const secondRow = ds.slice(0, ds.length / 0);


const ReviewCard = ({
  name,
  img,
}: {
  img: string;
  name: string;
}) => {
  return (
    <figure
      className={cn(
        "relative overflow-hidden rounded-rxl px-12 py-12  min-w-[300px]",
        // light styles
        "bg-gris",
        // dark styles
        "dark: dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-col items-center gap-6">
          <figcaption className="text-xl font-medium text-noir dark:text-blanc">
            {name}
          </figcaption>
        <img className="h-[60px]"src={img} />
      </div>

    </figure>  
  );
};

//Page start here

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] mx-[16px]">
      <section id="hero" className="flex min-h-[25dvh] flex-1 items-center justify-center text-center">
        <div className="w-full max-w-2xl mx-auto">
          <div className="flex flex-col mt-[150px] lg:mt-0 items-center justify-centers">
            <BlurFade>
              <div className="w-full lg:w-max text-center"><span className="text-noir text-3xl lg:text-5xl font-bold uppercase lg:leading-[88px] dark:text-blanc">csh</span><span className="text-[#e1e1e1] text-3xl lg:text-5xl font-bold uppercase lg:leading-[88px] dark:text-gris_2"> Design System</span></div>
            </BlurFade>
            <BlurFade>
              <div className="grow shrink basis-0 text-center text-[#75757a] text-[17px] font-normal lg:text-[21px] font-normal leading-7">Made by Pro, for Pros</div>
            </BlurFade>
          </div>
        </div>
      </section>

      <div className="w-full max-w-[1000px] mx-auto my-8">
      <BlurFade>
          <img src="/design-system/designSystem.png"/>
      </BlurFade>
      </div>


          <div className="space-y-12 w-full py-12 max-w-[1100px] mx-auto">
              <BlurFade>
                    <BlurFadeText
                          delay={BLUR_FADE_DELAY}
                          className="pointer-events-none text-noir text-center mx-auto text-3xl font-semibold dark:text-blanc"
                          yOffset={8}
                          text={`Conçu pour être simple`}
                    />  
                    <BlurFadeText
                          delay={BLUR_FADE_DELAY}
                          className="pointer-events-none text-gris_2 bg-clip-text mx-auto text-center text-xl font-normal"
                          yOffset={8}
                          text={`Simple d’utilisation, simple esthétiquement`}
                    />   
              </BlurFade>    
          </div>

          <BlurFade>
                <div className="relative flex h-[500px] w-full flex-col items-center justify-center w-full overflow-hidden bg-background ">
                    <Marquee pauseOnHover className="[--duration:40s]">
                      {firstRow.map((ds) => (
                        <ReviewCard key={ds.name} {...ds} />
                      ))}
                    </Marquee>
                    <Marquee reverse pauseOnHover className="[--duration:40s]">
                      {secondRow.map((ds) => (
                        <ReviewCard key={ds.name} {...ds} />
                      ))}
                    </Marquee>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
                  </div>
          </BlurFade>

          <div className="space-y-12 w-full py-12 max-w-[1100px] mx-auto">
                  <BlurFade>
                    <BlurFadeText
                        delay={BLUR_FADE_DELAY}
                        className="pointer-events-none bg-black bg-clip-text text-center text-3xl lg:text-4xl font-semibold leading-noraml text-transparent dark:bg-white"
                        yOffset={8}
                        text={`Pourquoi est-ce que c’est génial`}
                    />  
                    <BlurFadeText
                        delay={BLUR_FADE_DELAY}
                        className="pointer-events-none text-center text-gris_2 text-xl lg:text-2xl font-medium"
                        yOffset={8}
                        text={`Chaque composants à été conçu avec une attention pour le détail.`}
                    />  
                          
                  </BlurFade>
                  
          </div>

          <div className="space-y-12 w-full py-12 max-w-[1100px] mx-auto">
                <BlurFade>
                  <Bento/>
                </BlurFade>
          </div>

      <BlurFade>
          <OpenDSBouton/>
      </BlurFade>

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

