import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-work";


//cards
const features = [
  {
    name: "Arc commpagny sum'",
    description: "",
    href: "https://www.figma.com/community/file/1412099592495428829/arc-company-sum",
    cta: "Ouvrir sur Figma",
    className: "col-span-3 lg:col-span-3",
    background: (       
      <img className="mt-[150px] lg:mt-[0]" src="/works/arc.png"/>
    ),
  },
  {
    name: "ACL Studio",
    description: "",
    href: "#",
    cta: "(soon)",
    className: "col-span-3 lg:col-span-3",
    background: (       
      <img className="mt-[150px] lg:mt-[0]" src="/works/aclstudio.png"/>
    ),
  },
  {
    name: "Croissantage",
    description: "",
    href: "https://croissantage.com",
    cta: "Visiter le site",
    className: "col-span-3 lg:col-span-3",
    background: (       
      <img className="mt-[150px] lg:mt-[0]" src="/works/croissantage.png"/>
    ),
  },
  {
    name: "Retropizza.fr",
    description: "",
    href: "https://www.figma.com/community/file/1412100863601339614/retropizza-com",
    cta: "Ouvrir sur Figma",
    className: "col-span-3 lg:col-span-3",
    background: (       
      <img className="mt-[150px] lg:mt-[0]" src="/works/retropizza.png"/>
    ),
  },
  {
    name: "Skorpia",
    description: "",
    href: "https://skorpia.fr",
    cta: "Visiter le site",
    className: "col-span-3 lg:col-span-3",
    background: (       
      <img className="mt-[150px] lg:mt-[0]" src="/works/skorpia.png"/>
    ),
  },
  {
    name: "Avalanche Paris",
    description: "",
    href: "https://avalancheparis.tv",
    cta: "Visiter le site",
    className: "col-span-3 lg:col-span-3",
    background: (       
      <img className="mt-[150px] lg:mt-[0]" src="/works/avalanche.png"/>
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
