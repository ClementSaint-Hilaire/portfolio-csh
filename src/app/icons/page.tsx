"use client";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Bento } from "@/components/BentoIcons";
import { OpenIconBouton } from "@/components/Button";


const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh]">

        <section id="hero" className="flex min-h-[25dvh] flex-1 items-center justify-center text-center">
            <div className="w-full max-w-2xl mx-auto">
                <div className="flex flex-col items-center justify-centers">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-4xl lg:text-5xl font-semibold leading-none text-transparent dark:from-white dark:to-black"
                  yOffset={8}
                  text={`csh Icons`}
                />
                  <BlurFadeText
                  className="max-w-[700px] text-2xl text-gris_2"
                  delay={BLUR_FADE_DELAY}
                    text={`Juste ce dont vous avez besoin`}
                  />
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

    </main>
  );
}
