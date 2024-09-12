import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-work";


//cards
const features = [
  {
    name: "Modern Furniture Agency",
    description: "",
    href: "https://www.figma.com/community/file/1400064576249495562/template-furniture-website",
    cta: "Ouvrir",
    className: "col-span-3 lg:col-span-3",
    background: (       
      <img className="mt-[150px] lg:mt-[0]" src="/templates/figma/furnitureAgency.png"/>
    ),
  },
  {
    name: "Dark UI/UX Portfolio",
    description: "",
    href: "https://www.figma.com/community/file/1399731479419259722/ui-ux-dark-portfolio",
    cta: "Ouvrir",
    className: "col-span-3 lg:col-span-3",
    background: (       
      <img className="mt-[150px] lg:mt-[0]" src="/templates/figma/darkPortfolio.png"/>
    ),
  },
  {
    name: "The Blog",
    description: "",
    href: "https://www.figma.com/community/file/1348774121253901502/clean-blog",
    cta: "Ouvrir",
    className: "col-span-3 lg:col-span-3",
    background: (       
      <img className="mt-[150px] lg:mt-[0]" src="/templates/figma/blog.png"/>
    ),
  },
  {
    name: "UI/UX Portfolio",
    description: "",
    href: "https://www.figma.com/community/file/1349857591277304414/ui-ux-portfolio",
    cta: "Ouvrir",
    className: "col-span-3 lg:col-span-3",
    background: (       
      <img className="mt-[150px] lg:mt-[0]" src="/templates/figma/uiUxPortfolio.png"/>
    ),
  },
  {
    name: "404 pages",
    description: "",
    href: "https://www.figma.com/community/file/1353744962325890487/cool-404-pages",
    cta: "Ouvrir",
    className: "col-span-3 lg:col-span-3",
    background: (       
      <img className="mt-[150px] lg:mt-[0]" src="/templates/figma/404.png"/>
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
