"use client";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import Particles from "@/components/magicui/particles";
import { Bento } from "@/components/BentoHome";
import { ContactBouton } from "@/components/Button";
import Footer from "@/components/Footer";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh]">
        <Particles
            className="absolute inset-0"
            quantity={200}
            ease={80}
            color={"currentColor"}
            refresh
        />

      <section id="hero" className="flex min-h-[90dvh] max-w-[1100px]flex-1 items-center justify-center text-center">
        <div className="w-full space-y-8 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-1.5">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-4xl lg:text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-black"
              yOffset={8}
              text={`Clément Saint-Hilaire`}
            />
            <BlurFadeText
              className="text-2xl text-gris_2 font-[600]"
              delay={BLUR_FADE_DELAY}
              text={`Créateur digital`}
            />
            <BlurFade>
              <ContactBouton/>
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
