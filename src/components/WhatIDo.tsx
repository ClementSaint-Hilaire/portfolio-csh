
"use client";
import { useState } from "react";
import BlurFade from "./magicui/blur-fade";

const WhatIDoSection = () => {
  const [activeSection, setActiveSection] = useState("Create butilful designs");

  const content: { [key: string]: string } = {
    "Create butilful designs": 
        "My main expertise is creating beatifull website, app and every kind of digital creations.",
    "Build awsome website":
        "Drawing wasn’t enought for me, so I worked on how to make my design real, by learning code & CMS.",
    "Share & Help":
        "I learned a lot thx to people who shared, so as a return, I’m sharing my tools, templates & knowledge for free.",
    "Write about the future":
      "Writing is an essential part of my process. You can find most of it on my blog, newsletter & Discord.",
  };

  return (
    <div className="mb-[200px] mt-[200px] mx-auto w-full max-w-[1400px]">

      <div className="w-full">
        <div className="h-[88px] justify-center mb-[64px]">
            <div className="w-full text-center"><span className="text-currentColor text-[82px] font-semibold leading-[88px]">Discover </span><span className="text-[#e1e1e1] text-[82px] font-semibold leading-[88px] dark:text-gris_2">what I do</span></div>
        </div>

        <div className="grow shrink basis-0 flex-col justify-between w-full items-start gap-11 inline-flex items-center">
  <div className="h-12 flex-col justify-start items-center gap-4 inline-flex">
    <div className="self-stretch justify-between w-full items-center inline-flex gap-8 overflow-scroll scroll-smooth">
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
          {/* Trait SVG avec espace (gap simulé) */}
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
                stroke={activeSection === key ? "currentColor" : "#75757A"} /* Couleur dynamique */
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>
      ))}
    </div>
  </div>
  <BlurFade>
    <div
      className="text-center text-black text-[21px] font-semibold leading-7 dark:text-blanc"
      dangerouslySetInnerHTML={{ __html: content[activeSection] }}
    ></div>
  </BlurFade>
</div>
        
      </div>
    </div>
  );
};

export default WhatIDoSection;