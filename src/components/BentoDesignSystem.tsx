import { BentoCardTwo, BentoGridTwo } from "@/components/magicui/bento-uikitTwo";

//Bento Features
const features = [
  {
    name: "Light & Dark",
    description: "(comming soon)",
    className: "col-span-3 lg:col-span-1",
    background: ( 
      <img src="/design-system/bento/dark.png"/>
    ),
  },
  {
    name: "Juste les bon boutons",
    description: "Taille idéale",
    className: "col-span-3 lg:col-span-2",
    background: (
      <img src="/design-system/bento/button.png"/>
    ),
  },
  {
    name: "Juste les bon toggles",
    description: "facile à clicker",
    className: "col-span-3 lg:col-span-2",
    background: (
      <img src="/design-system/bento/toggle.png"/>
    ),
  },
  {
    name: "Ez custom",
    description: "Chaque composant est conçu pour être entièrement customisable.",
    className: "col-span-3 lg:col-span-1",
    background: (
      <img src="/design-system/bento/custom.png"/>
    ),
  },
  {
    name: "Spatial mode",
    description: "(comming soon)",
    className: "col-span-3 lg:col-span-1",
    background: (
      <img src="/design-system/bento/spatial.png"/>
    ),
  },
  {
    name: "Fonctionne en harmonie avec csh Icons et csh UI landing kit",
    description: "",
    className: "col-span-3 lg:col-span-2",
    background: (
      <img src="/design-system/bento/uikit.png"/>
    ),
  },
];

export function Bento() {
  return (
    <BentoGridTwo>
      {features.map((feature, idx) => (
        <BentoCardTwo key={idx} {...feature} />
      ))}
    </BentoGridTwo>
  );
}