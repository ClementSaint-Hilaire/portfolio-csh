"use client";
import BlurFade from "@/components/magicui/blur-fade";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-case";
import { useState } from "react";

const features = [
  { link: "/design/case/skorpia/1.webp", id: 1, isFullWidth: true },
  { link: "/design/case/skorpia/2.webp", id: 2, isFullWidth: false },
  { link: "/design/case/skorpia/3.webp", id: 3, isFullWidth: false },
  { link: "/design/case/skorpia/4.webp", id: 4, isFullWidth: true },
  { link: "/design/case/skorpia/5.webp", id: 5, isFullWidth: true },

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
      answer: `Skorpia est une assosiation cannaise, proposant plusieurs type de services d’hébergement web, du serveur dédié au serveur de jeux, en passant par l’incontournable VDS. Avec l’agrandissement de son infrastructure dans un nouveau data center à Paris, l’association avait besoin de mettre à jours son identité visuel et assurer une nouvelle présence en ligne en phase avec leurs nouvelles offres. <br/> <br/> Mon rôle à donc été de concevoir la direction artistique de Skorpia.fr qui comprend la refonte de son identité visuelle, mais également le redesign de son site internet ainsi que la création de ses réseaux et de leur contenues. <br/><br/> Ces missions avaient pour objectif de promouvoir les nouveaux services de l’association et d’élagir la clientèle en sortant de l’univers “gamer” dans laquelle elle s’étais inscrit. <br/> <br/> La première solution à donc été de redéfinir l’identité de l’association : logo, couleurs, icones, typographie, illustrations, objects de style, pour pouvoir repartir sur des bases solides en prévisions des futurs créations. <br/> L’étape suivante à été le design de l’ensemble des dashboards permettant aux utilisateurs d’intéragir avec leur produit, un gros challenge d’UX. <br/> Le troisième travail a été sur le redisign du site vitrine qui devait présenté les aventages de skorpia sur ses compétiteurs : services variés, locaux, facilité d’utilisationt, flexibilité et support communautaire. Le dernier travail à porté sur la créations de plus de 127 templates de posts pour Instagram, Linkedin, Discord, X et YouTube. <br/> <br/> Les résultats se sont tous de suite fait sentir avec d’exellements retours utilisateurs, une plus grande affluence sur le site qui à entrainé un x4 dans la vente de services VDS.`,
    },
    {
      id: 2,
      question: "Testimonial",
      answer: `Bonjour, 
              <br/><br/>
              J'aimerais vous partager mon expérience avec Clément dans le cadre de son travail en tant que bénévole au sein de l'association d'hébergement SKORPIA.
              <br/><br/>
              Je tiens tout d'abord à le remercier pour tout le travail exceptionnel qu’il a réalisé.
              <br/><br/>
              Son professionnalisme m’a véritablement impressionné, tout comme son souci constant de bien faire. Chaque élément de ses créations, des couleurs, des icônes, des rendus, aux détails graphiques, témoigne d’une grande rigueur et d’un véritable talent. Grâce à lui, nous avons une identité visuelle forte et parfaitement alignée avec nos valeurs, que nous ne pouvions même pas imaginer avant de le rencontrer, et qui est désormais essentielle pour nous.
              <br/><br/>
              Clément est une personne sérieuse et appliquée, sur qui on peut compter, et collaborer avec lui a été un véritable plaisir. Je ne peux que le recommander à tous ceux qui recherchent un professionnel de la création artistique passionné, investi et talentueux.
              <br/><br/>
              Cordialement,
              <br/><br/>
              Eliot Mafille`,
    },
    {
      id: 3,
      question: "Links",
      answer: `<a href="https://clementsainthilaire.notion.site/skorpia-design-system?pvs=4" target="_blank" rel="noopener noreferrer">Design System</a><br/>
               <a href="https://www.figma.com/proto/y7f0t63Nb2XHy5HHo38Jw2/Skorpia.fr-3.0?page-id=1%3A3&node-id=2-3&viewport=426%2C105%2C0.08&t=rVXnUtPTU2axXnly-1&scaling=scale-down-width&content-scaling=fixed&hotspot-hints=0" target="_blank" rel="noopener noreferrer">Skorpia.fr</a><br/>
               <a href="https://www.instagram.com/skorpia_fr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">Instagram</a>`,
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
      <div className="flex flex-col w-full md:w-1/3">
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