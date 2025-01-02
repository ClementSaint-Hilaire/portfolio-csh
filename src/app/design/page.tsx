"use client";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import Footer from "@/components/Footer";
import RecentWorkCarousel from "@/components/Carrousel/Design-recentwork";  
import WebDesignCarousel from "@/components/Carrousel/Design-webdesing";
import AppDesignCarousel from "@/components/Carrousel/Design-appdesing";
import GraphicDesignCarousel from "@/components/Carrousel/Design-graphicdesing";
import ResearchCarousel from "@/components/Carrousel/Design-research";
const BLUR_FADE_DELAY = 0.04;


export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] ml-[16px]">

        <section id="hero" className="flex min-h-[20dvh] flex-1 items-center justify-center text-center">
            <div className="w-full max-w-2xl space-y-8 mx-auto">
                <div className="flex flex-col items-center justify-center space-y-1.5">
                    <BlurFadeText
                      delay={BLUR_FADE_DELAY}
                      className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-4xl lg:text-5xl font-semibold text-transparent dark:from-white dark:to-black"
                      yOffset={8}
                      text={`Works & Collabs`}
                    />
                    <BlurFadeText 
                      className="max-w-[700px] text-2xl text-gris_2"
                      delay={BLUR_FADE_DELAY}
                      text={'Découvrez l\'essentiel de mes travaux'}
                    />
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
