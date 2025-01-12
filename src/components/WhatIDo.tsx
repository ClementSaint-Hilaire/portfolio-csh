
"use client";
import { useState } from "react";
import BlurFade from "./magicui/blur-fade";

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
    <div className="mb-[200px] mt-[200px] mx-auto w-full max-w-[1400px]">

      <div className="w-full">
        <div className="h-[88px] justify-center mb-[64px]">
            <div className="w-full text-center"><span className="text-currentColor text-[42px] md:text-[82px] font-semibold leading-[88px]">Discover </span><span className="text-[#e1e1e1] text-[42px] font-semibold leading-[45px] md:text-[82px] md:leading-[88px] dark:text-gris_2">what I do</span></div>
        </div>

        <div className="grow shrink basis-0 flex-col justify-between w-full  items-start gap-11 inline-flex items-center">
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
            <div className="text-center text-black text-[21px] font-semibold leading-7 dark:text-blanc">
                {/* Contenu HTML dynamique */}
                <div
                dangerouslySetInnerHTML={{
                    __html: content[activeSection].text,
                }}
                />
            </div>

           {/* Affichage des images */}
           <div className="grid grid-rows-2 md:grid-flow-col gap-4 mt-8">
                {content[activeSection].images.map((image, index) => (
                <div
                    key={index}
                    className={`items-center rounded-lg ${index === 0 ? 'row-span-2' : 'col-span-1'}`}
                    >
                    <img
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="w-full h-auto object-cover rounded-lg dark:hidden"
                    />
                    {/* Images pour le mode sombre */}
                    <img
                    src={content[activeSection].darkImages[index]}
                    alt={`Image ${index + 1} (dark mode)`}
                    className="w-full h-auto object-cover rounded-lg hidden dark:block"
                    />
                </div>
                ))}
            </div>
          </BlurFade>
    </div>
        
      </div>
    </div>
  );
};

export default WhatIDoSection;