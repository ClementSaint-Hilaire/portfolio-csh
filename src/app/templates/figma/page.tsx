"use client";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Bento } from "@/components/BentoTemplateFigma";
import Footer from "@/components/Footer";


const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] mx-[16px]">
        <section id="hero" className="flex min-h-[40dvh] flex-1 items-center justify-center text-center">
            <div className="w-full max-w-2xl space-y-8 mx-auto">
                <div className="flex flex-col items-center justify-center space-y-1.5">
                  <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-4xl lg:text-5xl font-semibold text-transparent dark:from-white dark:to-black"
                  yOffset={8}
                  text={`Figma Templates`}
                />
                <BlurFadeText
                  className="max-w-[700px] text-2xl text-gris_2"
                  delay={BLUR_FADE_DELAY}
                  text={'Facilitez vous la vie'}
                />
                </div>
            </div>
        </section>

      <section id="projects">
        <div className="space-y-12 w-full py-12 max-w-[1100px] mx-auto">
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
