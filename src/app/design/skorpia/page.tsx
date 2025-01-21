"use client";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-case";

const features = [
  { link: "/design/case/skorpia/1.png", id: 1, isFullWidth: true },
  { link: "/design/case/skorpia/2.png", id: 2, isFullWidth: false },
  { link: "/design/case/skorpia/2.png", id: 3, isFullWidth: false },
];

export default function Page() {
  return (
    <div className="flex flex-col md:flex-row w-full max-w-[1400px] mx-auto gap-[32px] py-[50px] md:pt-0">
      <div className="flex flex-col w-1/3"></div>
      <div className="flex flex-col w-100% md:w-2/3">
        <BentoGrid>
          {features.map((feature) => (
            <BentoCard key={feature.id} {...feature}/>
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}