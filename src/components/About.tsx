"use client";
import { useState } from "react";
import BlurFade from "./magicui/blur-fade";

const AboutSection = () => {
  const [activeSection, setActiveSection] = useState("Anyone");

  const content: { [key: string]: string } = {
    Anyone: 
    "Hello there, I’m Clément Saint-Hilaire. <br/> <br/> As a junior developer and designer, I specialize in creating engaging and innovative digital experiences. Whether I’m designing a website, developing an app, crafting a communication campaign, or offering tailored advice, my goal is to merge aesthetics and functionality seamlessly. My work focuses on understanding both the technical and creative challenges to deliver solutions that are not only visually appealing but also efficient and user-centric. <br/> <br/> With a background in web development and digital design, I approach each project with a fresh perspective, continuously seeking new ways to push boundaries and bring ideas to life. My passion lies in collaborating with clients to create impactful and intuitive solutions that meet their unique needs. </br> </br> Feel free to contact me anytime !",
    designer:
      "Hi friend, <br/> <br/> Passionate as you about design and visual creation, I strive to craft aesthetic and functional experiences that captivate users while meeting the specific needs of each project. Inspired by minimalism and modern influences like Swiss design, I focus on clean, intuitive solutions tailored to every context. <br/> <br/> Always seeking innovation, I leverage expertise in tools like Figma and the Adobe Suite to bring ideas to life, staying attuned to trends and the details that make a difference. </br> </br> Feel free to contact me anytime !",
    developer:
      "Hi ! <br/> <br/> With a background in development, I, unlike understand both the design and technical sides of a project. I have hands-on experience with technologies like NextJS, React, Astro, Tailwind, Symfony, and Laravel, and even coded this portfolio myself. <br/> <br/> My trial skill set in development, networking & design helps me communicate effectively in team projects, as I know the needs of developers and aim to make their job easier. For instance, I rely exclusively on auto-layout in my Figma designs, ensuring that the dev-mode is as relevant and efficient as possible, while providing the most pertinent information upfront. </br> </br> Feel free to contact me anytime !",
    recruiters:
      "Bonjour, <br/> <br/> I'm a french designer currently pursuing a Bac+3 graphic degree at MyDigitalSchool in France, balancing my studies with hands-on experience as a designer for Wattiz. <br/> <br/> Alongside my professional work, I am also a volunteer for 3 associations : Skorpia.fr, Assoreg.fr, and ACL Studio. With a solid foundation in development, including expertise in NextJS, React, Astro, Symfony, and Laravel, I bring a well-rounded skill set to my work. <br/> <br/> This combination of design, development, and volunteer experience enables me to effectively communicate and collaborate in diverse team settings, ensuring that I deliver high-quality solutions that meet both user and business needs. </br> </br> Feel free to contact me anytime by mail or on my LikendIn.",
    CM: "Hello, <br/> <br/> I currently serve as the Community Manager for both Wattiz and Skorpia.fr, where I manage online presence, engage with audiences, and drive brand communication strategies. <br/> <br/> In addition to my community management role, I also handle graphic design tasks for those two compagny, creating visually appealing content that aligns with brand values and engages users effectively. <br/> <br/> My ability to blend strategic communication with creative visuals helps me craft cohesive and impactful campaigns that resonate with both communities and customers.  </br> </br> Feel free to contact me anytime !",
    mom: "Hi Mom, <br/> <br/> I do magic stuff on my computer to make the internet look better. <br/> <br/> And yes I ate my vegetables already... <br/> <br/> love, <br/> <br/> your son",
  };

  return (
    <div className="mb-24 mt-24 min-h-[600px] flex-col items-start inline-flex overflow-hidden mx-auto w-full">

      <div className="max-w-[1100px] gap-8 flex-col justify-start items-start inline-flex justify-between w-full md:flex-row">
        <div className="w-auto flex-col justify-start items-start inline-flex">
          <div className="self-stretch text-bleu text-xs font-normal leading-tight">
            ABOUT
          </div>
          <div className="self-stretch text-black text-[42px] md:text-[82px] font-semibold leading-[88px] dark:text-blanc">
            Who am I
          </div>
        </div>
        <div className="grow shrink basis-0 flex-col justify-between w-full items-start gap-11 inline-flex">

          <div className="self-stretch justify-between w-full items-center inline-flex gap-8 overflow-scroll scroll-smooth">
            {Object.keys(content).map((key) => (
              <div
                key={key}
                onClick={() => setActiveSection(key)}
                className={`text-[17px] font-medium cursor-pointer ${
                  activeSection === key
                    ? "text-noir underline dark:text-blanc"
                    : "text-gris_2"
                }`}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </div>
            ))}
          </div>
          <BlurFade>
            <div className="self-stretch text-noir text-[17px] font-medium leading-normal dark:text-blanc"
                dangerouslySetInnerHTML={{ __html: content[activeSection] }}></div>
          </BlurFade>  
        </div>
        
      </div>
    </div>
  );
};

export default AboutSection;