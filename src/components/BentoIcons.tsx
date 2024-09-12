import { BentoCard, BentoGrid } from "@/components/magicui/bento-icons";


//Bento Features
const features = [
  {
    name: "Fait avec précision",
    description: "Chaque icon a été fait à la main avec une attention toute particulière pour que chaque pixel soit parfaits",
    className: "col-span-3 lg:col-span-2",
    background: ( 
      <img src="/icons/precision.png"/>
    ),
  },
  {
    name: "Minimal",
    description: "Droit au but",
    className: "col-span-3 lg:col-span-1",
    background: (
      <img src="/icons/minimal.png"/>
    ),
  },
  {
    name: "Réaliste",
    description: "Icons inspiré d’éléments existant.",
    className: "col-span-3 lg:col-span-1",
    background: (
      <img src="/icons/realiste.png"/>
    ),
  },
  {
    name: "16, 20, 24px ",
    description: "Variantes de taille",
    className: "col-span-3 lg:col-span-2",
    background: (
      <img src="/icons/sizes.png"/>
    ),
  },
  {
    name: "Line & Fill",
    description: "Disponible pour chaque icon",
    className: "col-span-3 lg:col-span-1",
    background: (
      <img src="/icons/lineAndFill.png"/>
    ),
  },
  {
    name: "1.5pt",
    description: "Pas trop fin, pas trop épais",
    className: "col-span-3 lg:col-span-1",
    background: (
      <img src="/icons/pts.png"/>
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