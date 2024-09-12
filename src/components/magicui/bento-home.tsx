import { ReactNode } from "react";
import { cn } from "@/lib/utils";

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
        "grid w-full auto-rows-[25rem] grid-cols-3 gap-4",
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
}: {
  name: string;
  className: string;
  background: ReactNode;
  description: string;
  href: string;
}) => (
  <a
    href={href}
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-rxl",
      // light styles
      "bg-gris",
      // dark styles
      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className,
    )}
  >

    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 text-center">
      <h3 className="text-3xl font-semibold text-noir dark:text-blanc">
        {name}
      </h3>
      <p className="max-w-lg text-xl text-gris_2 mx-auto">{description}</p>
    </div>
    <div>{background}</div>

    
  </a>
);

export { BentoCard, BentoGrid };

