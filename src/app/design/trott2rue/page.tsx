"use client";
import BlurFade from "@/components/magicui/blur-fade";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-case";
import { useState } from "react";

const features = [
  { link: "/design/case/trott/1.webp", id: 1, isFullWidth: true },
  { link: "/design/case/trott/2.webp", id: 2, isFullWidth: true },
  { link: "/design/case/trott/3.webp", id: 3, isFullWidth: true },
  { link: "/design/case/trott/4.webp", id: 4, isFullWidth: true },
  { link: "/design/case/trott/5.webp", id: 5, isFullWidth: true },
  { link: "/design/case/trott/6.webp", id: 6, isFullWidth: true },
  { link: "/design/case/trott/7.webp", id: 7, isFullWidth: true },
  { link: "/design/case/trott/8.webp", id: 8, isFullWidth: true },
];

const FAQAccordion = () => {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (section: number) => {
    setOpenSection(openSection === section ? null : section);
  };

  const faqs = [
    {
      id: 1,
      question: "Informations",
      answer: `Trott2Rue est une SARL spécialisée dans la vente de produits et d’équipements de sport dans le domaine de la trottinette électrique. À l’occasion de la création de son écurie pour la participation au Championnat national de course de e-trott’, elle avait besoin de promouvoir sa participation, son équipe et de permettre à ses abonnés Facebook et Instagram de suivre l’avancement du championnat.
              <br/><br/>
              Dans ce projet, j’ai occupé le rôle de graphiste avec pour objectif de créer un total de 19 templates de posts et stories, facilement éditables par une personne n’ayant aucune compétence graphique.
              <br/><br/>
              Le client n’ayant pas de licence Adobe, j’ai donc choisi Figma pour sa gestion des variables et composants, parfaite pour une situation où seules les informations textuelles sont à modifier.
              <br/><br/>
              Le style graphique reprend les codes de la course, inspiré de ce que l’on retrouve en F1 et en MotoGP. L’objectif était de se démarquer de ce qui était fait jusque-là chez les concurrents avec des visuels percutants. Les informations sont stratégiquement disposées en fonction de leur hiérarchie d’importance et sont accompagnées d’assets de course les mettant en valeur.
              <br/><br/>
              Les résultats sont sans appel : le taux d’engagement sur Instagram et Facebook a augmenté d’environ 15 %, et le client, comme son écurie, rapporte “une excellente surprise sur la qualité des rendus”.`,
    },
    {
      id: 2,
      question: "Testimonial",
      answer: `"Rien à redire ! Tu es structuré, organisé, méthodologie, clair, explicite. Encore merci pour le travail qualitatif que tu as fournis !”
                <br/><br/>
              Yacin Nedelec - Gérant à Trott2Rue`,
    },
    {
      id: 3,
      question: "Links",
      answer: `<a href="https://www.instagram.com/trott2rue_clermont_ferrand/" target="_blank" rel="noopener noreferrer">Instagram</a><br/>
               <a href="https://www.facebook.com/Trott2rue/" target="_blank" rel="noopener noreferrer">Facebook</a><br/>`,
    },
  ];

  return (
    <div className="w-full sticky top-[70px]">
      <BlurFade>
      {faqs.map((faq) => (
        <div key={faq.id}>
          <button
            onClick={() => toggleSection(faq.id)}
            className={`flex items-center justify-between w-full py-4 font-Mh4 font-normal leading-[19px] text-left text-currentColor`}
          >
            <span>{faq.question}</span>
            <svg
              className={`w-3 h-3 transform ${
                openSection === faq.id ? "" : "rotate-180"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-[max-height] duration-300 ${
              openSection === faq.id ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div
              className="py-2 text-gris_2 font-Mh4 font-normal leading-[22px] text-left"
              dangerouslySetInnerHTML={{ __html: faq.answer }}
            ></div>
          </div>
        </div>
      ))}
      </BlurFade>
    </div>
  );
};

export default function Page() {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-[1400px] mx-auto gap-[32px] py-[50px] md:pt-0">
      <div className="flex flex-col w-full mt-[70px] md:mt-0 md:w-1/3">
        <FAQAccordion/>
      </div>
      <div className="flex flex-col w-full pt-[70px] md:w-2/3">
        <BlurFade>
          <BentoGrid>
            {features.map((feature) => (
              <BentoCard key={feature.id} {...feature} />
            ))}
          </BentoGrid>
        </BlurFade>
      </div>
    </div>
  );
}