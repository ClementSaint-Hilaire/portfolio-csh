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
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
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
}: {
  name: string;
  className: string;
  background: ReactNode;
  description: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-rxl",
      // light styles
      // dark styles
      //"transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className,
    )}
  >
    <div className="absolute">{background}</div>
    <div className="absolute w-full  bg-gradient-to-b from-transparent to-black/80 bottom-[0px] pointer-events-none z-10 flex flex-col gap-1 p-8 transition-all duration-300">
      <h3 className="text-xl font-semibold text-white">
        {name}
      </h3>
      <p className="max-w-lg text-lg text-white">{description}</p>
    </div>
    
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };
