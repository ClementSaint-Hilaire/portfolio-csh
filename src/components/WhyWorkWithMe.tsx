"use client";
import { useState } from "react";
import BlurFade from "./magicui/blur-fade";
import Image from "next/image";

const WhyWorkWithMe = () => {
  const [activeSection, setActiveSection] = useState("Create butilful designs");

  const content: { [key: string]: { text: string; images: string[]; darkImages: string[]} } = {
    "Create butilful designs": {
        text: "My main expertise is creating beatifull website, app and every kind of digital creations.",
        images: ["/whatido/design1.webp", "/whatido/design2.webp", "/whatido/design3.webp"],
        darkImages: ["/whatido/design1-dark.webp", "/whatido/design2-dark.webp", "/whatido/design3-dark.webp"],
    },
    "Build awsome website": {
        text: "Drawing wasn’t enought for me, so I worked on how to make my design real, by learning code & CMS.",
        images: ["/whatido/build1.webp", "/whatido/build2.webp", "/whatido/build3.webp"],
        darkImages: ["/whatido/build1-dark.webp", "/whatido/build2-dark.webp", "/whatido/build3-dark.webp"],
    },
    "Share & Help": {
        text: "I learned a lot thx to people who shared, so as a return, I’m sharing my tools, templates & knowledge for free.",
        images: ["/whatido/share1.webp", "/whatido/share2.webp", "/whatido/share3.webp"],
        darkImages: ["/whatido/share1-dark.webp", "/whatido/share2-dark.webp", "/whatido/share3-dark.webp"],
    },
    "Write about the future": { 
      text: "Writing is an essential part of my process. You can find most of it on my blog, newsletter & Discord.",
      images: ["/whatido/write1.webp", "/whatido/write2.webp", "/whatido/share3.webp"],
      darkImages: ["/whatido/write1-dark.webp", "/whatido/write2-dark.webp", "/whatido/share3-dark.webp"],
    },
  };

  return (





    
  <div className="mb-[200px] relative mx-auto w-full max-w-[1400px] overflow-visible h-auto">
    <div className="flex flex-col py-[5rem] md:flex-row w-full gap-[32px] overflow-visible">
      {/* Section Sticky */}
      <div className="flex flex-col items-center w-full md:w-1/2 overflow-visible	">
        <div className="text-[32px] leading-[35px] md:text-[82px] font-semibold md:leading-[88px] text-currentColor h-full relative !sticky top-5">
          Why <span className="text-[#e1e1e1] dark:text-gris_2">work with me ?</span>
        </div>
      </div> 
  
      {/* Section Contenu défilant */}
      <div className="flex flex-col w-full md:w-1/2">
        {/* Section 01 */}
        <div className="flex flex-col justify-start">
          <div className="text-currentColor font-medium text-[21px] leading-[25px] md:text-[56px] md:leading-[70px]">
            01. Creativity
          </div>
          <div className="pl-8 flex justify-start gap-8">
            <div className="md:h-full w-[2px] bg-gris_2"></div>
            <div className="text-gris_2 text-[17px] font-normal uppercase leading-normal pb-24">
              My innovative mindset and deep understanding of modern design principles allow me to create visually captivating and user-friendly solutions. By drawing inspiration from clean, timeless aesthetics, such as Swiss-inspired design, you ensure that every project is both unique and impactful, setting it apart from the competition.
            </div>
          </div>
        </div>
  
        {/* Section 02 */}
        <div className="flex flex-col justify-start">
          <div className="text-currentColor font-medium text-[21px] leading-[25px] md:text-[56px] md:leading-[70px]">
            02. Flexibility
          </div>
          <div className="pl-8 flex justify-start gap-8">
            <div className="md:h-full w-[2px] bg-gris_2"></div>
            <div className="text-gris_2 text-[17px] font-normal uppercase leading-normal pb-24">
              My ability to seamlessly adapt to different roles and responsibilities—whether it involves design, development, or communication, makes me a highly versatile professional. You excel in adjusting to new challenges, client expectations, and project dynamics, which ensures that I consistently meet goals, even in fast-paced or evolving environments.
            </div>
          </div>
        </div>
         {/* Section 03 */}
         <div className="flex flex-col justify-start">
          <div className="text-currentColor font-medium text-[21px] leading-[25px] md:text-[56px] md:leading-[70px]">
            02. Professionalism
          </div>
          <div className="pl-8 flex justify-start gap-8">
            <div className="md:h-full w-[2px] bg-gris_2"></div>
            <div className="text-gris_2 text-[17px] font-normal uppercase leading-normal">
              With a strong commitment to delivering high-quality work, I approach every project with diligence, organization, and effective communication. My ability to manage deadlines while maintaining attention to detail fosters trust and reliability, making me an excellent collaborator in any professional setting.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default WhyWorkWithMe;