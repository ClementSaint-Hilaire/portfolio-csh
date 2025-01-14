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
<div className="mb-[200px] mx-auto w-full max-w-[1400px]">
    <div className="flex flex-col md:flex-row w-full h-auto gap-[32px]">
        {/* Section Sticky */}
        <div className="flex flex-col items-center w-full h-auto md:w-1/2 sticky top-0">
            <div className="text-[32px] leading-[35px] md:text-[82px] font-semibold md:leading-[88px] text-currentColor">
                Why <span className="text-[#e1e1e1] dark:text-gris_2">work with me ?</span>
            </div>
        </div>

        {/* Section Contenu défilant */}
        <div className="flex flex-col w-full md:w-1/2">
            {/* Section 01 */}
            <div className="h-auto flex-col justify-center items-start inline-flex">
                <div className="text-currentColor font-medium text-[21px] leading-[25px] md:text-[56px] md:leading-[70px]">
                    01. Creativity
                </div>
                <div className="pl-8 flex justify-center inline-flex gap-8 w-full">
                    <div className="md:h-full w-[0px] rounded-full origin-top-left border-[1px] border-gris_2"></div>
                    <div className="w-full pt-4 text-gris_2 text-[17px] font-normal uppercase leading-normal">
                        As a junior developer and designer, I specialize in creating engaging and innovative digital experiences...
                    </div>
                </div>
            </div>
            {/* Section 02 */}
            <div className="h-auto flex-col justify-center items-start inline-flex">
                <div className="text-currentColor font-medium text-[21px] leading-[25px] md:text-[56px] md:leading-[70px]">
                    02. Flexibility
                </div>
                <div className="pl-8 flex justify-center inline-flex gap-8 w-full">
                    <div className="md:h-full w-[0px] rounded-full origin-top-left border-[1px] border-gris_2"></div>
                    <div className="w-full pt-4 text-gris_2 text-[17px] font-normal uppercase leading-normal">
                        As a junior developer and designer, I specialize in creating engaging and innovative digital experiences...
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default WhyWorkWithMe;