import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-design";


//cards recent work
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

];

export function Bento() {
  return (
    <>
        <h1>Titre à la con</h1>
        <BentoGrid>
            {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
            ))}
        </BentoGrid>
    </>
    
  );
}
