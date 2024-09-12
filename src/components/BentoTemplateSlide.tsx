import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-work";


//cards
const features = [
  {
    name: "Colorfull Keynote",
    description: "",
    href: "https://www.figma.com/community/file/1377584756687563594/keynote-templates-fr-en",
    cta: "Ouvrir",
    className: "col-span-3 lg:col-span-3",
    background: (       
      <img className="mt-[150px] lg:mt-[0]" src="/templates/slide/Keynote.png"/>
    ),
  },
  {
    name: "Dark Keynote",
    description: "",
    href: "https://www.figma.com/community/file/1378114635093642476/dark-keynote-templates",
    cta: "Ouvrir",
    className: "col-span-3 lg:col-span-3",
    background: (       
      <img className="mt-[150px] lg:mt-[0]" src="/templates/slide/darkKeynote.png"/>
    ),
  },
  {
    name: "Grey Keynote",
    description: "",
    href: "https://www.figma.com/community/file/1378114635093642476/dark-keynote-templates",
    cta: "Ouvrir",
    className: "col-span-3 lg:col-span-3",
    background: (       
      <img className="mt-[150px] lg:mt-[0]" src="/templates/slide/greyKeynote.png"/>
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
