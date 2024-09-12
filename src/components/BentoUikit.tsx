import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-uikitOne";
import { BentoCardTwo, BentoGridTwo } from "@/components/magicui/bento-uikitTwo";
import Marquee from "@/components/magicui/marquee";


//"and mooore"

const mooore = [
  {
    background: "/uikit/more/footer.png",
  },
  {
    background: "/uikit/more/bento1.png",
  },
  {
    background: "/uikit/more/cards.png",
  },
  {
    background: "/uikit/more/bento2.png",
  },
];

//Bento Features
const features = [
  {
    name: "Simple d’utilisation",
    description: "Il vous suffit de drag & drop les sections que vous voulez utiliser.",
    className: "col-span-3 lg:col-span-2",
    background: ( 
      <video 
        src="/uikit/utilisation.mov"  
        autoPlay 
        loop 
        muted
        className="w-full h-auto"
      />    
    ),
  },
  {
    name: "Entièrement responsive",
    description: "Chaque sections est conçu avec une variante mobile, talette et ordinateur.",
    className: "col-span-3 lg:col-span-1",
    background: (
      <img src="/uikit/responsive.png"/>
    ),
  },
  {
    name: "Dark mode (soon)",
    description: "Embrace the dark side",
    className: "col-span-3 lg:col-span-1",
    background: (
      <img src="/uikit/darkmode.png"/>
    ),
  },
  {
    name: "Entièrement customizable.",
    description: "Chaque sections est composée de plusieurs variantes pour convenir au mieux vos besoins.",
    className: "col-span-3 lg:col-span-2",
    background: (
      <video 
        src="/uikit/custom.mov"  
        autoPlay 
        loop 
        muted
        className="w-full h-auto"
      />    
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



//Bento sections
const sections = [
  {
    name: "Feature Sections",
    description: "Idéale pour vos éléments clés",
    className: "col-span-3 lg:col-span-3s",
    background: ( 
      <img src="/uikit/features.png"/>
    ),
  },
  {
    name: "Blog",
    description: "Lire & être lu.",
    className: "col-span-3 lg:col-span-1",
    background: (
      <img src="/uikit/blog.png"/>
    ),
  },
  {
    name: "Hero Sections",
    description: "La première impression est importante.",
    className: "col-span-3 lg:col-span-2",
    background: (
      <img src="/uikit/hero.png"/>
    ),
  },
  {
    name: "Pricing",
    description: "Simple, efficace.",
    className: "col-span-3 lg:col-span-2",
    background: (
      <img src="/uikit/pricing.png"/>
    ),
  },
  {
    name: "Reviews",
    description: "Let them speak !",
    className: "col-span-3 lg:col-span-1",
    background: (
      <img src="/uikit/reviews.png"/>
    ),
  },
  {
    name: "FAQ",
    description: "Pour les questions fréquentes.",
    className: "col-span-3 lg:col-span-1",
    background: (
      <img src="/uikit/faq.png"/>
    ),
  },
  {
    name: "Payment Page.",
    description: "Shut up and take my money ! ",
    className: "col-span-3 lg:col-span-2",
    background: (
      <img src="/uikit/pricing.png"/>
    ),
  },
  {
    name: "and Mooore",
    description: "",
    className: "col-span-3 lg:col-span-3",
    background: (
        <Marquee
              pauseOnHover
              className="top-10 [--duration:40s]"
            >
              {mooore.map((f, idx) => (
              <figure
                  key={idx}
                  style={{ backgroundImage: `url(${f.background})` }}
                  className={cn(
                    "relative w-[42rem] h-[24rem] cursor-pointer overflow-hidden p-4",
                    "bg-cover bg-center rounded-xl",
                    "transform-gpu transition-all duration-300 ease-out",
                  )}
                >
                  <div className="flex flex-col justify-end h-full">
                  </div>
                </figure>
              ))}
            </Marquee>
    ),
  },
];


export function Bento2() {
  return (
    <BentoGridTwo>
      {sections.map((sections, idx) => (
        <BentoCardTwo key={idx} {...sections} />
      ))}
    </BentoGridTwo>
  );
}

