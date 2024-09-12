import { BentoCard, BentoGrid } from "@/components/magicui/bento-home";


//Data cards
const features = [
  {
    name: "Figma",
    description: "Des templates design, avec auto-layout et facile à utiliser.",
    href: "/templates/figma",
    cta: "Découvrir",
    className: "col-span-3 lg:col-span-3",
    background: ( 
      <img src="/templates/figma.png"/>
    ),
  },
  {
    name: "Slide",
    description: "Pour des présentations uniques.",
    href: "/templates/slide",
    cta: "Découvrir",
    className: "col-span-3 lg:col-span-2",
    background: ( 
      <img src="/templates/slides.png"/>
    ),
  },
  {
    name: "Notion",
    description: "Organiser vos travaux et votre vie digitale.",
    href: "/templates/notion",
    cta: "Découvrir",
    className: "col-span-3 lg:col-span-1",
    background: ( 
      <img src="/templates/notion.png"/>
    ),
  },

];

export function Bento() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
