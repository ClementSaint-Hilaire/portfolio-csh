import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const BentoGrid = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid w-full grid-cols-4 gap-4 grid-auto-rows-[1fr]">
      {children}
    </div>
  );
};

const BentoCard = ({
  link,
  id,
  isFullWidth,
}: {
  id: number;
  link: string;
  isFullWidth?: boolean;
}) => (
  <div
    key={id}
    className={cn(
      "relative flex flex-col justify-center overflow-hidden",
      isFullWidth ? "col-span-4" : "col-span-2",
      "aspect-square"
    )}
  >
    <Image
      src={link}
      alt="Case picture"
      fill
      className="object-cover"
    />
  </div>
);

export { BentoCard, BentoGrid };