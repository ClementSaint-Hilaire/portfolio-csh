import { BentoCardTwo, BentoGridTwo } from "@/components/magicui/bento-uikitTwo";

//Bento Features
const features = [
  {
    name: "Light & Dark",
    description: "Embrace the dark side",
    className: "col-span-3 lg:col-span-1",
    background: ( 
      <img src="/design-system/bento/dark.png"/>
    ),
  },
  {
    name: "Juste les bon boutons",
    description: "Size matters",
    className: "col-span-3 lg:col-span-2",
    background: (
      <img src="/design-system/bento/button.png"/>
    ),
  },
  {
    name: "Juste les bon toggles",
    description: "Ease clic",
    className: "col-span-3 lg:col-span-2",
    background: (
      <img src="/design-system/bento/toggle.png"/>
    ),
  },
  {
    name: "Ez custom",
    description: "Each component is crafted to be 100% customisable",
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
    name: "Work in harmony with csh Icons and csh UI landing kit",
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