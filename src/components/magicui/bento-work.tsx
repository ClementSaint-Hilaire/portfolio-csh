import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[35rem] grid-cols-3 gap-20",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  description,
  href,
  cta,
}: {
  name: string;
  className: string;
  background: ReactNode;
  description: string;
  href: string;
  cta: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-rxl",
      // light styles
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className,
    )}

  >
    <div className="absolute">{background}</div>
    
    <div
      className={cn(
        "bg-gradient-to-b from-transparent to-black/50 pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-12 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
      )}
    >
      <Button variant="ghost" asChild size="sm" className="pointer-events-auto ">
        <a href={href} className="hover:bg-transparent">
          <h1 className="text-xl py-2 px-4 rounded-full bg-white">{cta}</h1>
          <h3 className="text-xl mx-6 text-white font-semibold dark:text-neutral-300">{name}</h3>
          <p className="max-w-lg text-neutral-400">{description}</p>
        </a>
      </Button>
    </div>
  </div>
);

export { BentoCard, BentoGrid };
