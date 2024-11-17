"use client";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Bento } from "@/components/BentoUikit";
import { Bento2 } from "@/components/BentoUikit";
import { cn } from "@/lib/utils";
import { OpenBouton } from "@/components/Button";
import { OpenOnFigmaBouton } from "@/components/Button";
import Footer from "@/components/Footer";


const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh]">
      <section id="hero" className="flex min-h-[60dvh] flex-1 items-center justify-center text-center">
        <div className="w-full max-w-2xl space-y-8 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-1.5 mt-[150px] lg:mt-[0]">
               <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="pointer-events-none mb-[-40px] whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-4xl lg:text-5xl font-semibold text-transparent dark:from-white dark:to-black"
                  yOffset={8}
                  text={`csh`}
                />
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="pointer-events-none  whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-4xl lg:text-5xl font-semibold text-transparent dark:from-white dark:to-black"
                  yOffset={8}
                  text={`UI Landing Kit`}
                />
                <BlurFadeText
                  className="max-w-[700px] text-2xl text-gris_2"
                  delay={BLUR_FADE_DELAY}
                  text={'Créez simplement, élégamment'}
                />
                <BlurFade>
                  <OpenBouton/>
                </BlurFade>
          </div>
        </div>
      </section>

      <section id="show_off">
        <div className="space-y-12 w-full py-12 max-w-[1100px] mx-auto">
            <BlurFade>
              <Bento/>
            </BlurFade>
        </div>
      </section>

      <section id="section bento">
        <div className="space-y-12 w-full py-24 max-w-[1100px] mx-auto">
            <BlurFade>
                <BlurFadeText
                    delay={BLUR_FADE_DELAY}
                    className="pointer-events-none bg-black bg-clip-text text-left text-3xl lg:text-4xl font-semibold leading-snug text-transparent dark:bg-white"
                    yOffset={8}
                    text={`Découvrez plus de 20 sections conçu avec soin.`}
                />            
              </BlurFade>
            <BlurFade>
              <Bento2/>
            </BlurFade>
        </div>
      </section>

      <section id="Aventages">
          <div className="space-y-12 w-full py-12 max-w-[1100px] mx-auto">
                  <BlurFade>
                    <BlurFadeText
                        delay={BLUR_FADE_DELAY}
                        className="pointer-events-none bg-black bg-clip-text text-center text-3xl lg:text-4xl font-semibold leading-loose text-transparent dark:bg-white"
                        yOffset={8}
                        text={`Pourquoi choisir csh Landing UI Kit ?`}
                    />            
                  </BlurFade>
          </div>

          <div className="grid w-full flex max-w-[1100px] mx-auto auto-rows-[2àrem] gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <a
                  className={cn(
                    "group relative flex flex-col justify-between rounded-rxl", 
                    // light styles
                    "bg-gris",
                    // dark styles
                    "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
                  )}
                >
                  <div className="pointer-events-none z-10 flex flex-col items-left justify-center transform-gpu gap-4 p-8">
                    <h3 className="text-3xl font-semibold text-noir dark:text-white">
                    Simplicité.
                    </h3>
                    <p className="max-w-lg text-gris_2 text-xl text-left">Figma nous permet de rendre le processus de création aussi simple que du drag and drop tout en étant facilement personnalisable.</p>
                  </div>
                </a>
                <a
                  className={cn(
                    "group relative col-span-1 flex flex-col overflow-hidden justify-between rounded-rxl", 
                    // light styles
                    "bg-gris",
                    // dark styles
                    "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
                  )}
                >
                <div className="pointer-events-none z-10 flex flex-col items-left justify-center transform-gpu gap-4 p-8 transition-all duration-300 bg-transparent">
                    <h3 className="text-3xl font-semibold text-noir dark:text-white">
                    Flexibilité.
                    </h3>
                    <p className="max-w-lg text-gris_2 text-xl text-left">Chaque composant à plusieurs variantes : taille (mobile, tablette, ordinateur), thème (clair ou sombre) ou disposition (droite, gauche, double, triple…).</p>
                  </div>
                </a>
                <a
                  className={cn(
                    "group relative col-span-1 flex flex-col overflow-hidden justify-between rounded-rxl", 
                    // light styles
                    "bg-gris",
                    // dark styles
                    "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
                  )}
                >
                  <div className="pointer-events-none z-10 flex flex-col items-left justify-center transform-gpu gap-4 p-8 transition-all duration-300 bg-transparent">
                    <h3 className="text-3xl font-semibold text-noir dark:text-white">
                    Magnifique.
                    </h3>
                    <p className="max-w-lg text-gris_2 text-xl text-left">Chaque sections est conçu à la main. Elle inspirent simplicité, élégance, neutralité et modernité, respectant les lois de l’UI et de l’UX tout en vous permettant de les personnaliser à votre image.   </p>
                  </div>
                </a>
          </div>
      </section>


      <div className="m-16">
          <BlurFade>
              <OpenOnFigmaBouton/>
          </BlurFade>
      </div>

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
