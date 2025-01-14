"use client";
import { useState } from "react";
import BlurFade from "./magicui/blur-fade";
import Image from "next/image";

const WhatIDoSection = () => {
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
    <div className=" mb-[200px] mx-auto w-full max-w-[1400px]">

      <div className="w-full">
        <div className="h-[88px] justify-center md:mb-[64px]">
            <div className="w-full text-center"><span className="text-currentColor text-[32px] leading-[35px] md:text-[82px] font-semibold md:leading-[88px]">Discover </span><span className="text-[#e1e1e1] text-[32px] font-semibold leading-[35px] md:text-[82px] md:leading-[88px] dark:text-gris_2">what I do</span></div>
        </div>

      <div className="grow shrink basis-0 flex-col justify-between w-full items-start gap-11 inline-flex items-center">
        <div className="h-12 flex-col w-full justify-start items-center gap-4 inline-flex ">
            <div className="grow shrink basis-0 flex self-stretch justify-between w-full items-center inline-flex gap-8 overflow-scroll scroll-smooth">
              {Object.keys(content).map((key) => (
                <div
                  key={key}
                  onClick={() => setActiveSection(key)}
                  className={`flex flex-col items-center cursor-pointer ${
                    activeSection === key ? "text-noir dark:text-blanc" : "text-gris_2"
                  }`}
                >
                  {/* Texte de la clé */}
                    <span className="text-center text-[17px] font-semibold leading-normal">
                      {key.charAt(0).toUpperCase() + key.slice(1)}
                    </span>
                    <div className="mt-[16px] w-[250px]">
                      <svg
                        width="250"
                        height="2"
                        viewBox="0 0 250 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 1H250"
                          stroke={activeSection === key ? "currentColor" : "#75757A"}
                          strokeWidth="1.5"
                        />
                      </svg>
                    </div>
                </div>
              ))}
            </div>
        </div>
        <BlurFade>
            <div className="text-center text-black text-[21px] font-semibold leading-7 dark:text-blanc">
                <div
                dangerouslySetInnerHTML={{
                    __html: content[activeSection].text,
                }}
                />
            </div>

           <div className="grid grid-rows-2 md:grid-flow-col gap-4 mt-8">
                {content[activeSection].images.map((image, index) => (
                <div
                    key={index}
                    className={`items-center rounded-lg ${index === 0 ? 'row-span-2' : 'col-span-1'}`}
                    >
                    <Image
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="w-full h-auto object-cover rounded-lg dark:hidden"
                    width={780}
                    height={780}
                    />
                    <Image
                    src={content[activeSection].darkImages[index]}
                    alt={`Image ${index + 1} (dark mode)`}
                    className="w-full h-auto object-cover rounded-lg hidden dark:block"
                    width={780}
                    height={780}
                    />
                </div>
                ))}
            </div>
          </BlurFade>
          
          <a href="/design" className="h-11 cursor-pointer px-[15px] py-2.5 bg-[#cae8fa]/50 rounded-full border border-[#0a84ff] justify-start items-center gap-4 inline-flex">
            <div className="w-[11px] h-[11px] bg-[#0a84ff] rounded-full" />
            <div className="text-bleu text-[17px] font-medium leading-normal">expore more</div>
          </a>

      </div>  
      </div>
    </div>
  );
};

export default WhatIDoSection;